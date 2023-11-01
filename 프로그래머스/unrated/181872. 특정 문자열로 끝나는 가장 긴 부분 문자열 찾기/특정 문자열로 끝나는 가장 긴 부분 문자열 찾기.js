function solution(myString, pat) {
    var answer = '';
    let newStr = myString.split('').reverse().join("")
    let newPat = pat.split('').reverse().join("")
    let index = newStr.indexOf(newPat)
    console.log(index)
    answer = newStr.slice(index,myString.length).split('').reverse().join("")
    
    
    return answer;
}