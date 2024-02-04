//core module
//file system

const fs = require('fs');


//menuliskan string ke file seara syncronous


// try {
// fs.writeFileSync('data/test.txt', 'Hello world')
// } catch (err) {
//   console.log('error');
//}

// =============== menuliskan file secara asyncronous ==================

// fs.writeFileSync('data/test.txt', 'Boom!', (err) => {
//   console.log('error');
// })


// ================= membaca isi file secara sycronous ===============
// const data = fs.readFileSync('data/test.txt', 'utf8');

// console.log(data);



//================== membaca isi file seara asyncronous =================
fs.readFile('data/test.txt','utf-8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});




