function solution(s1, s2) {
    var answer = 0;
        let a = s1;
    let b = s2;

    for (let i = 0; i< s1.length; i++){
        let v = a[i]
        
        for(let j=0; j<s2.length; j++){
            if(b[j] === v){
                answer++;
            }
        }
    }

    return answer;
}