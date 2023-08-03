const morse = [
    ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."
]
const alpha = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));



function solution(letter) {
    var answer = letter.split(" ").map((code)=>{
        
    return alpha[morse.indexOf(code)] 
    }).join("")

    return answer;
}