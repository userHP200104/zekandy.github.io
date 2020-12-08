$(function(){
    console.log("IT'S ALLLLIVE")
    // Sign Up - Sign In

    $(".sign-up-page").hide();
    console.log("peeka boo")

    $(".sign-up-btn").on("click", function(){
        $(".sign-in-page").hide();
        $(".sign-up-page").fadeIn(800);$
        $("title").text("Planet Media | Sign Up");
    });

    $(".sign-in-btn").on("click", function(){
        $(".sign-up-page").hide();
        $(".sign-in-page").fadeIn(800);
        $("title").text("Planet Media | Sign In");
    });

    $(".sign-up").on("click", function(){

        $(".sign-in-page").hide();
        $(".sign-up-page").fadeIn(800);
        $("title").text("Planet Media | Sign Up");
    });

    $(".right").on("mouseenter", function(){
        $(this).removeClass("fa-eye");
        $(this).addClass("fa-eye-slash");
        $(this).next("input").attr("type", "text");
    });

    $(".right").on("mouseleave", function(){
        $(this).removeClass("fa-eye-slash");
        $(this).addClass("fa-eye");
        $(this).next("input").attr("type", "password");
    });

    // Landing Page
    
    $(function(){

        for(i = 0; i < 6; i++){

            $(".slide-id").hide();
                $(".slide-id-1").fadeIn();
        
            var count = 0;
            
        }
        console.log("Help Me");

        var api_key = "a793a4ca3bd321cd6f1c5af303c3326a";

        var movieEndPoint = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key + "&language=en-US&page=1";
        var dataOne = $.getJSON(movieEndPoint, function(result){

            console.log(result);

            var arrayDisp = result.results.length;
            var count = 0;

            for(count = 0; count < arrayDisp; count++){

                console.log("count")

                var backdropImage = result.results[i].backdrop_path;
                var movieTitle = result.results[i].title;
                var movieDescription = result.results[i].overview;
                var movieRating = result.results[i].vote_average;
                
                $(".nex").on("click", function(){
            
                    for(i = 0; i < 6; i++){

                        $(".slide-id").hide();
                            $(".slide-id-1").fadeIn();
                    
                        var count = 0;
                    
                        if(count === 0){
                            $(".slide-id").hide();
                            $(".slide-id-1").fadeIn(2000);
                            $(".header-image").attr("src", "https://image.tmdb.org/t/p/original" + backdropImage);
                            $("#movieTitle").text(movieTitle);
                            $("#movieDescription").text(movieDescription);
                            $("#movieRating").text(movieRating + " / 10");
                        } else if(count === 1){
                            $(".slide-id").hide();
                            $(".slide-id-2").fadeIn(2000);
                            $(".header-image").attr("src", "https://image.tmdb.org/t/p/original" + backdropImage);
                            $("#movieTitle").text(movieTitle);
                            $("#movieDescription").text(movieDescription);
                            $("#movieRating").text(movieRating + " / 10");
                        } else if(count === 2){
                            $(".slide-id").hide();
                            $(".slide-id-3").fadeIn(2000);
                            $(".header-image").attr("src", "https://image.tmdb.org/t/p/original" + backdropImage);
                            $("#movieTitle").text(movieTitle);
                            $("#movieDescription").text(movieDescription);
                            $("#movieRating").text(movieRating + " / 10");
                        } else if(count === 3){
                            $(".slide-id").hide();
                            $(".slide-id-4").fadeIn(2000);
                            $(".header-image").attr("src", "https://image.tmdb.org/t/p/original" + backdropImage);
                            $("#movieTitle").text(movieTitle);
                            $("#movieDescription").text(movieDescription);
                            $("#movieRating").text(movieRating + " / 10");
                        } else if(count === 4){
                            $(".slide-id").hide();
                            $(".slide-id-5").fadeIn(2000);
                            $(".header-image").attr("src", "https://image.tmdb.org/t/p/original" + backdropImage);
                            $("#movieTitle").text(movieTitle);
                            $("#movieDescription").text(movieDescription);
                            $("#movieRating").text(movieRating + " / 10");
                        }
                    }
                    console.log(result);
                    
                    
                });
                
                $(".prev").on("click", function(){
                
                    count = count - 1;
                    if(count < 0){
                        count = 4;
                    }
                    
                    if(count == 0){
                        $(".slide-id").hide();
                        $(".slide-id-1").fadeIn(2000);
                        $(".header-image").attr("src", "https://image.tmdb.org/t/p/original" + backdropImage);
                        $("#movieTitle").text(movieTitle);
                        $("#movieDescription").text(movieDescription);
                        $("#movieRating").text(movieRating + " / 10");
                    } else if(i == 1){
                        $(".slide-id").hide();
                        $(".slide-id-2").fadeIn(2000);
                        $(".header-image").attr("src", "https://image.tmdb.org/t/p/original" + backdropImage);
                        $("#movieTitle").text(movieTitle);
                        $("#movieDescription").text(movieDescription);
                        $("#movieRating").text(movieRating + " / 10");
                    } else if(count == 2){
                        $(".slide-id").hide();
                        $(".slide-id-3").fadeIn(2000);
                        $(".header-image").attr("src", "https://image.tmdb.org/t/p/original" + backdropImage);
                        $("#movieTitle").text(movieTitle);
                        $("#movieDescription").text(movieDescription);
                        $("#movieRating").text(movieRating + " / 10");
                    } else if(count == 3){
                        $(".slide-id").hide();
                        $(".slide-id-4").fadeIn(2000);
                        $(".header-image").attr("src", "https://image.tmdb.org/t/p/original" + backdropImage);
                        $("#movieTitle").text(movieTitle);
                        $("#movieDescription").text(movieDescription);
                        $("#movieRating").text(movieRating + " / 10");
                    } else if(count == 4){
                        $(".slide-id").hide();
                        $(".slide-id-5").fadeIn(2000);
                        $(".header-image").attr("src", "https://image.tmdb.org/t/p/original" + backdropImage);
                        $("#movieTitle").text(movieTitle);
                        $("#movieDescription").text(movieDescription);
                        $("#movieRating").text(movieRating + " / 10");
                    }
                    console.log(count);
                    
                });
            }
        })
    });

    //API code

    //OMDB API  http://www.omdbapi.com/?i=tt3896198&apikey=65b3b6d3 
    //TMDB API  https://api.themoviedb.org/3/movie/550?api_key=a793a4ca3bd321cd6f1c5af303c3326a

    var api_key = "a793a4ca3bd321cd6f1c5af303c3326a";

    var popularMovies = "https://api.themoviedb.org/3/movie/popular?api_key="+api_key+"&language=en-US&page=1";
    var data = $.getJSON(popularMovies, function(result){

        console.log(result);

        for(i = 0; i < 10; i++){

            imageReturned = result.results[i].poster_path;
            movieTitle = result.results[i].title;
            movieReleaseDate= result.results[i].release_date;
            genreCode = result.results[i].genre_ids[0];
            movieRating = result.results[i].vote_average;

            var movieID = result.results[i].id

            if(genreCode === 28){
                genreName = "Action";
            } else if(genreCode === 12){
                genreName = "Adeventure";
            } else if(genreCode === 16){
                genreName = "Animation";
            } else if(genreCode === 35){
                genreName = "Comedy";
            } else if(genreCode === 80){
                genreName = "Crime";
            } else if(genreCode === 99){
                genreName = "Documentry";
            } else if(genreCode === 18){
                genreName = "Drama";
            } else if(genreCode === 10751){
                genreName = "Family";
            } else if(genreCode === 14){
                genreName = "Fantasy";
            } else if(genreCode === 36){
                genreName = "Histroy";
            } else if(genreCode === 878){
                genreName = "Sci-Fi";
            } else {
                genreName = ""
            }
    
            $(".slider").append("<div class='card-item col-sm-12'><a class='link-text' href='../pages/individual.html?movie=" + movieID + "'><img src='https://image.tmdb.org/t/p/w500/"+imageReturned+"'><h5>"+ movieTitle +"</h4><ul><li><strong> Genre</strong><span id='genre'><br>"+ genreName +"</span></li><li><strong> Release Date </strong><span><br>"+ movieReleaseDate +"</span></li><li><strong> Rating </strong><span><br>"+ movieRating +"/10</span></li></ul></a></div>")
            //end of append
          
        }

    });

    var topRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key="+api_key+"&language=en-US&page=1";
    var data = $.getJSON(topRatedMovies, function(result){

        console.log(result);

    });

    // To get movie poster or image backdrop use https://image.tmdb.org/t/p/original<image path from above api>

});