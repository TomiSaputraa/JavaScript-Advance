// tag template

const nama = "Tomi saputra";
const umur = 39;

// tag2 yang ada dalam function akan di pecah oleh expression
// function coba(strings, nama, umur) {
//   return strings; // [ 'Halo ', ', saya umur ', ' tahun' ]
//   return nama; // Tomi saputra. dst
// }

// Atau dengan spread operator
function coba(strings, ...args) {
  //   let result = "";
  //   strings.forEach((str, i) => {
  //     result += `${str}${args[i] || ``}`;
  //   });
  //   return result;

  return strings.reduce(
    (result, str, i) => `${result}${str}${args[i] || ``}`,
    ``
  );
}

// [ 'Halo ', ', saya umur ', ' tahun' ]
const str = coba`Halo ${nama}, saya umur ${umur} tahun`;

console.log(str);

// Penggunaan lain :
//  - escaping HTML Tag
//  - Translation & internationalization
//  - styled component
