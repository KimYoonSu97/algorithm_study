function solution(myStr) {
    var answer = [];
    let strArr = ['a','b','c']
    let newStr = myStr
    for(i = 0; i< 3; i++){
        newStr = newStr.replaceAll(strArr[i]," ")
    }
    answer = newStr.split(" ").filter((item)=>{
        return item.length !== 0
    })
    if(answer.length === 0) {
        answer.push("EMPTY")
    }
    
    return answer;
}