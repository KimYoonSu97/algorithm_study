function solution(s) {
    var answer = 0;
    const arr = s.split(' ')
    
    arr.forEach((item,index)=>{
        if(item === "Z"){
            
        answer = answer - Number(arr[index-1])
        } else {
        
        answer = answer + Number(item)}
        
    })
    return answer;
}