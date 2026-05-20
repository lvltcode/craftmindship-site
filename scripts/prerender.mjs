import { build } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');
const serverDir = resolve(root, 'dist-server');

const routes = [
  '/',
  '/work/cadence',
  '/work/puppy-program-os',
  '/work/multi-agent-workflow',
  '/analysis',
  '/analysis/td-insurance-telematics',
  '/analysis/coding-bootcamps-dying',
  '/analysis/ai-repair-intake-marketplace',
  '/analysis/anthropic-academy-skill-formation',
  '/lab',
  '/about',
];

async function prerender() {
  // Build server bundle
  await build({
    root,
    logLevel: 'warn',
    build: {
      ssr: resolve(root, 'src/entry-server.tsx'),
      outDir: 'dist-server',
    },
  });

  // Load the server bundle
  const { render } = await import(resolve(serverDir, 'entry-server.js'));

  // Read the client-built index.html as template
  const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');

  for (const route of routes) {
    const appHtml = render(route);

    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );

    const filePath =
      route === '/'
        ? resolve(distDir, 'index.html')
        : resolve(distDir, route.slice(1), 'index.html');

    const dir = dirname(filePath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    writeFileSync(filePath, html);
    console.log(`  ✓ ${route}`);
  }

  // Clean up server bundle
  rmSync(serverDir, { recursive: true, force: true });

  console.log(`Prerendered ${routes.length} routes.`);
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
