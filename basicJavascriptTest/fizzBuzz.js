fizzBuzz(20)
function fizzBuzz(n) {
    // Write your code here
    
    let sol = []

    if (n<0 || n>200000 || isNaN(n)===true){
        return "NONE"
    }
    
    
    for (let i=1; i<=n;i++){
        if(i%5 === 0 && i%3===0){
            sol.push("FizzBuzz")
        }
        else if (i%5===0){
            sol.push("Buzz")
        }
        else if (i%3===0){
            sol.push("Fizz")
        }        
        else {
            sol.push(i)
        }
            
    }
    console.log(sol)

    return sol
}

