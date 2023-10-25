function solution(i, j, k) {
    var answer = 0;
    
    for(let a = i ; a<=j; a++){
        
        if(String(a).includes(k)){
           let arr = String(a).split('')
            arr.forEach((item)=>{
                if(item == k){
                    answer ++
                }
            })
        }
        
    }
    
    return answer;
}