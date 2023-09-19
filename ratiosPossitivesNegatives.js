const arr = [-1,0,1,0,0,0,1,1]
//const arr = "hola"

function plusMinus(arr) {
    // Write your code here
    let positives = 0
    let negatives = 0;
    let zeros = 0
    

    if (arr.length<= 1 || typeof(arr)==="string" || arr.some(ele => isNaN(ele)===true) === true){
        return "ERROR"
    }

    
    arr.forEach( el => {
        if (el>0){
            positives = positives+ 1
        }
        else if (el<0){
            negatives = negatives +1
        }
        else if (el === 0){
            zeros = zeros+ 1
        }
    })

    const total = positives+negatives+zeros;
    
    console.log((positives/total).toFixed(6))
    console.log((negatives/total).toFixed(6))
    console.log((zeros/total).toFixed(6))
}

plusMinus(arr)