function foo(a,b){    return a+b;}

console.log(foo(10,20)); //30
console.log(foo(10,"20")); //1020
console.log(foo(null,20)); //20
console.log(foo(undefined,20)); //NaN
console.log(foo(10,undefined)); //NaN