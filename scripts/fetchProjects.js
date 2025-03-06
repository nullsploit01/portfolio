import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

async function fetchAllProjects() {
  let allProjects = [];
  let page = 1;
  const pageSize = 100;
  const outputPath = path.resolve(__dirname, '../src/data/projects.json');

  try {
    console.log('Starting to fetch projects from Strapi server...');

    while (true) {
      const response = await axios.get(`${process.env.STRAPI_SERVER_URL}/api/projects`, {
        params: {
          'pagination[page]': page,
          'pagination[pageSize]': pageSize,
        },
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
        },
      });

      const { data, meta } = response.data;

      if (!data.length) {
        console.log('No more projects to fetch.');
        break;
      }

      allProjects = allProjects.concat(data);
      console.log(`Fetched page ${page} of ${meta.pagination.pageCount}`);

      if (page >= meta.pagination.pageCount) {
        break;
      }

      page++;
    }

    console.log(`Total projects fetched: ${allProjects.length}`);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, JSON.stringify(allProjects, null, 2), 'utf-8');
    console.log(`Projects saved successfully to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching projects:', error.message);

    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  }
}

fetchAllProjects();
