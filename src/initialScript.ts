import fs from 'fs';
import path from 'path';

const template = {
   exports: []
}

const dirPath = path.join(__dirname, 'database');
const filePath = path.join(dirPath, 'users.json');

try {
   if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
   }

   if (!fs.existsSync(filePath)) {
      const data = JSON.stringify(template, null, 3);
      fs.writeFileSync(filePath, data);
   }
} catch (error) {
   console.error(error);
}