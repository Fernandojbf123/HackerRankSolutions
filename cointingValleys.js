function countingValleys(steps, path) {
    // Write your code here
    let stdout = 0
    let valleys = 0
    let inValley = false
    let currentLvl = 0;

    const newPath = path.split("")
    const uniques = Array.from (new Set (newPath))

    if (steps<2 === true || steps>1000000 || path.length != steps || isNaN(steps) === true || uniques.length>=3) {   
        console.log("ERROR")
        return stdout=0
    }

   for (let i = 0; i<=newPath.length+1; i++){
        console.log(`currentLvl = ${currentLvl}`)
        if (newPath[i] === "D"){
            currentLvl = currentLvl-1
        }
        else if (newPath[i] === "U"){
            currentLvl = currentLvl+1
        }

        if (currentLvl<0 && inValley===false){
            inValley=true
        }
        if (currentLvl>=0 && inValley===true){
            inValley=false
            valleys = valleys+1;
        }
    }
    console.log(valleys)
   return stdout = valleys
}

const  n=8
const str = "UDDDUDUU"
countingValleys(n, str)