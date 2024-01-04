


    function solution(players, callings) {
        
        var answer = players
        const rank = {};
//         이름이 키값이고 등수가 밸류인 객체 생성
        players.forEach((item,index)=>{
            return rank[item] = index
        })
        
//         선수호명 수 만큼 반복
        for(let i = 0 ; i<callings.length; i++){
            
//             불린 선수의 위치값
            let call = rank[callings[i]]
//             불린 선수의 전 선수
            let temp = players[call-1]
            
//             매개변수 배열의 위치값 -1 에는 불린선수 이름을 calling에서 가져다 넣음
            players[call-1] = callings[i];
//             그리고 불린선수 위치에는 전 선수 이름 넣음
            players[call] = temp;        
            
//             객체에도 해당 값 업데이트
//             rank의 불린사람의 밸류값은 위치값에서 -1
            rank[callings[i]] = call - 1;
//             그리고 원ㄹ ㅐ사람은 불린선수 위치값 넣어주기
            rank[temp] = call;
            
        }

        
    return answer;
}