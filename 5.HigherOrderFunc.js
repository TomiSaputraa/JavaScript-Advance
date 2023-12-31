// Higher order function

// High-order functions adalah konsep dalam pemrograman fungsional di mana sebuah fungsi dapat menerima fungsi lain sebagai parameter, mengembalikan fungsi, atau keduanya.

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
