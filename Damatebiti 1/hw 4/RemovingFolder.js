const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 10; i++) {
  const folderName = `davaleba${i}`;

  try {
    fs.mkdirSync(path.join(__dirname, folderName));
    console.log(`${folderName} created successfully.`);
  } catch (err) {
    console.error(`Failed to create ${folderName}:`, err);
  }
}

const folderToRemove = path.join(__dirname, 'davaleba7');
try {
  fs.rmdirSync(folderToRemove);
  console.log(`${folderToRemove} removed successfully.`);
} catch (err) {
  console.error(`Failed to remove ${folderToRemove}:`, err);
}
