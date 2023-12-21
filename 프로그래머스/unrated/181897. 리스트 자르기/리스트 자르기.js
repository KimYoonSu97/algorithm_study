function solution(n, slicer, num_list) {
    var answer = [];
    
    
        let first = slicer[0];
        let last = slicer[1]+1;
        if(n === 1){ first = 0;  last =slicer[1]+1 }
        if(n === 2){ first = slicer[0]; last = num_list.length}
    answer = num_list.slice(first,last)
    if(n === 4) {
        const length = Math.ceil(answer.length / slicer[2] )
        const fourAnswer = [];
        let index = 0;
        for(let i = 0; i <length ; i++){
            fourAnswer.push(answer[index])
            index = index + slicer[2]
        }
        answer = fourAnswer
    }
    
    
        
    
    return answer;
}