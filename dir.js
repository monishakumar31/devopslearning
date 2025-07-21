const fs=require('fs');
const path=require('path');
if(fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  console.log('Directory created successfully!');
}); 
}else {
     fs.mkdir('./new', (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  console.log('Directory created successfully!');
});
}   
