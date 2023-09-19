const s = "aba"
const n = 13

function repeatedString(s, n) {
    // Write your code here

    let copy = s.split("")    


    if(copy.length<1 || copy.length>100 || n<1 || n>1000000000000 || isNaN(n) === true || isNaN(copy) === false) {
        return "ERROR"
    }

    const lettersOfCopy = copy.length;
    let timesRepeated = Math.floor(n/lettersOfCopy)
    console.log(timesRepeated)
    let missingLetters = n-timesRepeated*lettersOfCopy;
    let newCopy = copy.slice(0,missingLetters);

    let arr = copy.filter( ele => ele === "a" );
    let arrNew = newCopy.filter(ele => ele === "a");

    const numberOfAs = (arr.length*timesRepeated) + arrNew.length ;  
    console.log(numberOfAs)
    return numberOfAs
}

repeatedString(s,n)