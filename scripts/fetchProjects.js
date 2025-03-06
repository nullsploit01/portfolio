import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

async function fetchImageAsBase64(imageUrl) {
  try {
    const response = await axios.get(`${process.env.STRAPI_SERVER_URL}${imageUrl}`, {
      responseType: 'arraybuffer',
    });

    const base64String = Buffer.from(response.data, 'binary').toString('base64');
    const mimeType = imageUrl.split('.').pop();

    return `data:image/${mimeType};base64,${base64String}`;
  } catch (error) {
    console.error('Error fetching image:', imageUrl, error);
    return null;
  }
}

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
          populate: 'image',
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

      for (const project of data) {
        if (project.image && project.image.url) {
          project.image = await fetchImageAsBase64(project.image.url);
        }
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
    console.error('Error fetching projects:', error);

    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  }
}

fetchAllProjects();
