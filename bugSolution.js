function foo(a,b){
  // Input validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Arguments must be numbers";
  }
  return a + b;}

console.log(foo(10,20)); //30
console.log(foo(10,"20")); //Invalid input: Arguments must be numbers
console.log(foo(null,20)); //Invalid input: Arguments must be numbers
console.log(foo(undefined,20)); //Invalid input: Arguments must be numbers
console.log(foo(10,undefined)); //Invalid input: Arguments must be numbers