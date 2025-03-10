import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { fileURLToPath } from 'url';

const BASE_URL = 'https://nullsploit.in';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });

  pages.forEach((page) => {
    sitemapStream.write(page);
  });

  sitemapStream.end();

  const sitemapBuffer = await streamToPromise(sitemapStream);
  writeFileSync(join(__dirname, '../public', 'sitemap.xml'), sitemapBuffer);
  console.log('✅ Sitemap successfully generated!');
}

generateSitemap();
