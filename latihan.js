// arrow fun

// let arrow = () => {
//   console.log(`Ini adalah arrow function`);
// };
// arrow();

// (function () {
//   console.log(`halo ini function express`);
// })();
// ==> High order function
function mataKuliah(mataKuliah, selesai) {
  console.log(`Mata kuliah hari ini adalah ${mataKuliah}`);
  selesai();
}

let selesai = function () {
  console.log(`mata kuliah selesai`);
};

mataKuliah("bahasa inggris", selesai);

// ==> Filter map reduce
const angka = [-1, 2, 3, 4, -2, 0, 9, 6, 10];

// filter
const filter = angka.filter((a) => a >= 3);
console.log(`hasil filter : ` + filter);

// map
const map = angka.map((a) => a * 2);
console.log(map);

// template literal
// tag template
// destructuring variable
// destrcuturing function
// for..of dan for in
