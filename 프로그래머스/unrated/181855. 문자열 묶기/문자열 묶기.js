function solution(strArr) {
    var answer = 0;
    const sortArr = strArr.sort((a,b)=> a.length - b.length)
    const maxLength = sortArr[sortArr.length-1].length
    
    const list = []
    for(let i = 1 ; i <= maxLength; i++){
           list.push(0)
    }
    
    for(let i = 0; i<strArr.length; i++){
    const index = strArr[i].length-1    
    list[index]++
    }
    answer = list.sort((a,b)=> b -a )[0]
    
    return answer;
}