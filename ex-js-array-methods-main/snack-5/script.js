const nums = [2, 8, 4, 7, 12, 87];

let pari = nums.filter((num)=>{
    if(num % 2 === 0){
        return true
    } return false
})
console.log(pari);


// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]