function jumpingOnClouds(c) {
    // Write your code here
    let stdout = 0
    const uniques = Array.from(new Set(c))
    if (uniques.length>2 || uniques.some( ele => isNaN(ele)===true) || uniques.some( ele => ele>1) || uniques.some( ele => ele<0) || c[0]!=0 || c[c.length-1]!=0 || c.length<2 === true) {
        console.log("ERROR")
        return stdout
    }

    let hasEnded = 0;
    let i = 0
    while (i<c.length-1){
       
        if (c[i+2]===0){
            console.log("Puedo pisar+2, avanzo 2")
            i=i+2;
            stdout=stdout+1;
        }
        else if(c[i+2]===1) {
            console.log("No pisar+2, avanzo 1")
            i=i+1;
            stdout=stdout+1;
        }
        else if(isNaN(c[i+2])===true){
            console.log("No puedo saltar +2, porque es fin del arreglo")
            if (isNaN(c[i+1])===false) {
                console.log("Pero si puedo saltar 1 más")
                    stdout=stdout+1
                }
            break
        }
    }
    console.log(stdout)

    return stdout
}

c = [0,0,1,0,0,1,0]
jumpingOnClouds(c)
