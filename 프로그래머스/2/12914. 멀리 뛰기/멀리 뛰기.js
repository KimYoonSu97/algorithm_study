function solution(n) {
    const mod = 1234567;
    var answer = 0;
    
    if(n===1) return 1;
    if(n===2) return 2;
    
    let a = 1;
    let b= 2;
    for(let i = 3; i<=n; i++){
        const temp = (a+b)%mod;
        a =b;
        b = temp;
        
        
    }
    return b;
}