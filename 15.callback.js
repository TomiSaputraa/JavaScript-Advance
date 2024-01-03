// Callback

// Contoh synchronus callback
// function hallo(nama) {
//   alert(`Hallo ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt(`Masukan nama : `);
//   callback(nama);
// }

// tampilkanPesan(hallo);

// const msh = [
//   {
//     nama: "tomi saputra",
//     nim: 80202820,
//     email: "tomi@gmail.com",
//     idDosenWali: 1,
//   },
//   {
//     nama: "arif saputra",
//     nim: 80202720,
//     email: "arif@gmail.com",
//     idDosenWali: 2,
//   },
//   {
//     nama: "andi saputra",
//     nim: 80202420,
//     email: "andi@gmail.com",
//     idDosenWali: 3,
//   },
// ];

// console.log("mulai");
// msh.forEach((m) => {
//   for (let i = 0; i < 20000; i++) {
//     let d = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// Contoh asyncrhonus callback
// function getDataMahasiswa(url, succes, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (xhr.status === 200) {
//         succes(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");

// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (result) => {
//     // menampilkan isi array dalam bentuk json
//     // console.log(JSON.parse(result));

//     const mhs = JSON.parse(result);
//     mhs.forEach((e) => {
//       console.log(e.nama);
//     });
//   },
//   () => {}
// );
// console.log("selesai");

// contoh async dengan jquery
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    // di ajax udah otomatis di parsing jadi object
    console.log(mhs, 200);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
