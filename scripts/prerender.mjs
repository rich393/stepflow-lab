import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  { outPath: 'index.html', page: 'home', title: null, description: null, canonical: null },
  {
    outPath: 'privacy/index.html',
    page: 'privacy',
    title: 'Privacy Policy | Stepflow Lab',
    description: "Read Stepflow Lab's privacy policy. Learn how we collect, use, and protect your personal data.",
    canonical: 'https://www.stepflowlab.com/privacy',
  },
  {
    outPath: 'terms/index.html',
    page: 'terms',
    title: 'Terms of Use | Stepflow Lab',
    description: 'Stepflow Lab terms of use for AI workflow automation and consultancy services.',
    canonical: 'https://www.stepflowlab.com/terms',
  },
];

async function prerender() {
  const { render } = await import(path.resolve(distDir, 'server/entry-server.js'));
  const template = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8');

  for (const route of routes) {
    const html = render(route.page);
    let fullHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // Replace meta tags for sub-pages
    if (route.title) {
      fullHtml = fullHtml.replace(
        /<title>.*?<\/title>/,
        `<title>${route.title}</title>`
      );
    }
    if (route.description) {
      fullHtml = fullHtml.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${route.description}" />`
      );
    }
    if (route.canonical) {
      fullHtml = fullHtml.replace(
        /<link rel="canonical" href=".*?" \/>/,
        `<link rel="canonical" href="${route.canonical}" />`
      );
    }

    const filePath = path.resolve(distDir, route.outPath);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, fullHtml);
    console.log(`Prerendered: ${route.outPath}`);
  }

  // Clean up server build
  fs.rmSync(path.resolve(distDir, 'server'), { recursive: true, force: true });
  console.log('Cleaned up server build.');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
