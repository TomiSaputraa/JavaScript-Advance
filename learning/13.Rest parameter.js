// Rest parameter

// function myFunc(a, b, ...myArgs) {
//   // return `${a} ${b} ${myArgs}`;

//   // ubah argument menjadi array
//   // return Array.from(arguments);

//   return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   // let total = 0;

//   // for (let n of angka) {
//   //   total += n;
//   // }

//   // return total;

//   // atau di refacroting
//   return angka.reduce((accu, curr) => accu + curr);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// Array destructuring
const kelompok = ["tomi", "andi", "arif", "anton"];

const [ketua, wakil, ...anggota] = kelompok;

console.log(anggota);

// Object destructuring
const team = {
  pm: "tomi",
  frontend: "arif",
  frontend2: "anto",
  backend: "rizal",
  devOps: "akari",
};

const { pm, ...pekerja } = team;

console.log(pekerja);
