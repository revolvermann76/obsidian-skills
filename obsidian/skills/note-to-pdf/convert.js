// Konvertiert eine Obsidian-Notiz (Markdown) in ein PDF.
// Aufruf: node convert.js <pfad-zur-notiz.md> <ziel-pdf-pfad>
//
// Pipeline: markdown-it + markdown-it-texmath + katex rendern Markdown
// (inkl. LaTeX-Formeln in $...$ / $$...$$) zu HTML. puppeteer-core steuert
// ein lokal installiertes Edge/Chrome an, um daraus ein PDF zu drucken.
// Kein Chromium-Download nötig, da ein vorhandener Browser wiederverwendet wird.

const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const texmath = require('markdown-it-texmath');
const katex = require('katex');
const puppeteer = require('puppeteer-core');

const srcPath = process.argv[2];
const outPath = process.argv[3];

if (!srcPath || !outPath) {
  console.error('Usage: node convert.js <source.md> <output.pdf>');
  process.exit(1);
}

let raw = fs.readFileSync(srcPath, 'utf8');

// YAML-Frontmatter abtrennen; nur der title wird für den HTML-<title> verwendet,
// der Rest der Frontmatter erscheint nicht im PDF-Inhalt.
let title = path.basename(srcPath, '.md');
const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
if (fmMatch) {
  const fm = fmMatch[1];
  const titleMatch = fm.match(/^title:\s*(.+)$/m);
  if (titleMatch) title = titleMatch[1].trim().replace(/^["']|["']$/g, '');
  raw = raw.slice(fmMatch[0].length);
}

// Wikilinks [[Ziel]] bzw. [[Ziel|Alias]] zu reinem Text umwandeln,
// da sie im PDF nicht klickbar sein können.
raw = raw.replace(/\[\[([^\]|]+?)(\|([^\]]+))?\]\]/g, (m, target, _p2, alias) => {
  const label = alias || target.split('/').pop().replace(/\.md$/, '');
  return label;
});

const md = new MarkdownIt({ html: true, breaks: false, linkify: true });
md.use(texmath, { engine: katex, delimiters: 'dollars', katexOptions: {} });

const bodyHtml = md.render(raw);
const katexCss = fs.readFileSync(require.resolve('katex/dist/katex.min.css'), 'utf8');

const html = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>
${katexCss}
body {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 12pt;
  line-height: 1.5;
  color: #1a1a1a;
  max-width: 800px;
  margin: 2em auto;
  padding: 0 1em;
}
h1, h2, h3 { color: #111; }
h1 { border-bottom: 2px solid #ddd; padding-bottom: 0.3em; }
h2 { margin-top: 1.6em; border-bottom: 1px solid #eee; padding-bottom: 0.2em; }
table { border-collapse: collapse; width: 100%; margin: 1em 0; }
th, td { border: 1px solid #ccc; padding: 0.5em 0.7em; text-align: left; }
th { background: #f4f4f4; }
code { background: #f4f4f4; padding: 0.1em 0.3em; border-radius: 3px; }

/* Seitenumbruch-Kontrolle: Tabellenzeilen und Überschriften nicht mitten
   im Umbruch zerreißen. */
h1, h2, h3 {
  break-after: avoid;
  page-break-after: avoid;
}
table, tr, thead {
  break-inside: avoid;
  page-break-inside: avoid;
}
p, li {
  orphans: 3;
  widows: 3;
}
</style>
</head>
<body>
${bodyHtml}
</body>
</html>`;

(async () => {
  const os = require('os');
  const candidates = [
    // Windows
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    // Linux – System-Chrome/Chromium
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    '/snap/bin/chromium',
    // Linux – puppeteer-Cache (~/.cache/puppeteer/chrome/…/chrome-linux64/chrome)
    ...(() => {
      try {
        const cacheBase = path.join(os.homedir(), '.cache', 'puppeteer', 'chrome');
        if (!fs.existsSync(cacheBase)) return [];
        return fs.readdirSync(cacheBase)
          .map(d => path.join(cacheBase, d, 'chrome-linux64', 'chrome'))
          .filter(p => fs.existsSync(p))
          .sort().reverse();        // neueste Version zuerst
      } catch { return []; }
    })(),
  ];
  const executablePath = candidates.find(p => fs.existsSync(p));
  if (!executablePath) {
    throw new Error(
      'Kein Chromium-basierter Browser gefunden (Edge/Chrome/Chromium).\n' +
      'Tipp: "npm install puppeteer" im Skill-Ordner lädt Chrome automatisch herunter.'
    );
  }

  const browser = await puppeteer.launch({ executablePath, headless: 'new' });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '18mm', right: '18mm' },
  });
  await browser.close();
  console.log('PDF written to', outPath);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
