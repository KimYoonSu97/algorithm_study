function solution(emergency) {
    var answer = [];
    let originEmergency = [...emergency];
    emergency.sort((a,b)=> b-a).forEach((item,index)=>{
        answer[originEmergency.indexOf(item)] = index + 1
    })
    return answer;
}