function solution(s, n) {
  var answer = "";
  let a = 97;
  let z = 122;
  let A = 65;
  let Z = 90;

  for (let i = 0; i < s.length; i++) {
    const codeNum = s.charCodeAt(i);
    if (s[i] === " ") {
      answer += " ";
    } else if (A <= codeNum && Z >= codeNum) {
      if (Z < codeNum + n) {
        answer += String.fromCharCode(codeNum + n - 26);
      } else {
        answer += String.fromCharCode(codeNum + n);
      }
    } else {
      if (z < codeNum + n) {
        answer += String.fromCharCode(codeNum + n - 26);
      } else {
        answer += String.fromCharCode(codeNum + n);
      }
    }
  }
  return answer;
}