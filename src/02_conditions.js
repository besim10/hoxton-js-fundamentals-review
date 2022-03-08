/*
 Aight, logic gate time!
*/

// function called "getShorterString" takes 2 strings as arguments. It returns the string that is shorter in length.
// - If the strings are the same length, return "They're the same length!"
// 1. Build the function.
function getShorterString(a,b){
    if(a.length === b.length) return `They're the same length!`
    else if(a.length > b.length) return b
    else return a
}
// 1.1 Call the function with "Bob" and "Steven" as arguments.
console.log(getShorterString('Bob','Steven'))
// 1.2. Call the function with "Henrica" and "Mark" as arguments.
console.log(getShorterString('Henrica','Mark'))
// 1.3. Call the function with any arguments we like to test the remaining use case.
console.log(getShorterString('Henrica','Henrica'))

// 2. for this exercise, nasty birds are pigeon, seagull and bin chicken. All other birds are clean.
// Write a function called checkDirtyBirds which takes an array of bird species as an argument.
function checkDirtyBirds(array){
    const birds = array
    const dirtyBirds = ['pigeon', 'seagull', 'bin chicken']
    const matchedBirds = []
    for(const bird of birds){
        if (dirtyBirds.includes(bird)) matchedBirds.push(bird)
    }
    if(matchedBirds.length === 3) return 'Where the hell am I'
    else if(matchedBirds.length === 2) return 'Oh god'
    else if(matchedBirds.length === 1) return 'Eww'
    else return 'Birds are cute!'
}
// The function should:
// - return "Eww" if the array contains one of the nasty birds
// - return "Oh god" if the array contains 2 of the nasty birds
// - return "Where the hell am I?" if the array contains 3 or more of the nasty birds
// - return "Birds are cute!" if all the birds are clean

// 2.1 Test all the scenarios by calling the function with different arguments.

console.log(checkDirtyBirds(['pigeon', 'seagull', 'bin chicken']))
console.log(checkDirtyBirds(['pigeon', 'owls', 'bin chicken']))
console.log(checkDirtyBirds(['stork', 'owls', 'bin chicken']))
console.log(checkDirtyBirds(['pengiuns', 'herons', 'swifts']))

