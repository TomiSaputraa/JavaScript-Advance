// Promise

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        nama: "tomi",
        umur: 20,
      },
    ]);
  }, 2000);
});

const desa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        nimi: "anto",
        imir: 20,
      },
    ]);
  }, 500);
});

desa.then((res) => console.log(res));
fetchData.then((res) => console.log(res));
