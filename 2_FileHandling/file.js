import fs from 'fs';
//this is Asynchronous file handling
fs.writeFile('hello.txt', 'Hello World!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully');
  }
});
//this is Synchronous file handling
  fs.writeFileSync('hello.txt', 'Hello World!'),()=>{
  console.log('File written successfully')};

//this is Asynchronous file handling
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});
//this is Synchronous file handling 
const data = fs.readFileSync('hello.txt', 'utf8');
console.log('File content:', data);