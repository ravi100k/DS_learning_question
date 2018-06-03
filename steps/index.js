// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let value = ''
    for (let coll = 0; coll < n; coll++) {
      if(row >= coll){
        value += '#'
      }else {
        value += ' '
      }
    }
    console.log(value);
  }

}

module.exports = steps;
