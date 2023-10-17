function solution(my_string) {
    let answer = '';
  let str = my_string.split('')
   
  str.forEach((string)=>{
      if(!answer.includes(string)){
          answer += string
      }
  })
    
    
    return answer;
}