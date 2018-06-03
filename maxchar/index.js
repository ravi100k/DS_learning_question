// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {}
  let max = 0;
  let max_char = '';

  for (char of str){
    chars[char] = chars[char] + 1 ||  1
  }
  
  for (char in chars){
    if (chars[char] > max){
      max = chars[char]
      max_char = char
    }
  }
  return max_char
}

module.exports = maxChar;
