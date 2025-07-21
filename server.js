// console.log("Server is starting...");
//console.log(global);
// const os=require('os');
// console.log("OS Type: " + os.type());
// console.log("OS Platform: " + os.platform());   
// console.log("OS Release: " + os.release());
// console.log("OS Architecture: " + os.homedir());
// console.log(__dirname)
// console.log(__filename)

// const path = require('path');
// console.log("Path Separator: " + path.dirname(__filename));
// console.log("Path Separator: " + path.basename(__filename));
// console.log("Path Separator: " + path.extname(__filename));
// console.log(path.parse(__filename));
// const add1 = require('./math').add;
// const subtract2 = require('./math').subtract;
// const multiply = require('./math').multiply;
// const divide = require('./math').divide;
// const { add, subtract,multiply,divide } = require('./math');
// console.log("Addition: " + add(5, 3));
// console.log("Subtraction: " + subtract(5, 3)); 


const fs=require('fs');
const path=require('path');

const filePath = path.join(__dirname, 'Files', 'rename.txt');
// console.log(filePath)
const fspromise=require('fs').promises

const fileops=async () => {
  try { 
    const data = await fspromise.readFile(filePath, 'utf8') 
    await fspromise.writeFile(filePath, 'jhkjkj!')
     await fspromise.unlink(filePath)
  console.log('File content:', data);
  }catch (err) {
    console.error('Error:', err); 
  }
}
fileops();
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });

// fs.writeFile(filePath, 'Hello, this is a new content!', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }
//   console.log('File written successfully!');
// });

// fs.appendFile(filePath, 'Thank you for sub!', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }
//   console.log('File written successfully!');
// });

// fs.rename(path.join(__dirname, 'Files', 'start.txt'),path.join(__dirname, 'Files', 'rename.txt'), (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }
//   console.log('rename' + 'File written successfully!');
// });