// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split('').reverse().join('');
  return str.split('').reduce((rev,char)=> char+rev ,'')

}

module.exports = reverse;

// Sol 1

// return str.split('').reverse().join('');

// Sol2

// let rev = '';
// for (let chr of str){
//   rev = chr+rev;
// }
// return rev

// Sol 3

// return str.split('').reduce((rev,chr)=>{
//   return chr+rev
// },'')
