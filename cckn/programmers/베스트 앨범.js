function solution(genres, plays) {
    const dataModel = {};
    genres.forEach((genre, idx) => {
        const play = plays[idx];
        if (dataModel[genre]) {
            dataModel[genre].push({ idx, play });
        } else {
            dataModel[genre] = [{ idx, play }];
        }
    });

    genres = Object.keys(dataModel).sort((genreA, genreB) => {
        const playA = dataModel[genreA]
            .map(song => song.play)
            .reduce((a, b) => a + b);
        const playB = dataModel[genreB]
            .map(song => song.play)
            .reduce((a, b) => a + b);

        return playB - playA;
    });
    let answer = [];
    genres.forEach(genre => {
        const plays = dataModel[genre]
            .sort((a, b) => b.play - a.play || a.idx - b.idx)
            .map(song => song.idx);
        answer = [...answer, ...plays.slice(0, 2)];
    });

    return answer;
}