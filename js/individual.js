    var queryString = window.location.search;
    var urlParms = new URLSearchParams(queryString);
    var movieID = parseInt(urlParms.get('movie'));

    var watchListID = movieID;

$(function(){


    console.log("I smell dead people");

    var genreID = 0;

    console.log(movieID);


    var api_key = "a793a4ca3bd321cd6f1c5af303c3326a";

    // Page 1 API

    var movieEndPoint = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key + "&language=en-US&page=1";
    var dataOne = $.getJSON(movieEndPoint, function(result){

        console.log(result);

        var arrLen = result.results.length;


        for(i = 0; i < arrLen; i++){

            console.log("count")

            if(result.results[i].id === movieID){

                var backdropImage = result.results[i].backdrop_path;
                var posterImage = result.results[i].poster_path;
                var movieTitle = result.results[i].title;
                var movieDescription = result.results[i].overview;
                var movieRating = result.results[i].vote_average;
                var movieReleaseDate = result.results[i].release_date;
                var genreCode = result.results[i].genre_ids[0];
                genreID = genreCode;

                console.log(backdropImage);
                console.log(posterImage);
                console.log(movieTitle);
                console.log(movieDescription);
                console.log(movieRating);
                console.log(movieReleaseDate);
                console.log(genreCode);

                $("title").text("Planet Media | " + movieTitle);

                $(".parallex").attr("style", "background-image: url(https://image.tmdb.org/t/p/original" + backdropImage);
                $(".poster").attr("src", "https://image.tmdb.org/t/p/original" + posterImage);

                $("#movieTitle").text(movieTitle);
                $("#movieDescription").text(movieDescription);
                $("#movieRating").text(movieRating + " / 10");
                $("#movieReleaseDate").text(movieReleaseDate);
                
            }
        }
    });

    // Page 2 API

    var movieEndPoint2 = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key + "&language=en-US&page=2";

    var dataOnePointTwo = $.getJSON(movieEndPoint2, function(result){

        console.log(result);

        var arrLen = result.results.length;


        for(i = 0; i < arrLen; i++){

            console.log("count")

            if(result.results[i].id === movieID){

                var backdropImage = result.results[i].backdrop_path;
                var posterImage = result.results[i].poster_path;
                var movieTitle = result.results[i].title;
                var movieDescription = result.results[i].overview;
                var movieRating = result.results[i].vote_average;
                var movieReleaseDate = result.results[i].release_date;
                var genreCode = result.results[i].genre_ids[0];
                genreID = genreCode;

                console.log(backdropImage);
                console.log(posterImage);
                console.log(movieTitle);
                console.log(movieDescription);
                console.log(movieRating);
                console.log(movieReleaseDate);
                console.log(genreCode);

                $(".parallex").attr("style", "background-image: url(https://image.tmdb.org/t/p/original" + backdropImage);
                $(".poster").attr("src", "https://image.tmdb.org/t/p/original" + posterImage);

                $("#movieTitle").text(movieTitle);
                $("#movieDescription").text(movieDescription);
                $("#movieRating").text(movieRating + " / 10");
                $("#movieReleaseDate").text(movieReleaseDate);

            }
        }
    });

    var trailerEndPoint = "https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=a793a4ca3bd321cd6f1c5af303c3326a&language=en-US" + api_key;
    var dataTwo = $.getJSON(trailerEndPoint, function(result){

                var movieTrailer = result.results[0].key;

                console.log(movieTrailer);

                $("#movieTrailer").attr("src", "https://www.youtube.com/embed/" + movieTrailer);



    });

    var castEndPoint = "https://api.themoviedb.org/3/movie/" + movieID + "/credits?api_key=" + api_key;
    var dataThree = $.getJSON(castEndPoint, function(result){

                var castMemberOne = result.cast[0].name;
                var castMemberTwo = result.cast[1].name;
                var castMemberThree = result.cast[2].name;

                console.log(castMemberOne);
                console.log(castMemberTwo);
                console.log(castMemberThree);

                $("#castMemberOne").text(castMemberOne)
                $("#castMemberTwo").text(castMemberTwo)
                $("#castMemberThree").text(castMemberThree)



    });

    var genreEndPoint = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + api_key + "&language=en-US";
    var dataFour = $.getJSON(genreEndPoint, function(result){

                var genreName = "unidentified";

                arrLen2 = result.genres.length;

                for(i = 0; i < arrLen2; i++){

                    if(genreID === result.genres[i].id){

                        genreName = result.genres[i].name;
                    }

                    console.log(genreName);

                    $("#genreName").text(genreName);
                }



    });

    var similarEndPoint = "https://api.themoviedb.org/3/movie/" + movieID + "/similar?api_key=" + api_key + "&language=en-US&page=1";
    var dataFive = $.getJSON(similarEndPoint, function(result){


                var similarMovieOne = result.results[0].poster_path;
                var similarMovieTwo = result.results[1].poster_path;
                var similarMovieThree = result.results[2].poster_path;

                var similarMovieOneName = result.results[0].original_title;
                var similarMovieTwoName = result.results[1].original_title;
                var similarMovieThreeName = result.results[2].original_title;

                console.log(similarMovieOne);
                console.log(similarMovieTwo);
                console.log(similarMovieThree);

                console.log(similarMovieOneName);
                console.log(similarMovieTwoName);
                console.log(similarMovieThreeName);

                $("#similarMovieOne").attr("src", "https://image.tmdb.org/t/p/original" + similarMovieOne);;
                $("#similarMovieTwo").attr("src", "https://image.tmdb.org/t/p/original" + similarMovieTwo);
                $("#similarMovieThree").attr("src", "https://image.tmdb.org/t/p/original" + similarMovieThree);

                $("#similarMovieOneName").text(similarMovieOneName);
                $("#similarMovieTwoName").text(similarMovieTwoName);
                $("#similarMovieThreeName").text(similarMovieThreeName);
    });

                
                





});