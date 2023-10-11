function solution(numLog) {
  let answer = "";
  const output = (num, nextNum) => {
    const calc = num - nextNum;
    switch (calc) {
      case -1:
        return "w";
      case 1:
        return "s";
      case -10:
        return "d";
      case 10:
        return "a";
      default:
        return "error";
    }
  };

  for (let i = 0; i < numLog.length - 1; i++) {
    answer += output(numLog[i], numLog[i + 1]);
  }

  return answer;
}