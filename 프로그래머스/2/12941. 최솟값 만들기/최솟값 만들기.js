function solution(A,B){
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    let sortA = A.sort((a,b) => a -b)
    let sortB = B.sort((a,b)=> b-a)
    for(let i = 0; i<A.length; i++){
        answer += sortA[i] * sortB[i]
    }

    return answer;
}