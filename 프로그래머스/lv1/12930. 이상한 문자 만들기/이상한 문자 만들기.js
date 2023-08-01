function solution(s) {
  var answer = "";
  // console.log(s.split(" "));
  let string = s.split(" ");
  for (let i = 0; i < string.length; i++) {
    let str = string[i];
    let newStr = "";
    for (let j = 0; j < string[i].length; j++) {
      if (j === 0) {
        newStr += str[j].toUpperCase();
      } else if (j % 2 === 0) {
        newStr += str[j].toUpperCase();
      } else {
        newStr += str[j].toLowerCase();
      }
    }
    string[i] = newStr;
  }
  answer = string.join(" ");
  return answer;
}