# 1. Object

- Object.create
  sama saja dengan membuat object('{}') bedanya kita bisa menyimpan parameter di dalamnya,parameter mengacu pada parent objectnya
    <details>
    <summary>contoh kode</summary>

  ```javaScript
  // Objek yang akan dijadikan prototip
  const animal = {
    makeSound: function() {
      console.log("Some generic sound");
    }
  };

  // Membuat objek baru dengan menggunakan animal sebagai prototip
  const cat = Object.create(animal);

  // Menambahkan properti khusus untuk objek cat
  cat.name = "Whiskers";

  // Memanggil metode dari objek prototip
  cat.makeSound(); // Output: Some generic sound

  // Menambahkan metode khusus untuk objek cat
  cat.meow = function() {
    console.log("Meow!");
  };

  // Memanggil metode khusus objek cat
  cat.meow(); // Output: Meow!

  ```

    </details>

- Prototype : dengan prototype kita tidak perlu membuat object baru lagi
  <details>
  <summary>contoh kode</summary>

  ```javaScript
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
  ```

  </details>

# 2. Execution context

- fase pada Excecution context :
  - Creation : Pada fase pembuatan, JavaScript melakukan beberapa tugas untuk menyiapkan execution context sebelum kode sebenarnya dieksekusi.
  - Execution : Setelah fase pembuatan selesai, kode JavaScript masuk ke fase eksekusi. Pada fase ini, instruksi kode dieksekusi baris per baris.
- Hoisting : Hoisting adalah perilaku dalam JavaScript di mana deklarasi variabel dan fungsi ditinggikan (hoisted) ke atas lingkup fungsional atau skrip secara implisit(tidak terlihat) saat kode dijalankan.

Ketika menggunakan let dan const (diperkenalkan dalam ECMAScript 2015), variabel tidak akan ditinggikan dan akan tetap berada dalam"tempat" deklarasinya.

# 3. Closures

Closures (penutupan) adalah konsep penting dalam JavaScript, meskipun fungsi tersebut sudah selesai dijalankan. Ini memungkinkan fungsi tersebut untuk "mengingat" lingkungan di mana ia dibuat. bahkan setelah fungsi tersebut selesai dieksekusi. Closures memungkinkan Anda untuk membuat lingkup terbatas yang memungkinkan data tetap ada dan dapat digunakan oleh fungsi yang lain.

  <details>
  <summary>contoh kode</summary>

```javaScript
function outerFunction() {
var outerVariable = "I am from outer function";

function innerFunction() {
  console.log(outerVariable);
}

return innerFunction;
}

// Membuat closure
var closure = outerFunction();

// Memanggil fungsi yang ada dalam closure
closure(); // Output: I am from outer function

```

  </details>

### var, let & const

- var : function scope
- let & const : block scope, di JavaScript terbaru disarankan menggunakan let & const

# 4. Arrow Function

Beberapa karakteristik dari arrow function:

1. Tidak memiliki binding this.
2. Lebih singkat dan ringkas.
3. Tidak memiliki arguments.

<details>
  <summary>contoh kode</summary>

```javascript
// Contoh 1: Arrow function dengan satu parameter
const square = (x) => x * x;

// Contoh 2: Arrow function tanpa parameter
const getRandomNumber = () => Math.random();

// Contoh 3: Arrow function sebagai callback function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);

// Contoh 4: Arrow function dengan penggunaan this
function Counter() {
  this.count = 0;

  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}

const counter = new Counter();
```

</details>

# 5. Higher order function

Higher-order functions adalah konsep dalam pemrograman JavaScript (dan pemrograman fungsional umumnya)
di mana fungsi dapat diteruskan sebagai argumen ke fungsi lain atau dikembalikan oleh fungsi. Ini berarti fungsi dapat dianggap sebagai nilai yang dapat dioperasikan seperti tipe data lainnya.

  <details>
  <summary>contoh kode</summary>

```javaScript
function higherOrderFnc(mataKuliah, selesai) {
// higherOrderFnc adalah Higher Order Function
// param selesai adalah callback
console.log(`mulai mengerjakan tugas ${mataKuliah}`);
selesai();
}

function selesai() {
  console.log(`selesai mengerjakan tugas`);
}

higherOrderFnc("komputer", selesai);
```

  </details>

# 6. Filter, Map & reduce

filter, map, dan reduce adalah metode yang ditemukan pada objek array di JavaScript. Mereka memberikan cara yang deklaratif untuk memanipulasi elemen-elemen array dan sering digunakan dalam pemrograman fungsional.

- 1.filter

  Metode filter digunakan untuk membuat array baru dengan elemen-elemen yang memenuhi kriteria tertentu.

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  // Contoh 1: Mencari nilai yang lebih besar dari 3
  const numbers = [1, 2, 3, 4, 5];
  const filteredNumbers = numbers.filter(function(num) {
    return num > 3;
  });
  console.log(filteredNumbers);
  // Output: [4, 5]

  // Contoh 2: Mencari kata-kata yang memiliki panjang lebih dari 3 karakter
  const words = ['apple', 'banana', 'orange', 'grape'];
  const filteredWords = words.filter(function(word) {
    return word.length > 3;
  });
  console.log(filteredWords);
  // Output: ['apple', 'banana', 'orange', 'grape']

  // Contoh 3: Mencari orang-orang yang berumur lebih dari 25 tahun
  const persons = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const filteredPersons = persons.filter(function(person) {
    return person.age > 25;
  });
  console.log(filteredPersons);
  // Output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

  ```

  </details>

- 2.Map

  Metode map digunakan untuk membuat array baru dengan hasil dari pemanggilan fungsi tertentu pada setiap elemen array.

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  // Contoh 1: Menggandakan setiap elemen dalam array
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map(function(num) {
    return num * 2;
  });
  console.log(doubledNumbers);
  // Output: [2, 4, 6, 8, 10]

  // Contoh 2: Mengonversi setiap elemen menjadi string
  const names = ['John', 'Jane', 'Doe'];
  const nameLengths = names.map(function(name) {
    return name.length;
  });
  console.log(nameLengths);
  // Output: [4, 4, 3]

  // Contoh 3: Mengambil properti tertentu dari objek dalam array
  const persons = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const personNames = persons.map(function(person) {
    return person.name;
  });
  console.log(personNames);
  // Output: ['Alice', 'Bob', 'Charlie']

  ```

  </details>

- 3.reduce

  Metode reduce digunakan untuk mereduksi elemen-elemen array menjadi nilai tunggal. Ini sering digunakan untuk operasi seperti menjumlahkan semua elemen atau menghitung statistik.

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  // Contoh 1: Menjumlahkan semua elemen dalam array
  // [1 + 1 = 2, 2 + 2 =4,dst]
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  console.log(sum);
  // Output: 15

  // Contoh 2: Menggabungkan semua kata dalam array menjadi satu string
  const words = ['Hello', ' ', 'World', '!'];
  const concatenatedString = words.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, '');
  console.log(concatenatedString);
  // Output: Hello World!

  // Contoh 3: Menghitung jumlah umur dari array objek orang
  const persons = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const totalAge = persons.reduce(function(accumulator, person) {
    return accumulator + person.age;
  }, 0);
  console.log(totalAge);
  // Output: 90

  ```

  </details>

# 7. Template Literals

- 1.Multiline String:

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  const multiline = `Baris pertama
  Baris kedua
  Baris ketiga`;
  ```

  </details>

- 2.Interpolasi Variabel:

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  const name = "Alice";
  const greeting = `Halo, ${name}!`;
  ```

  </details>

- 3.embedded expression

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  const a = 5;
  const b = 10;
  const hasil = `Hasil penjumlahan ${a} dan ${b} adalah ${a + b}`;
  ```

  </details>

# 8. Tag Template

Template literals membuat penggunaan string lebih mudah dan membantu mengurangi kebutuhan untuk menggunakan operator konkatenasi (+) atau karakter escape untuk string multiline. Ini menjadi lebih bersih dan mudah dibaca.

  <details>
  <summary>contoh kode</summary>

```javaScript
function tag(strings, ...values) {
// strings adalah array string yang dipecah
// values adalah array nilai yang diinterpolasi
// lakukan apapun dengan strings dan values
}

const result = tag`Nilai a: ${a}, Nilai b: ${b}`;
```

  </details>

# 9. Destructuring variable

Destructuring assignment adalah fitur yang memungkinkan Anda mendeklarasikan dan menginisialisasi variabel dari nilai-nilai di dalam objek atau array dengan cara yang lebih ringkas. Dengan cara ini, Anda dapat mengekstrak nilai-nilai dari struktur data tersebut dan menyimpannya ke dalam variabel-variabel terpisah.

- 1.Destructuring Objek:

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  // Destructuring objek
  const person = { name: "John", age: 30, city: "New York" };

  const { name, age, city } = person;

  console.log(name); // Output: John
  console.log(age);  // Output: 30
  console.log(city); // Output: New York
  ```

  </details>

- 2.Destructuring Array:

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  // Destructuring array
  const numbers = [1, 2, 3, 4, 5];

  const [first, second, ...rest] = numbers;

  console.log(first); // Output: 1
  console.log(second); // Output: 2
  console.log(rest); // Output: [3, 4, 5]
  ```

  </details>

- 3.Default Values:

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  // Destructuring dengan default values
  const person = { name: "Bob", city: "London" };

  const { name, age = 30, city } = person;

  console.log(name); // Output: Bob
  console.log(age);  // Output: 30 (nilai default)
  console.log(city); // Output: London
  ```

  </details>

- 4.Destructuring Assignment untuk Menukar Nilai:

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  let a = 5;
  let b = 10;

  // Menukar nilai menggunakan destructuring assignment
  [a, b] = [b, a];

  console.log(a); // Output: 10
  console.log(b); // Output: 5
  ```

  </details>

# 10. Destructuring function

Destructuring juga dapat digunakan dalam parameter fungsi untuk membongkar nilai dari objek atau array saat fungsi dipanggil. Ini memungkinkan Anda menulis kode yang lebih bersih dan ekspresif.

- 1.Destructuring Objek dalam Parameter Fungsi:

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  // Destructuring objek dalam parameter fungsi
  function printPerson({ name, age, city }) {
    console.log(`Nama: ${name}, Umur: ${age}, Kota: ${city}`);
  }

  const person = { name: "John", age: 30, city: "New York" };

  printPerson(person);
  // Output: Nama: John, Umur: 30, Kota: New York

  ```

  </details>

- 2.Destructuring Array dalam Parameter Fungsi:

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  // Destructuring array dalam parameter fungsi
  function printNumbers([first, second, ...rest]) {
    console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);
  }

  const numbers = [1, 2, 3, 4, 5];

  printNumbers(numbers);
  // Output: First: 1, Second: 2, Rest: 3,4,5

  ```

  </details>

- 3.Destructuring dengan Default Values dalam Parameter Fungsi:

  <details>
    <summary>contoh kode</summary>

  ```javaScript
  // Destructuring dengan default values dalam parameter fungsi
  function printPerson({ name, age = 25, city }) {
    console.log(`Nama: ${name}, Umur: ${age}, Kota: ${city}`);
  }

  const person = { name: "Alice", city: "London" };

  printPerson(person);
  // Output: Nama: Alice, Umur: 25, Kota: London

  ```

  </details>

- 4.Destructuring Array dengan Default Values dalam Parameter Fungsi:

  <details>
  <summary>contoh kode</summary>

  ```javaScript
  // Destructuring array dengan default values dalam parameter fungsi
  function printNumbers([first, second = 0, ...rest]) {
    console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);
  }

  const numbers = [1];

  printNumbers(numbers);
  // Output: First: 1, Second: 0, Rest:

  ```

  </details>

# 11. for of dan for in

## - 'for...of':

for...of digunakan untuk mengulangi elemen dari iterable objects seperti array, string, Map, Set, dan objek yang implementasi protokol iterable. Ini memberikan nilai-nilai aktual dari elemen-elemen tersebut.

  <details>
  <summary>contoh kode</summary>

```javaScript
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
// Output:
// 1
// 2
// 3
// 4
// 5

```

  </details>

## - for...in :

for...in digunakan untuk mengulangi properti-properti enumerable dari sebuah objek. Ini memberikan kunci (indeks atau nama properti) daripada nilai aktual dari properti tersebut.

  <details>
  <summary>contoh kode</summary>

```javaScript
const person = { name: "John", age: 30, city: "New York" };

for (const key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: New York

```

  </details>

# 12. Spread Operator

Spread operator (...) dalam JavaScript digunakan untuk memecah (spread) elemen-elemen dalam array atau properti-properti dalam objek. Ini memberikan kemudahan dalam menyalin, menggabungkan, atau mengganti elemen-elemen atau properti-properti tersebut.

- ### Spread Operator pada Array:

  - Menggabungkan Dua Array:
    <details>
    <summary>contoh kode</summary>

    ```javaScript
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    const combinedArray = [...array1, ...array2];
    console.log(combinedArray);
    // Output: [1, 2, 3, 4, 5, 6]
    ```

    </details>

  - Menyalin Array:
    <details>
    <summary>contoh kode</summary>

    ```javaScript
    const originalArray = [7, 8, 9];
    const copiedArray = [...originalArray];
    console.log(copiedArray);
    // Output: [7, 8, 9]
    ```

    </details>

  - Menggunakan dalam Argument Fungsi:
    <details>
    <summary>contoh kode</summary>

    ```javaScript
    const numbers = [1, 2, 3];

    function sum(a, b, c) {
      return a + b + c;
    }

    const result = sum(...numbers);
    console.log(result);
    // Output: 6
    ```

    </details>

- ### Spread Operator pada Objek :
  penggunaan spread operator pada object sama saja dengan array di atas.
