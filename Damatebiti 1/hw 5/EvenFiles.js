const fs = require('fs');
const path = require('path');

for (let i = 2; i <= 20; i += 2) {
  const fileName = `davaleba${i}.txt`;

  fs.writeFile(path.join(__dirname, fileName), '', (err) => {
    if (err) {
      console.error(`Failed to create ${fileName}:`, err);
    } else {
      console.log(`${fileName} created successfully.`);
    }
  });
}
