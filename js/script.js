let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

function detectPersonalLevel () {
    if(numberOfFilms < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms < 30) {
        alert('Вы классический зритель');
    } else if (numberOfFilms >=30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function rememberMyFilms() {
    let flag = true;
 
    again:  while(flag) {
        const movie = prompt('Один из последних просмотренных фильмов?', '');
        if(!movie || movie.length > 50) {continue again;}
        
        const rate  = prompt('На сколько оцените его?', ''); 
        if(!rate || rate.length > 50) {continue again;}
        
        personalMovieDB.movies[movie] = rate;
        flag = +confirm('Продолжаем ?');
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i =1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();