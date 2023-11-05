let methodMahasiswa = {
  makan: function (makan) {
    this.energi += makan;
    return `Halo ${this.nama}, selamat makan`;
  },
  main: function (main) {
    this.energi -= main * 2;
    return `Halo ${this.nama}, selamat bermain`;
  },
};

function Mahasiswa(nama, energi) {
  // let methodMahasiswa = Object.create(methodMahasiswa);
  this.nama = nama;
  this.energi = energi;
  // methodMahasiswa.makan = methodMahasiswa.makan;
}
Mahasiswa.prototype.makan = function (makan) {
  this.energi += makan * 2;
  return `Halo ${this.nama}, selamat makan`;
};

let mhs1 = new Mahasiswa("tomi", 30);
