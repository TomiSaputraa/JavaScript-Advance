// 2.1 Execution context, hoisting, scope

console.log(nama);
var nama = "tomi";

// Creation phase terjadi di context global
// di fase ini secara default akan di ubah dengan value dibawah
// nama var = undefined
// nama function = fn()
// hoisting

// Excecution phase
console.log(sayHello());

var nama = "tomi";
var umur = 33;

function sayHello() {
  return `Halo, nama saya ${nama}, umur ${umur}`;
}

// function mmebuat local execution context / secara lokal di dalam functio itu sendiri
// yang juga terdapat :
// window
// arguments
// hoisting

// scope & contoh nomor urut pengecekan scope (username)
var nama = "tomi";
var username = "@tomis";
// 3. lalu di cek apakah di variabel global juga ada

// 2. lalu di cek apakah di parameter ada
function cetakUrl() {
  // 1 : di cek di local function apakah ada kalau tidak cek lagi keluar
  var igUrl = "ww.insta.com/";
  return igUrl + username;
}

console.log(cetakUrl("andi")); // andi disimpan kedalam argument karena tidak ada parameter penerima
