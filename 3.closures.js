// Closures

function outerFunction() {
  var outerVar = 10;

  function innerFunction() {
    console.log(outerVar); // innerFunction memiliki akses ke outerVar
  }

  return innerFunction;
}

var closureFunc = outerFunction(); // closureFunc adalah closure

closureFunc(); // Ini akan mencetak 10

// contoh lain

// bungkus dengan imidietly invoke function agar function langsung di eksekusi
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
