// For of dan For in

// For of : digunakan untuk mengiterasi melalui nilai-nilai elemen-elemen yang dapat diulang (iterable) seperti array, string, Map, Set, dan sebagainya.
// For in : Digunakan untuk mengiterasi melalui properti-properti suatu objek. Ini cocok untuk objek yang memiliki sifat enumerable seperti objek biasa atau array. Namun, sebaiknya tidak digunakan untuk iterasi array, karena dapat menghasilkan hasil yang tidak diinginkan jika properti yang ditambahkan ke prototipe Array diteruskan ke hasil iterasi.

// Contoh

// for of

// array
const mhs = ["tomi", "saputra", "andi"];

// contoh tanpa for of
// for (i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((e, i) => {
//   console.log(`${e} adalah mahasiswa ke ${i}`);
// });

// contoh dengan for of
// for (const m of mhs) {
//   console.log(m);
// }

// memunculkan index dengan for of
// karena hasilnya array maka bisa kita destructuring
for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke ${i}`);
}

// String
const nama = "tomi";
for (const n of nama) {
  console.log(n);
  // output :
  // t
  // o
  // m
  // i
}

// ==> NodeList <===

// ini akan error jika tidak dijalankan di browser terbaru
// const lsMhs = document.querySelectorAll(".nama");

// lsMhs.forEach((e) => {
//   console.log(e.textContent);
// });

// for (const m of lsMhs) {
//   console.log(m.innerHTML);
// }

// Arguments

function jumlahkanAngka() {
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
    // 15
  }
  return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// For in

const msy = {
  nama: "tomi",
  umur: 23,
  email: "tomi@gmail.com",
};

for (m in msy) {
  //   console.log(m);

  // mengambil value sebuah object
  console.log(msy[m]);
}
