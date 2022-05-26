function floor(diameter){
    var radius = diameter/2
    var floorArea = Math.PI * (radius * radius)
    return floorArea  // 50.26548245743669 // 78.53981633974483
}

function walls(diameter, height){
    var radius = diameter/2
    var circumferance = 2 * Math.PI * radius
    var wallArea = circumferance * height
    return wallArea // 31.41592653589793 // 251.32741228718345
}

function materialsNeeded(){
    var d = document.getElementById("across").value
    var h = document.getElementById("height").value
    var carpetNeeded = Math.floor(floor(d))
    var paintNeeded = Math.floor(walls(d, h))
    console.log('carpet needed is '+carpetNeeded+' sqft','paint needed is '+ paintNeeded+' sqft') // 50.26548245743669 251.32741228718345
}


