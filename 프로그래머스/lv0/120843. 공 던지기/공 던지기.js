function solution(numbers, k) {
  var answer = 0;

  answer = numbers[k * 2];
  let index = 0;
  //던질 횟수
  for (let i = 1; i <= k; i++) {
    //만약 던질사람의 인덱스가 numbers의 length보다 크면??\
    //렝스는 6
    //2
    //4
    //6
    //0
    //2
    if (index > numbers.length) {
      index = index - numbers.length;
    }
    //던진사람의 인덱스
    answer = numbers[index];
    //0
    //2
    //4
    //6
    //8
    //받은사람의 인덱스 = 다음에 던질사람
    index = index + 2;
    //2
    //4
    //6
    //8
    //10
  }
  return answer;
}