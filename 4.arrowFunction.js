// Arrow function

// perbedaan arrow function dan function expression

// - function expression
// let tampilNama = function (nama) {
// return `Halo ${nama}`;
// };

// tampilNama("tomi");

// - arrow function
// let tampilNama = (nama) => {
//   return `Halo ${nama}`;
// };

// console.log(tampilNama("tomi"));

// - implicit return : tanpa menulis return
// let tampilNama = (nama) => `Halo ${nama}`;
// console.log(tampilNama("tomi"));

// - tanpa parameter
// const tampilNama = () => `hello dunia`;
// console.log(tampilNama());

// let tampilNama = (nama, waktu) => {
//   return `Halo ${nama}, selamat ${waktu}`;
// };

// console.log(tampilNama("tomi", "malam"));

// - function map

let mhs = [`tomi`, `saputra`, `andi`];

// fnction map tanpa arrow fnc
// let jmlh = mhs.map(function (nama) {
//   return nama.length;
// });

// map dengan arrow fnction
// let jmlh = mhs.map((nama) => nama.length);

// bungkus {} dengan () agar di anggap object bukan return value
let jmlh = mhs.map((nama) => ({ nama: nama, jmlhhHuruf: nama.length }));

// menampilkan data dalam bentuk table
console.table(jmlh);
