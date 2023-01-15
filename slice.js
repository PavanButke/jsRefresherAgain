function check(params){
    for(let i=0; i<params.length ; i++)
    {
        console.log(parseInt(params[i])+2);
    }
}


input = process.argv.slice(2);

console.log(input)
console.log(check(input))