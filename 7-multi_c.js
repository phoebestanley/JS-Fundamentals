const numOccurrences = parseInt(process.argv[2]);
if (isNaN(numOccurrences))
{
    console.log("Missing number of occurrences");
}
else{
    let i = 0;
    while (i < numOccurrences) {
        console.log("C is fun");
        i++;
    }       
} 
