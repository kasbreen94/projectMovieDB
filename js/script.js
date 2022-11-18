const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if(numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms < 30) {
    alert('Вы классический зритель');
} else if (numberOfFilms >=30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

let flag = true;
 
again:  while(flag) {
    const movie = prompt('Один из последних просмотренных фильмов?', '');
    if(!movie || movie.length > 50) {continue again;}
    
    const rate  = prompt('На сколько оцените его?', ''); 
    if(!rate || rate.length > 50) {continue again;}
    
    personalMovieDB.movies[movie] = rate;
    flag = +confirm('Продолжаем ?');
  }

console.log(personalMovieDB);