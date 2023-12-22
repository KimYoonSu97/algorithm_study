function solution(my_string) {
    var answer = [];
    

let small = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
let capital = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    let str = my_string.split('')
answer = [...capital,...small].map((item)=>{
    return str.filter((strItem)=>{
        return item === strItem
    }).length
})

    
    return answer;
}