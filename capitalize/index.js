// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let ans = str[0].toUpperCase()
  for (let i=1; i < str.length; i++) {
    if(str[i-1] === ' '){
      ans += str[i].toUpperCase()
    }
    else{
      ans += str[i]
    }
  }
  return ans
}

module.exports = capitalize;

// sol 1

// function capitalize(str) {
//   let a = []
//   for (let i of str.split(' ')) {
//     a.push(i.charAt(0).toUpperCase()+i.substr(1))
//   }
//   return a.join(' ')
//
// }


//  sol 2

// function capitalize(str) {
//   let words = []
//   for (let i of str.split(' ')){
//     words.push(i[0].toUpperCase()+i.slice(1))
//   }
//   return words.join(' ')
//
// }
