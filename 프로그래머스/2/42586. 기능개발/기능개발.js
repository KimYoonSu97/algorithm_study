function solution(progresses, speeds) {
    var answer = [];  
    const deplaySchedule =[];
      const workDay = progresses.map((item,index)=>{
    return Math.ceil((100 - item)/speeds[index])
})
      const maxDay = [...workDay].sort((a,b)=> b -a)[0];
    let task = [...workDay]
    for(let i = 1; i <= maxDay; i++ ){
        const queue =[];
        if(task[0] === i){
            queue.push(task[0])
            for(let j = 0; j <task.length; j++){
                const [deploy,...workDay] = task;
                if(workDay[j] <= deploy){                    
                    queue.push(workDay[j])
                } else{
                    task = task.slice(j+1)
                    break;
                }
            }
        }
        deplaySchedule.push(queue);
    }
    deplaySchedule.forEach((item)=>{
        if(item.length > 0 ){
            answer.push(item.length)
        }
    })
    
    

    
    return answer;
}