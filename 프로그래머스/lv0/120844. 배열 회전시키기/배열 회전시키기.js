function solution(numbers, direction) {
  var answer = [];
  if (direction === "right") {
    let num = numbers[numbers.length - 1];
    answer = [num, ...numbers.slice(0, -1)];
  } else {
    let num = numbers[0];
    numbers.shift();
    numbers.push(num);
    answer = numbers;
  }
  return answer;
}