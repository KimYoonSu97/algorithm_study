function solution(prices) {
  const length = prices.length;
  const answer = Array(length).fill(0);
  const stack = [];

  for (let i = 0; i < length; i++) {
    // 현재 가격이 이전 가격보다 작으면 스택에 있는 가격들 처리
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const top = stack.pop();
      answer[top] = i - top;
    }

    stack.push(i);
  }

  // 스택에 남아 있는 인덱스는 끝까지 가격이 안 떨어진 경우
  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = length - 1 - top;
  }

  return answer;
}