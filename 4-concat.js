const arg1 = process.argv[2];
const arg2 = process.argv[3];   
const firstArg = arg1 !==undefined ? arg1 : 'undefined';
const secondArg = arg2 !==undefined ? arg2 : 'undefined';
console.log(`${firstArg} is ${secondArg}`); 
