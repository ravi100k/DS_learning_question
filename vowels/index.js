// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;


//  Sol 1
// function vowels(str) {
//   let count = 0;
//   let a = str.toLowerCase().split('');
//   for (let char of a) {
//     // console.log(char);
//     if(char.includes('a')||char.includes('e')||char.includes('i')||char.includes('o')||char.includes('u')){
//       count = count+1
//     }
//   }

//   return count
// }


//  Sol 2
// function vowels(str) {
//   let count = 0
//   let check = ['a','e','i','o','u']
//   for (let char of str.toLowerCase()){
//     if (check.includes(char)){
//       count += 1
//     }
//   }
//   return count
// }