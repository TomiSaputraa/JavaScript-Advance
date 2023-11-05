// Higher order function

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
