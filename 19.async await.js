// Async await
// Sebuah async fucntion dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise nya selesai.

// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });

// console.log(coba);
// coba.then(()=>{console.log(coba);})

// Contoh async await dengan promise
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

// contoh resolve(then) dan reject(catch) promise
// const coba = cobaPromise();
// coba.then((res) => console.log(res)).catch((err) => console.log(err));

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

cobaAsync();
