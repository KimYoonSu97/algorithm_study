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
// 팩토리얼을 구하는 함수
function Factorial(num) {
    // 재귀를 통해 n*n-1... 을 구현함
    if(num > 1) return num*Factorial(num-1)
    return num
}