function solution(arr) {
    var answer = [];

    let first = arr.indexOf(2)
    if(first < 0) return answer = [-1]
    let last = arr.lastIndexOf(2)
    answer = arr.slice(first,last+1)
    return answer;
}