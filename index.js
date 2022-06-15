// Code your solution here
function findMatching(drivers,driver){
    return drivers.filter(userMatch=>userMatch.toLowerCase()===driver.toLowerCase())
    

}
function fuzzyMatch(drivers,driver){
    return drivers.filter(letterMatch=>letterMatch.toLowerCase().indexOf(driver.toLowerCase())===0)

}
function matchName(drivers,driver){
    return drivers.filter(nameMatch=>nameMatch.name===driver)

}

const students= ["mary","john","mary","sharon","victor"]
// console.log(findMatching(students,"mary"))
console.log(fuzzyMatch(students,"v"))

// const students= ["mary","john","mary","sharon","victor"]
// console.log(students.indexOf("mary")); 
