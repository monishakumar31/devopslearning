// import os from 'os';
// import path from 'path';
// import { add, subtract,multiply,divide } from './math.js';

// console.log("Addition: " + add(5, 3));
// console.log("Subtraction: " + subtract(5, 3));  

import { readFile } from 'node:fs';

readFile('./Files/start.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
  //utf is used for file read format without using tostring
  console.log(data);

}); 

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  // process.exit(1); //optional
});
  

