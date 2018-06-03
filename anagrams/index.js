// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const A = stringA.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')
  const B = stringB.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')
  return A===B ?  true : false

}


module.exports = anagrams;




// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g,"").toLowerCase();
//   stringB = stringB.replace(/[^\w]/g,"").toLowerCase();
//   if (stringA.length != stringB.length){
//     return false
//   }
//   let str1 = {}
//   let str2 = {}
//   for (char of stringA){
//     str1[char] = str1[char] + 1 ||  1
//   }
//   for (char of stringB){
//     str2[char] = str2[char] +1 || 1
//   }
//   for (var i in str1) {
//     if (str1[i] !== str2[i]) {
//       return false
//     }
//     return true
//   }
// }
