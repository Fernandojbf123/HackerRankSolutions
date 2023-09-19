// const A = [1,2,3,4,5,6,7];
// const K = 6;


// rotar a la derecha
function solution (A,K) {
    

    if( typeof(A) != "object" || A.length == 0 || typeof(K) != "number" || A.includes('') ){
        return "The inputs should be an array (A) and an integer (K)"
    }

    let B = [...A];
    let lastItem = ''
    let tmpArr = [];

    for (let i = 0; i < K; i++){
        lastItem = B[B.length-1];
        tmpArr = B.slice(0,B.length-1);
        tmpArr.unshift(lastItem)
        B = [...tmpArr]
        
    }

    return B
}

//console.log(solution(A,K))

const sol2 = function (A,K) {

    let frontPart = A.slice(A.length-K,A.length);
    let backPart =  A.slice(0,A.length-K);
    let solu = frontPart.concat(backPart);
    return solu
}

//console.log(sol2(A,K))

// rotar a la izquierda
const sol3 = function (a,d) {

    const n = a.length;
    d = d % n; // Ensure d is within the length of the array
    console.log(d)
    console.log(a.slice(d))
    return a.slice(d).concat(a.slice(0, d));

}


const a = [1,2,3,4,5,6,7];
const d = 46;
sol3(a,d)
