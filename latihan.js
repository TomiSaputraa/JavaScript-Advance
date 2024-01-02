// for of & for in

const angka = [1, 2, 3, 4, 5];

for (const n of angka) {
  console.log(n);
}

const nama = { nama: "tomi", umur: 20 };

for (const n in nama) {
  console.log(nama[n] + " ini n = " + n);
}
