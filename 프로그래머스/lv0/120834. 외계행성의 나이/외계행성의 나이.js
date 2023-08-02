function solution(age) {
    var answer = '';
    let transAge = [];
    const alpha = ['a','b','c','d','e','f','g','h','i','j']
    String(age).split("").forEach((item, index)=>{
        transAge.push(alpha[item])
    })
    answer = transAge.join("")
    return answer;
}