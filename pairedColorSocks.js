// There is a large pile of socks that must be paired by color. Given an aray of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n = 7
// ar = [1,2, 1,2,1,3,2]
// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints

//  where 
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3
// Explanation

// sock.png

function sockMerchant  (n,ar) {
    let sol = 0;

    if ( isNaN(n)===true || ar.some (ele => typeof(ele) == "string") === true || ar.length===0  || ar.length> 100 || n<1 || n> 100 || ar.some( ele => ele<0) ===true || ar.some( ele => ele>100) === true || n!=ar.length){
        console.log("Out of bonds")
        return 0
    }
    
    const uniques = Array.from(new Set(ar))
    for (let unique of uniques){
        let socks = ar.filter ( ele => ele  === unique)
        if (socks.length%2 === 0) {
            sol = sol+socks.length/2;
        }
        else {
            sol = sol + (socks.length-1)/2
        }
    }
    console.log(sol)
    let stdout = sol
    return stdout
}

const n = 9
const ar = [10, 10, 10, 10, 10, 10, 10, 10, 10]
sockMerchant(n,ar)