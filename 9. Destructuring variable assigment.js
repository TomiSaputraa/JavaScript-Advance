// Destructuring variable / assigment :
// Destructuring variables adalah fitur dalam JavaScript yang memungkinkan Anda untuk "mendekomposisi" nilai dari array atau objek
// ke dalam variabel yang terpisah. Ini memudahkan penarikan nilai dari struktur data kompleks dengan sintaks yang lebih ringkas.
// Destructuring dapat diterapkan pada array atau objek, dan berfungsi sebagai cara cepat untuk mengambil nilai dari properti atau elemen array.

// 1. Destructuring pada Array:
// Contoh tanpa destructuring
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Contoh dengan destructuring
// const [x, y, z] = arr;
// Sekarang, x = 1, y = 2, dan z = 3

// Contoh dengan rest parameter
const [x, ...z] = arr;
console.log(x);
console.log(z);

// 2. Destructuring pada Objek:

// Contoh tanpa destructuring
const obj = { id: 123, name: "John", age: 30 };
// const name = obj.name;
// const age = obj.age;

// Contoh dengan destructuring
// nama variable harus sesuai dengan key objek
// const { name, age } = obj;
// Sekarang, name = 'John' dan age = 30

// Memberikan default value
// const { name, age, email = "email@default.com" } = obj;
// console.log(email);

// Dengan rest parameter
// const { name, ...value } = obj;
// console.log(value);

// Mengambil field pada object
function getMhsId({ id }) {
  return id;
}

console.log(getMhsId(obj));

// 3. Alias pada Destructuring:
const person = { firstName: "John", lastName: "Doe" };
const { firstName: fName, lastName: lName } = person;
// Sekarang, fName = 'John' dan lName = 'Doe'

// console.log(fName);
