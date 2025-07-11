function solution(priorities, location) {
    var answer = 0;
const queue =priorities.map((item,index)=> [item, index])

for(let i = 0; i < queue.length ; i++){
    while(queue.length > 0){
        const [p,idx] = queue.shift();
        if(queue.some(([value,index])=>  value > p)){
            queue.push([p,idx])
        } else{
            answer++;
            if(idx === location){
                return answer;
            }
        }
    }}


    
    // for(let i = 0; i < stack.length ; i++){
    //     if(stack[i])
    // }
    
    
    return answer;
}