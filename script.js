const namas = { nama: "andi", umur: 80, kelas: 89, ambi: "anto" };

function getNama({ nama, umur, ...args }) {
  return console.log(`hallo ${nama} umur ${umur}, ${args}`);
}

getNama(namas);
