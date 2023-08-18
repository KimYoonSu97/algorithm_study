function solution(s) {
    const Criteria = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
  var answer = s;
  if (Number(s)) {
    answer = Number(s);
  } else {
    let string = s;
    for (let i = 0; i < Criteria.length; i++) {
      
        string = string.replaceAll(Criteria[i], String(i));
      
      answer = Number(string);
    }
  }
  return answer;
}
