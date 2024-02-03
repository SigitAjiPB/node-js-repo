
// const fs = require('fs'); // untuk core module

// const cetakNama = require('./coba'); // import local module
// console.log ('Hello world!');

// const moment = require('moment'); // third party module / npm module / node_module

// console.log(cetakNama('Sigit'));

const coba = require('./coba'); 

console.log(coba.cetakNama('Sigit'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang())