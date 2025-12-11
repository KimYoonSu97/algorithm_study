function time(n, index) {
  const person = (index % n) + 1;         
  const turn = Math.floor(index / n) + 1;  
  return [person, turn];
}


function solution(n, words) {
    var answer = [0,0];
    const word= new Set();
    for(let i = 0 ; i<words.length; i++){
const current = words[i];
    const prev = words[i - 1];
    if (current.length === 1) return time(n, i);
    if (prev && current[0] !== prev[prev.length - 1]) return time(n, i);
    if (word.has(current)) return time(n, i);
    word.add(current);
    }

    return answer;
}