function solution(n) {
    let result = 0
    for(let i = 1 ; i <= 10; i++) {
        if(n >= Factorial(i)) {
            result = i
            continue
        } else {
            break
        }
    }
    return result
}
function Factorial(num) {
    if(num > 1) return num*Factorial(num-1)
    return num
}