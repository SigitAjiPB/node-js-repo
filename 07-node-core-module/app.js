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
// fs.readFile('data/test.txt','utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });



// =============== read line =================
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukan nama anda: ', (nama) => {

  rl.question('Masukan No Telpon: ', (noTelp) => {
    const contact = {
      nama, noTelp
    }
    const file = fs.readFileSync('data/contacts.JSON', 'utf8');
    const contacts = JSON.parse(file);
  
    contacts.push(contact)
    
    fs.writeFileSync('data/contacts.JSON', JSON.stringify(contacts));
    console.log("Data Sudah terinput")

    rl.close();


  });

});






