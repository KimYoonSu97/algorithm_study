function solution(number) {
  var answer = number.split("").reduce((a, b) => Number(a) + Number(b)) % 9;
  return answer;
}