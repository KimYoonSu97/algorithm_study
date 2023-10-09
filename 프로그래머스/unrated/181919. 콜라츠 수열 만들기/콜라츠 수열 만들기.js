function solution(n) {
  var answer = [];
  answer.push(n);
  let num = n;
  for (let i = 0; i < n; i++) {
    if (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
        answer.push(num);
      } else {
        num = 3 * num + 1;
        answer.push(num);
      }
    } else {
      return answer;
    }
  }

  return answer;
}