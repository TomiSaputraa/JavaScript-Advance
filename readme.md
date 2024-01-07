**_Note_** : untuk contoh kode bisa dari teks dibawah / dari file di repository ini.

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

  Metode map digunakan untuk membuat array baru dengan hasil dari pemanggilan fungsi tertentu pada setiap elemen array. Metode ini tidak mengubah array aslinya, tetapi mengembalikan array baru yang berisi hasil transformasi.

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

# 13. Rest Parameter

Rest parameter adalah fitur dalam JavaScript yang memungkinkan Anda mengumpulkan sisa parameter pada sebuah fungsi menjadi array. Rest parameter ditandai dengan menggunakan tanda titik tiga (...) diikuti dengan nama parameter. Rest parameter hanya boleh ditempatkan sebagai parameter terakhir dalam daftar parameter fungsi.

  <details>
  <summary>contoh kode</summary>

```javaScript
function sum(...numbers) {
// 'numbers' adalah rest parameter yang mengumpulkan sisa argument ke dalam array
return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));
// Output: 15

// Contoh lain
function concatenate(separator, ...strings) {
// 'separator' adalah parameter biasa, sedangkan 'strings' adalah rest parameter
return strings.join(separator);
}

console.log(concatenate('-', 'apple', 'banana', 'orange'));
// Output: 'apple-banana-orange'
```

  </details>

# 14. Asynchronus

Asynchronous JavaScript adalah paradigma pemrograman di mana operasi dapat dijalankan secara independen dari urutan eksekusi. Ini memungkinkan eksekusi kode untuk melanjutkan ke operasi berikutnya tanpa harus menunggu operasi sebelumnya selesai. Beberapa contoh operasi asinkron di JavaScript melibatkan I/O (Input/Output), seperti membaca atau menulis file, pengambilan data dari server, atau menanggapi interaksi pengguna.

- Konsep :

  - Thread : menjalankan task sesuai jumlah thread. ex : 1 thread menjanlankan 1 task secara bergantian, sedangkan multi thread akan menjanlankan task secara bersamaan.
  - Blocking(Blokir) : akan menjalankan task2 selanjutnya jika task1 sebelumnya sudah berhasil jalan
  - Non-blocking(Non Blokir) : walaupun task1 belum beres task1...dst akan di eksekusi

- Istilah :

  - Asynchronus + Single-threaded = Concureency
  - Asynchronus + Multi-threaded = Parralelism

- Kesimpulan :
  - single dan multi thread = lingkungan eksekusi 'task'
  - blocking dan non blocking = teknik ngoding (IO related)
  - synchronus dan asynchronus = teknik ngoding (HTTP request related)

untuk melihat bagaimana javascript bekerja secara asynchronus di engine cek disini : http://latentflip.com/

15. Callback

Callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain, dan akan dijalankan setelah operasi yang dilakukan oleh fungsi tersebut selesai. Fungsi yang menerima callback akan memanggil callback ketika operasinya selesai, mengizinkan eksekusi asynchronous.

- Contoh Callback:
  <details>
  <summary>contoh kode</summary>

  ```javaScript
  function fetchData(callback) {
  // Simulasi operasi asynchronous (contoh: mengambil data dari server setelah 2 detik)
  setTimeout(() => {
    const data = 'Data berhasil diambil!';
    callback(data);
    }, 2000);
  }

  function processResult(result) {
    console.log(result);
  }

  // Memanggil fetchData dengan callback
  fetchData(processResult);
  // Output (setelah 2 detik): Data berhasil diambil!

  ```

  </details>

- Callback Hell (Pyramid of Doom):

  Callback Hell terjadi ketika callback bersarang dalam callback dalam sebuah struktur piramida yang sulit dibaca. Ini sering terjadi saat bekerja dengan banyak operasi asynchronous yang saling bergantung.

# 15. Promise

Promise adalah objek di JavaScript yang digunakan untuk merepresentasikan hasil atau kegagalan operasi asynchronous. Ini membantu mengatasi masalah "callback hell" atau piramida callback yang dapat terjadi saat menangani banyak operasi asynchronous yang bersarang.

## Membuat Promise:

Promise memiliki dua keadaan: fulfilled (berhasil) atau rejected (gagal). Anda dapat membuat Promise dengan menggunakan constructor Promise yang memiliki dua argumen: fungsi resolver dan fungsi rejector.

  <details>
  <summary>contoh kode</summary>

```javaScript
const fetchData = new Promise((resolve, reject) => {
// Simulasi operasi asynchronous (contoh: mengambil data dari server setelah 2 detik)
setTimeout(() => {
  const success = true;

  if (success) {
    const data = 'Data berhasil diambil!';
    resolve(data);  // Memanggil resolve jika operasi berhasil
  } else {
    reject(new Error('Gagal mengambil data'));  // Memanggil reject jika operasi gagal
  }
  }, 2000);
});

```

  </details>

## Menggunakan Promise:

- .then() untuk Penanganan Hasil (resolve):
  <details>
  <summary>contoh kode</summary>

  ```javaScript
  fetchData.then((result) => {
  console.log(result);
  });
  // Output (setelah 2 detik): Data berhasil diambil!
  ```

  </details>

- .catch() untuk Penanganan Kesalahan (reject):
  <details>
  <summary>contoh kode</summary>

  ```javaScript
  fetchData
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
  // Output (jika gagal): Gagal mengambil data
  ```

  </details>

- .finally() untuk Kode yang Selalu Dieksekusi:
  <details>
  <summary>contoh kode</summary>

  ```javaScript
  fetchData
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log('Operasi selesai.');
  });
  // Output (setelah 2 detik): Data berhasil diambil! (dan kemudian) Operasi selesai.
  ```

  </details>

## Chaining Promises:

Anda dapat menggabungkan beberapa Promise menggunakan chaining (mengantre) untuk mengatasi "callback hell".

<details>
  <summary>contoh kode</summary>

```javaScript
const fetchData = () => {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      const data = 'Data berhasil diambil!';
      resolve(data);
    } else {
      reject(new Error('Gagal mengambil data'));
    }
  }, 2000);
});
};

const processData = (data) => {
return new Promise((resolve) => {
  setTimeout(() => {
    const processedData = `Data yang diproses: ${data}`;
    resolve(processedData);
  }, 2000);
});
};

fetchData()
.then((result) => processData(result))
.then((finalResult) => console.log(finalResult))
.catch((error) => console.error(error.message));
// Output (setelah 4 detik): Data yang diproses: Data berhasil diambil!

```

  </details>

# 16. Fetch

Dalam konteks JavaScript, fungsi fetch digunakan untuk melakukan permintaan HTTP (seperti mengambil data dari server) secara asynchronous. Fungsi ini mengembalikan objek Promise yang mewakili respons dari permintaan HTTP tersebut. Berikut adalah penjelasan singkat dan contoh penggunaan fetch:

Penjelasan:

- a. Asynchronous (Asynchronous Operation): fetch bekerja secara asynchronous, sehingga tidak akan memblokir eksekusi kode selanjutnya. Ini memungkinkan agar halaman web tetap responsif tanpa harus menunggu permintaan HTTP selesai.

- b. Promise-Based: Fungsi fetch mengembalikan objek Promise, yang memungkinkan Anda menangani respons asinkron dengan menggunakan .then() dan .catch().

fetch(resources, init) :

- resources :

  - url : alamat dari sumber yang kita akan ambil
  - Request Object : representasi permintaan sumber

- init(optional) :

  konfigurasi tambahan pada sebuah request berbentuk object

  - method
  - header
  - body
  - mode
  - cache
  - referrer
  - referrerPolicy
  - integrity
  - keepalive
  - signal

- response :

  hasil dari fetch, berupa promise.

  yang memiliki property :

  - headers
  - ok
  - redirected
  - status
  - statusText
  - type
  - url
  - body

  method :

  - clone()
  - error()
  - redirected()
  - blob()
  - formData()
  - json()
  - text()

<details>
<summary>contoh kode</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fetch Example</title>
  </head>
  <body>
    <h1>Fetch Example</h1>
    <div id="result"></div>

    <script>
      // URL dari JSONPlaceholder API
      const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

      // Fungsi untuk menampilkan hasil ke dalam elemen dengan id "result"
      function displayResult(data) {
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `
        <p>User ID: ${data.userId}</p>
        <p>Title: ${data.title}</p>
        <p>Completed: ${data.completed ? "Yes" : "No"}</p>
      `;
      }

      // Menggunakan fetch untuk mengambil data dari API
      fetch(apiUrl)
        .then((response) => {
          // Periksa apakah respons berhasil (status code 200 OK)
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          // Ubah respons menjadi objek JSON
          return response.json();
        })
        .then((data) => {
          // Tampilkan hasil menggunakan fungsi displayResult
          displayResult(data);
        })
        .catch((error) => {
          // Tangani kesalahan jika terjadi
          console.error("There was a problem with the fetch operation:", error);
        });
    </script>
  </body>
</html>
```

</details>

# 17. Async Await

async/await adalah fitur dalam JavaScript yang memudahkan penanganan operasi asinkron dengan cara yang lebih bersih dan lebih mudah dibaca dibandingkan dengan penggunaan callback atau Promise langsung.

Berikut adalah penjelasan lebih rinci tentang async/await:

1.  Fungsi Async:
     <details>
     <summary>Contoh penggunaan</summary>

    ```javascript
    async function exampleAsyncFunction() {
      // ...
    }
    ```

     </details>

2.  Kata Kunci Await:
    <details>
    <summary>Contoh penggunaan</summary>

    ```javascript
    async function exampleAsyncFunction() {
      const result = await someAsyncOperation();
      console.log(result);
    }
    ```

    </details>

3.  Penanganan Error:
    <details>
    <summary>Contoh penggunaan</summary>

    ```javascript
    async function exampleAsyncFunction() {
      try {
        const result = await someAsyncOperation();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    ```

    </details>

4.  Berjalan Secara Berurutan:
    kata kunci await dan melanjutkan setelah Promise diselesaikan.
5.  Menggabungkan dengan Promise:
    async/await dapat bekerja bersama dengan Promise. Fungsi yang menggunakan async akan selalu mengembalikan Promise, dan nilai yang dikembalikan oleh await adalah nilai yang diselesaikan oleh Promise tersebut.
6.  Contoh Penggunaan Async/Await:
    <details>
    <summary>Contoh penggunaan</summary>

    ```javascript
    function cobaPromise() {
      return new Promise((resolve, reject) => {
        const waktu = 7000;
        if (waktu < 5000) {
          setTimeout(() => {
            resolve("selesai");
          }, waktu);
        } else {
          reject("kelamaan");
        }
      });
    }
    async function cobaAsync() {
      // try untuk resolve
      try {
        const coba = await cobaPromise();
        console.log(coba);
      } catch (error) {
        // catch untuk reject
        console.error(error);
      }
    }
    ```

    </details>

# 18. Error Handling

Error handling (penanganan kesalahan) dalam JavaScript dilakukan untuk mengatasi potensi kesalahan atau pengecualian (exception) yang dapat terjadi selama eksekusi program. Ada beberapa cara untuk menangani kesalahan di JavaScript:

1. Try-Catch Statement:
     <details>
     <summary>Contoh kode</summary>

   ```javascript
   try {
     // Potensial kode yang dapat menimbulkan kesalahan
     // ...
   } catch (error) {
     // Tangani kesalahan di sini
     console.error(error);
   }
   ```

     </details>

2. Throw Statement:
   Kata kunci throw digunakan untuk melemparkan (throw) pengecualian secara manual. Ini berguna jika Anda ingin menunjukkan bahwa suatu kondisi tidak dapat dipenuhi dan perlu mengecualikan program.

    <details>
     <summary>Contoh kode</summary>

   ```javascript
   function divide(a, b) {
     if (b === 0) {
       throw new Error("Cannot divide by zero");
     }
     return a / b;
   }
   ```

     </details>

3. Custom Error Objects:
   Anda dapat membuat objek kesalahan kustom (custom error objects) dengan mewarisi dari objek Error. Ini memungkinkan Anda memberikan informasi tambahan tentang kesalahan yang terjadi.

    <details>
    <summary>Contoh kode</summary>

   ```javascript
   class MyCustomError extends Error {
     constructor(message) {
       super(message);
       this.name = "MyCustomError";
     }
   }

   try {
     throw new MyCustomError("This is a custom error");
   } catch (error) {
     console.error(error.name); // Output: MyCustomError
     console.error(error.message); // Output: This is a custom error
   }
   ```

    </details>

4. Global Error Handling (window.onerror):
   Di lingkungan browser, Anda dapat menggunakan event window.onerror untuk menangani kesalahan global yang tidak tertangkap di blok try-catch. Ini memungkinkan Anda untuk memonitor dan melaporkan kesalahan global.

    <details>
    <summary>Contoh penggunaan</summary>

   ```javascript
   window.onerror = function (message, source, lineno, colno, error) {
     console.error("Global error:", message);
     return true; // Memberi tahu browser bahwa kesalahan telah ditangani
   };
   ```

    </details>

5. Promise Error Handling:
   <details>
    <summary>Contoh penggunaan</summary>

   ```javascript
   somePromiseFunction()
     .then((result) => {
       // Lakukan sesuatu dengan hasil
     })
     .catch((error) => {
       // Tangani kesalahan
       console.error(error);
     });
   ```

    </details>

6. Async/Await Error Handling:
    <details>
     <summary>Contoh penggunaan</summary>

   ```javascript
   async function exampleAsyncFunction() {
     try {
       const result = await someAsyncOperation();
       console.log(result);
     } catch (error) {
       // Tangani kesalahan
       console.error(error);
     }
   }
   ```

    </details>
