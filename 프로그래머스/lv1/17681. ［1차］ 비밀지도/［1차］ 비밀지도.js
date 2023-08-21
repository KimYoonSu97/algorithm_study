function solution(n, arr1, arr2) {
  var answer = [];

  const decodeArr = (arr) => {
    return arr.map((item) => {
      let stringNumN = item.toString(2);
      if (stringNumN.length === n) {
        return stringNumN;
      } else {
        for (let i = stringNumN.length; i < n; i++) {
          stringNumN = 0 + stringNumN;
        }
        return stringNumN;
      }
    });
  };

  let decodeArr1 = decodeArr(arr1);
  let decodeArr2 = decodeArr(arr2);

  for (let i = 0; i < n; i++) {
    let arr1element = decodeArr1[i];
    let arr2element = decodeArr2[i];
    let answerStr = "";

    for (let j = 0; j < n; j++) {
      if (arr1element[j] === "0" && arr2element[j] === "0") {
        answerStr += " ";
      } else {
        answerStr += "#";
      }
    }
    answer.push(answerStr);
  }

  return answer;
}