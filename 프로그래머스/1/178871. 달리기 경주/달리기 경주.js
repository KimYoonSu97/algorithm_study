


    function solution(players, callings) {
        
        var answer = players
        const rank = {};
        players.forEach((item,index)=>{
            return rank[item] = index
        })
        
        for(let i = 0 ; i<callings.length; i++){
            
            let call = rank[callings[i]]
            let temp = players[call-1]
            
            players[call-1] = callings[i];
        players[call] = temp;
            
             rank[callings[i]] = call - 1;
        rank[temp] = call;
            
        }
        
    //     for(let i = 0; i<callings.length; i++){            
    // const currentIndex = answer.indexOf(callings[i])
    // const currentPlayer = answer[currentIndex]
    // answer[currentIndex] = answer[currentIndex -1]
    // answer[currentIndex -1] = currentPlayer
    //     }
        
    return answer;
}