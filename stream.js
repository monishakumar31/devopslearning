const fs=require('fs')
const path=require('path');
const readfile=fs.createReadStream(path.join(__dirname, 'Files', 'rename.txt'), {encoding:'utf8'});
const writefile=fs.createWriteStream(path.join(__dirname, 'Files', 'writefilea.txt'));

// readfile.on('data', (datachunck) => {
//   writefile.write(datachunck);
// });
readfile.pipe(writefile);