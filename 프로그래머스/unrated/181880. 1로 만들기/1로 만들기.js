function solution(num_list) {
  var answer = 0;

  num_list.forEach((item) => {
    let num = item;
    let count = 0;
    
    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
        count++;
      } else {
        num = (num - 1) / 2;
        count++;
      }
    }
    answer += count;
  });

  return answer;
}
