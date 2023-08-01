function solution(sizes) {
    var answer = 0;
    let width= [];
    let height = [];
    // 각 배열에서 더큰수 끼리로 정리하고 가장 큰값들끼리 빼면 되는거아님..?
    sizes.map((item)=>{
        return item.sort((a,b)=> a-b)
    }).forEach((item)=>{
        width.push(item[0])
        height.push(item[1])
    })
    
    answer = width.sort((a,b)=> a-b).at(-1) * height.sort((a,b)=> a-b).at(-1)

    
    
    
    
    return answer;
}