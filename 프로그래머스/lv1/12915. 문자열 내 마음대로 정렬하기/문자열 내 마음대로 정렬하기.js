function solution(strings, n) {
        var answer = [];
    let string = [];
    for ( let i = 0; i < strings.length; i++) {
        string.push(strings[i].slice(n,n+1) + strings[i]);
    }
    string.sort()
    for (let i = 0; i < strings.length; i++) {
        answer.push(string[i].slice(1,string[i].length));
    }
    console.log(answer)

    return answer;
}