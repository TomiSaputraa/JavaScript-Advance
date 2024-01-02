// Spread operator :
// memecah (expand/unpack) iterable element menjadi single element

// const mhs = ["tomi", "andi", "arif"];

// console.log(...mhs[0]);

// contoh penggunaan :

// 1. penggabungan array
// const mhs = ["tomi", "andi", "arif"];
// const dosen = ["arif", "atom", "orang"];

// const orang = [...mhs, "aji", ...dosen];

// dengan concat susah menambahkan array baru seperti aji di atas
// // const orang = mhs.concat(dosen);
// console.log(orang);

// Mengcopy array

const mhs = ["tomi", "andi", "arif"];
// const mhs1 = mhs;
// mhs1[0] = "anto";

const mhs1 = [...mhs];
mhs1[0] = "anto";

// console.log(mhs1);

const limhs = document.querySelectorAll("li");

// const mhsnew = [];

// for (let i = 0; i < limhs.length; i++) {
//   mhsnew.push(limhs[i].textContent);
// }

const mhsnew = [...limhs].map((m) => m.textContent);

console.log(mhsnew);

const nama = document.querySelector(".namas");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");

nama.innerHTML = huruf;
