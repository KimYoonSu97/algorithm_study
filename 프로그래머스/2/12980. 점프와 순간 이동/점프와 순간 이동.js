function solution(n)
{
    var ans = 0;
    let dt = n;
    while(dt > 0){
        if(dt%2 === 0){
            dt = dt / 2
        }else{
            ans++
            dt = dt -1
        }
    }
    

    return ans;
}