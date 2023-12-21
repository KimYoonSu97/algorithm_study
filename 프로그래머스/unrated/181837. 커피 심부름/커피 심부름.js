function solution(order) {
    var answer = 0;
    order.forEach((item)=>{
        console.log(item)
        
        if(item.includes('cafe')){
            console.log('라떼')
            answer += 5000
            
        } else {
            console.log('실행')
            answer += 4500
            
        }
    })
    
    return answer;
}