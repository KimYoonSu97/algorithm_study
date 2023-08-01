function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
      let den = denom1 * denom2;
  let num = numer1 * denom2 + numer2 * denom1;
  let num2;

  if (den > num) {
    for (let i = 1; i <= num; i++) {
      if (den % i === 0 && num % i === 0) {
        num2 = i;
      }
    }
  } else if (den < num) {
    for (let i = 1; i <= den; i++) {
      if (den % i === 0 && num % i === 0) {
        num2 = i;
      }
    }
  } else {
    answer = [1, 1];
      return answer
  }

  answer = [num / num2, den / num2];

    
    
    
    
    
    return answer;
}