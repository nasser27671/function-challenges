const prompt = require('prompt-sync')();
let arrays = [];
for (let i = 0; i <= 9; i++) {
  let request = prompt("type in your number: ");
  arrays.push(request);
}
console.log(arrays);

