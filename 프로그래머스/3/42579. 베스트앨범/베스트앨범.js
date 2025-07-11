function solution(genres, plays) {
  var answer = [];

  const genresCount = new Set(genres).size;
  const genresRate = new Map();
  const albumMap = new Map();
  genres.forEach((item, index) => {
    albumMap.set(index, [genres[index], plays[index]]);
    const condition = genresRate.get(item);
    if (condition) {
      genresRate.set(item, condition + plays[index]);
    } else {
      genresRate.set(item, plays[index]);
    }
  });
  const rate = [...genresRate].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < rate.length; i++) {
    const filterGenre = [...albumMap].filter((item) => item[1][0] === rate[i][0]).sort((a, b) =>  b[1][1] - a[1][1]);
    for (let i = 0; i < 2; i++) {
      if (filterGenre.length < 2) {
        answer.push(filterGenre[0][0]);
        break;
      } else {
        answer.push(filterGenre[i][0]);
      }
    }
  }

  return answer;
}
