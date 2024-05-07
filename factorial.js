function factorial(n){
    return n*(n<2?1:factorial(n-1))
}

console.log(`Factorial output:`, factorial(7) )