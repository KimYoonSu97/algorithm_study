function solution(s) {
    var answer = '';
    
    let arr = s.split(' ')
    
    let answerArr = arr.map((item)=>{
        let str = item.toLowerCase()
        if(str.length > 1){
        return str[0].toUpperCase() + str.substring(1)
        } else {
            return str.toUpperCase()
        }
    })
    
    answer = answerArr.join(' ')
    
    return answer;
}