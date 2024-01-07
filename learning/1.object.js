// Object

// 1. object.create
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan.`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur`);
//   },
// };

// function Mahasiswa(name, energi) {
//   // dengan object.create
//   let mahasiswa = Object.create(methodMahasiswa);

//   // tanpa object.create
//   //   let mahasiswa = {};

//   // mahasiswa.nama digunakan agar bisa digunakan di log(this.nama) di atas
//   mahasiswa.nama = name;
//   mahasiswa.energi = energi;

//   //   tanpa object.create setiap ada key dan value baru dari sebuah object kita harus mendaftar lagi nama key nya
//   //   mahasiswa.tidur = methodMahasiswa.tidur;

//   return mahasiswa;
// }

// let tomi = Mahasiswa("tomi", 20);

// 2. Prototype

function Mahasiswa(name, energi) {
  //   let mahasiswa = Object.create(methodMahasiswa);

  // this sebenarnya membuat variable baru seperti:
  // let this = {};
  // let this = Object.create(Mahasiswa.protoype) // secara default constructor sudah punya prototype
  this.nama = name;
  this.energi = energi;

  //   return mahasiswa;

  // lalu this di return disini
  //   return this;
}

// contoh prototype, dengan prototype kita tidak perlu membuat object baru lagi
Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat main`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur`;
};

Mahasiswa.prototype.halo = { "hallo bg": "dad" };

let tomi = new Mahasiswa("tomi", 20);
