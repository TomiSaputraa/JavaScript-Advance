const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 1];

// mnecari angka lebih >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// filter
// const newAngka = angka.filter((a) => a >= 3);

// map
// kalikan semua angka kali 2
// const newAngka = angka.map((a) => a * 2);

// reduce
// untuk melakukan sesuatu pada seluruh elemen arraynya
// jumlahkan seluruh elemen pada array

// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// ); // accumulator adalah hasil dari prosesnya

// method chaining
// method chaining adalah menggabungkan semua method di atas menjadi satu
// cari angka > 5
// kalikan 3
// jumlahkan
const newAngka = angka
  .filter((a) => a > 5) // 8,9
  .map((a) => a * 3) //24, 27
  .reduce((acc, cur) => acc + cur); //51

console.log(newAngka);
