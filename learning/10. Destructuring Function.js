// Destructuring Function

// 1. Destructuring pada Objek dalam Fungsi:
// Tanpa destructuring
function printPerson(person) {
  console.log(person.name);
  console.log(person.age);
}

// Dengan destructuring
function printPerson({ name, age }) {
  console.log(name);
  console.log(age);
}

const person = { name: "John", age: 30 };
printPerson(person);

// 2. Destructuring pada Array dalam Fungsi:

function kalkulasi(a, b) {
  return [a + b, a * b];
}

// Tanpa Destructuring
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// Dengan Destructuring
const [jumlah, kali] = kalkulasi(2, 3);

console.log(jumlah); // 5

// Atau

// Tanpa destructuring
function printNumbers(numbers) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

// Dengan destructuring
function printNumbers([a, b]) {
  console.log(a);
  console.log(b);
}

const numbers = [1, 2];
printNumbers(numbers);

// 4. Contoh dengan object & function
const mhs = {
  nama: "Tomi",
  umur: 23,
  nilai: {
    uas: 100,
    uts: 80,
  },
};

function cetakMhs({ nama, umur, nilai: { uas, uts } }) {
  return `halo nama saya ${nama}, umur saya ${umur} tahun. nilai saya ${uts}`;
}

console.log(cetakMhs(mhs));
