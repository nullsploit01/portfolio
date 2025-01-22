import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

async function fetchAllBlogs() {
  let allBlogs = [];
  let page = 1;
  const pageSize = 100;
  const outputPath = path.resolve(__dirname, '../data/blogs.json');

  try {
    console.log('Starting to fetch blogs from Strapi server...');

    while (true) {
      const response = await axios.get(`${process.env.STRAPI_SERVER_URL}/api/blogs`, {
        params: {
          'pagination[page]': page,
          'pagination[pageSize]': pageSize
        },
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`
        }
      });

      const { data, meta } = response.data;

      if (!data.length) {
        console.log('No more blogs to fetch.');
        break;
      }

      allBlogs = allBlogs.concat(data);
      console.log(`Fetched page ${page} of ${meta.pagination.pageCount}`);

      if (page >= meta.pagination.pageCount) {
        break;
      }

      page++;
    }

    console.log(`Total blogs fetched: ${allBlogs.length}`);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, JSON.stringify(allBlogs, null, 2), 'utf-8');
    console.log(`Blogs saved successfully to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching blogs:', error.message);

    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  }
}

fetchAllBlogs();
