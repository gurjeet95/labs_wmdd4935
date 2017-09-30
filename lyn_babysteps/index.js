const values = process.argv;
let sum=0;
for(let i=2;i<values.length;i++){
    sum+=Number(values[i]);
}
console.log(sum);
