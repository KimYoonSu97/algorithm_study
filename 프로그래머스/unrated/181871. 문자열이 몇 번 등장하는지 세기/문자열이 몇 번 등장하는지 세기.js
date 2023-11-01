function solution(myString, pat) {
    var answer = 0;
    let newStr = myString;
    let idxCount = 0;
    let arr = []
       
    for(let i  = 0 ; i < myString.length ; i++ ){
        
        arr.push(myString.slice(i,i+pat.length))
    }
    answer = arr.filter((item)=>{
        return item === pat
    }).length
//     if(newStr.includes(pat)){
//         let index = myString.indexOf(pat)
        
//         newStr = myString.slice(index+1,newStr.length)
//         answer++;
//         idxCount++;
//     } else {
//         break
//     }
    
//     }
    
    
    console.log(arr)
    
    return answer;
}