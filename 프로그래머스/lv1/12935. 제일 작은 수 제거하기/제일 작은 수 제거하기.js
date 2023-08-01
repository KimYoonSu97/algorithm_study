function solution(arr) {
    var answer = [-1];
    if( arr[0] === 10 ) {
        
    }  else
    {let minindex =arr.indexOf([...arr].sort((a,b)=> a-b)[0])
    answer = arr.filter((num,index)=>{
        return num !== arr[minindex]
    })}
    return answer;
}