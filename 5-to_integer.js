const arg = process.argv[2];
const num = Number.parseInt(arg);
if (!Number.isNaN(num) && String(num) === arg) {
  console.log(`My number: ${num}`);
} else {
  console.log('Not a number');
}   
