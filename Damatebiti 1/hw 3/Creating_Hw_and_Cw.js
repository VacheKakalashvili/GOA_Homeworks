const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 10; i++) {
  const mainFolderName = `Folder${i}`;
  const mainFolderPath = path.join(__dirname, mainFolderName);

  try {
    fs.mkdirSync(mainFolderPath);
    console.log(`${mainFolderName} created successfully.`);

    const classwordPath = path.join(mainFolderPath, 'Classword');
    const homeworkPath = path.join(mainFolderPath, 'Homework');
    
    fs.mkdirSync(classwordPath);
    console.log(`Classword folder created inside ${mainFolderName}.`);

    fs.mkdirSync(homeworkPath);
    console.log(`Homework folder created inside ${mainFolderName}.`);
  } catch (err) {
    console.error(`Failed to create folders for ${mainFolderName}:`, err);
  }
}
