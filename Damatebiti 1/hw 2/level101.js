const fs = require('fs');
const path = require('path');

const mainFolder = 'level101';

const subFolders = ['classkwork', 'homework'];

fs.mkdirSync(mainFolder, { recursive: true });

subFolders.forEach(folder => {
    const folderPath = path.join(mainFolder, folder);
    fs.mkdirSync(folderPath, { recursive: true });

    const filePath = path.join(folderPath, 'file.txt');

    fs.writeFileSync(filePath, 'This is a placeholder text.');
});

console.log('Folders and files created successfully.');
