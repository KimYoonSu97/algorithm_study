function solution(my_string) {
    var answer = 0;
    
    let arr = my_string.split('')
    let newArr = arr.map((item)=>{        
        if(Number.isInteger(Number(item))){
            return Number(item)
        } else {
            return " "
        }
    }).join('').split(' ').forEach((item)=>{
        if(item.length > 0){
            answer += Number(item)
        }
    })
    
    
    
    return answer;
}