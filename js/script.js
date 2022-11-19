'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >=30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    rememberMyFilms: function() {
        let flag = true;
     
        again:  while(flag) {
            const movie = prompt('Один из последних просмотренных фильмов?', '').trim();
            if(!movie || movie.length > 50) {
                console.log('error');
                continue again;
            }
            
            const rate  = prompt('На сколько оцените его?', '').trim(); 
            if(!rate || rate.length > 50) {
                console.log('error');
                continue again;
            }
    
            console.log('done');
            personalMovieDB.movies[movie] = rate;
            flag = +confirm('Продолжаем ?');
        }
    },
    writeYourGenres: function() {
        for (let i =1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre == '' || genre === null) {
                alert('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            alert(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    }
};