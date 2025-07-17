function solution(s){
    let answer = 0;
    const stack = [];
    //s가 홀수면 무조건 -1ㅠ
    if(s.length %2 ===1){
        return 0
    }
    for(let  i = 0; i<s.length; i++){
        if(stack.length === 0){
            stack.push(s[i])
        } else{
            const last = stack[stack.length -1 ];
            if(last === s[i]){
                stack.pop()
            }else{
                stack.push(s[i])
            }
        }
        
    }    


    return stack.length === 0 ? 1 :0;
}

