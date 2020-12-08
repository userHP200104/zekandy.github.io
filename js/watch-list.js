$(function(){

    console.log("ITS Alive!!!");

    // Watch List
    $(".my-watch-list-box").hide();

    $(".watch-list").on("click", function(){
        console.log("Im working here")
        $(".my-watch-list-box").fadeIn();
        $(".watch-dis").attr("href", "../css/watch-list.css")

    });

    $(".wl-exit-btn").on("click", function(){
        $(".my-watch-list-box").hide();
    $(".watch-dis").attr("href", "")

    });

    var api_key = "a793a4ca3bd321cd6f1c5af303c3326a";

    $(".watch-list-btn" || ".wishlist-icon").on("click", function(){

    var popularMovies = "https://api.themoviedb.org/3/movie/"+ movieID +"?api_key="+ api_key +"&language=en-US";
    var data = $.getJSON(popularMovies, function(result){

        console.log(result);

            console.log("hi")

            //Variable Returned

            console.log("i c u");

            if(result.id == movieID){
            

                imageReturned = result.poster_path;
                movieTitle = result.title;
                movieReleaseDate= result.release_date;
                genreCode = result.genres[0];
                movieRating = result.vote_average;

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
                
                $(".wl-item").append("<div class='wl-item-body col-12 col-xl-6 row'><div class='movie-image col-4'><img class='image-block' src='https://image.tmdb.org/t/p/original"+ imageReturned +"'></div><div class='movie-info-block col-8'><div class='movie-info'><h1 class='movie-title'>"+ movieTitle +"</h1></div><div class='movie-info'><h4 class='secondary-text'> Release Date: "+ movieReleaseDate +"</h4></div><div class='movie-info'><h4 class='secondary-text'>Genre: "+ genreName +" </h4></div><div class='movie-info'><h4 class='secondary-text'>Rating: "+ movieRating +"/10</h4></div><div class='remove-btn'><h6>Remove</h6></div></div></div>");

                console.log("i have appended")

                $(".remove-btn").on("click", function(){
                    $(this).closest(".wl-item-body").hide();
                });

                };

        });

    });
});