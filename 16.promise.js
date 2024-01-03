// $.ajax({
//   type: "get",
//   url: "http://www.omdbapi.com/?apikey=1b412ccf&s=avenger",
//   success: function (response) {
//     console.log(response.Search);
//   },
// });

// const movies = fetch("http://www.omdbapi.com/?apikey=1b412ccf&s=avenger").then(
//   (response) => response.json().then((response) => console.log(response))
// );

// console.log(movies);

// Promise

// Promise adalah objek di JavaScript yang digunakan untuk merepresentasikan hasil atau kegagalan operasi asynchronous. Ini membantu mengatasi masalah "callback hell" atau piramida callback yang dapat terjadi saat menangani banyak operasi asynchronous yang bersarang.

// janji (terpenuhi/ingkar)
// states (fullfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// Contoh :
// let ditepati = false;

// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji ditepati");
//   } else {
//     reject("ingkar janji...!");
//   }
// });

// janji1
//   .then((res) => {
//     console.log("Ok " + res);
//   })
//   .catch((res) => console.log("Not ok " + res));

// Contoh 2 :

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("ditepati beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("tidak ditepati beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .then((res) => {
//     console.log("Ok " + res);
//   })
//   .catch((res) => console.log("Not ok " + res))
//   .finally(() => console.log("selesai menunggu"));
// console.log("selesai");

// Contoh dengan all
// Promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "the avenger",
        sutradara: "elon musk",
        pemeran: "tomi",
      },
    ]);
  }, 4000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "jambi",
        suhu: 26,
      },
    ]);
  }, 500);
});

// film.then((res) => console.log(res));

// cuaca.then((res) => console.log(res));

Promise.all([film, cuaca]).then((res) => {
  const [film, cuaca] = res;
  console.log(film);
  console.log(cuaca);
});
