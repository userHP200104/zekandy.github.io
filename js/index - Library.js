

/* When the user clicks on the button, show filter opstions
   */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }
        
        function filterFunction() {
            var input, filter, ul, li, a, i;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            div = document.getElementById("myDropdown");
            a = div.getElementsByTagName("a");
            for (i = 0; i < a.length; i++) {
              txtValue = a[i].textContent || a[i].innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
              } else {
                a[i].style.display = "none";
              }
            }
          }
        


          

          
$(function(){

    
    console.log("Mahaha!!")

    // API Call Area for the first 20 movies

    api_key= "d87792c5e11fef2e1c8d310e05a12498";

    var endPoint = "https://api.themoviedb.org/3/movie/popular?api_key="+ api_key
    var data = $.getJSON(endPoint, function(result){

        console.log(result);

        for(i = 0; i < 25; i++){


            console.log("Hello");

            var movieName = result.results[i].original_title;
            var moviePoster = result.results[i].poster_path;
            //page one of movies
            var genreCode = result.results[i].genre_ids[0];

            var movieID = result.results[i].id
        
           
            
            // Movies of page 0 filter

            if(genreCode === 28){
                genreName = "Action";

            }else if(genreCode === 12){
                genreName = "Adventure"
            }else if(genreCode === 16){
                genreName = "Animation"
            }else if(genreCode === 35){
                genreName = "Comady"
            }else if(genreCode === 80){
                genreName = "Crime"
            }else if(genreCode === 99){
                genreName = "Docomentary"
            }else if(genreCode === 18){
                genreName = "Drama"
            }else if(genreCode === 10751){
                genreName = "Family"
            }else if(genreCode === 14){
                genreName = "Fantasy"
            }else if(genreCode === 36){
                genreName = "History"
            }else if(genreCode ===27){
                genreName = "Horror"
            }else if(genreCode ===10402){
                genreName = "Music"
            }else if(genreCode ===9648){
                genreName = "Mystery"
            }else if(genreCode ===10749){
                genreName = "Romance"
            }else if(genreCode ===878){
                genreName = "Science Fiction"
            }else if(genreCode ===10770){
                genreName = "TV Movie"
            }else if(genreCode === 53){
                genreName = "Thriller"
            }else if(genreCode ===10752){
                genreName = "War"
            }else if(genreCode ===37){
                genreName = "Western"
            }

     
            $(".movie-poster-box").append("<div class='movie-card-box col-xl-3 col-md-4 col-6  "+genreName+"  '><div class='movie-card '><a class='link-text' href='../pages/individual.html?movie=" + movieID + "'><img class='movie-poster-container  ' src='https://image.tmdb.org/t/p/w500/"+moviePoster+"'> <div class='movie-poster-cover'><div class='add-to-wishlist-button'><img class='wishlist-icon' src='../img/list.png'></div></div><div class='movie-details'><div class='movie-name'><h2> "+movieName+"</h2></div><div class='rating-holder'><div class='moon-holder-one'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Half moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Empty moon.png'></div></div></div></div>");
            

            
           
           
           

        }

     

    

    });
    $(".btn").on("click", function(){
        
        if($(this).hasClass("all")){
            $(".movie-card-box").fadeIn();

        }else if($(this).hasClass("act")){
            $(".movie-card-box").hide();
            $(".Action").fadeIn();

        }else if($(this).hasClass("adv")){
            $(".movie-card-box").hide();
            $(".Adventure").fadeIn();

        }else if($(this).hasClass("ani")){
            $(".movie-card-box").hide();
            $(".Animation").fadeIn();

        }else if($(this).hasClass("com")){
            $(".movie-card-box").hide();
            $(".Comady").fadeIn();

        }else if($(this).hasClass("cri")){
            $(".movie-card-box").hide();
            $(".Crime").fadeIn();

        }else if($(this).hasClass("doc")){
            $(".movie-card-box").hide();
            $(".Docomentary").fadeIn();

        }else if($(this).hasClass("dra")){
            $(".movie-card-box").hide();
            $(".Drama").fadeIn();

        }else if($(this).hasClass("fam")){
            $(".movie-card-box").hide();
            $(".Family").fadeIn();

        }else if($(this).hasClass("fan")){
            $(".movie-card-box").hide();
            $(".Fantasy").fadeIn();

        }else if($(this).hasClass("his")){
            $(".movie-card-box").hide();
            $(".History").fadeIn();

        }else if($(this).hasClass("sci")){
            $(".movie-card-box").hide();
            $(".Science Fiction").fadeIn();

        }else if($(this).hasClass("tv")){
            $(".movie-card-box").hide();
            $(".TV Movie").fadeIn();

        }else if($(this).hasClass("thril")){
            $(".movie-card-box").hide();
            $(".Thriller").fadeIn();

        }else if($(this).hasClass("war")){
            $(".movie-card-box").hide();
            $(".War").fadeIn();

        }else if($(this).hasClass("west")){
            $(".movie-card-box").hide();
            $(".Western").fadeIn();

        }else if($(this).hasClass("mys")){
            $(".movie-card-box").hide();
            $(".Mystery").fadeIn();

        }
        

        
    });

    // API Call Area for the rest 5 movies

    var endPoint2 = "https://api.themoviedb.org/3/movie/popular?api_key=d87792c5e11fef2e1c8d310e05a12498&language=en-US&page=%202"
    var data2 = $.getJSON(endPoint2, function(result){

        

        for(i = 0; i < 10; i++){


            console.log("Hello two");

            var movieName = result.results[i].original_title;
            var moviePoster = result.results[i].poster_path;
            var moviePoster = result.results[i].poster_path;
            var genreCode = result.results[i].genre_ids[0];

            var movieID = result.results[i].id

            
            
            // Movies of page 0 filter

            if(genreCode === 28){
                genreName = "Action";

            }else if(genreCode === 12){
                genreName = "Adventure"
            }else if(genreCode === 16){
                genreName = "Animation"
            }else if(genreCode === 35){
                genreName = "Comady"
            }else if(genreCode === 80){
                genreName = "Crime"
            }else if(genreCode === 99){
                genreName = "Docomentary"
            }else if(genreCode === 18){
                genreName = "Drama"
            }else if(genreCode === 10751){
                genreName = "Family"
            }else if(genreCode === 14){
                genreName = "Fantasy"
            }else if(genreCode === 36){
                genreName = "History"
            }else if(genreCode ===27){
                genreName = "Horror"
            }else if(genreCode ===10402){
                genreName = "Music"
            }else if(genreCode ===9648){
                genreName = "Mystery"
            }else if(genreCode ===10749){
                genreName = "Romance"
            }else if(genreCode ===878){
                genreName = "Science Fiction"
            }else if(genreCode ===10770){
                genreName = "TV Movie"
            }else if(genreCode ===53){
                genreName = "Thriller"
            }else if(genreCode ===10752){
                genreName = "War"
            }else if(genreCode ===37){
                genreName = "Western"
            }
           
            


           
            $(".movie-poster-box").append("<div class='movie-card-box col-xl-3 col-md-4 col-6'><div class='movie-card'><a class='link-text' href='../pages/individual.html?movie=" + movieID + "'><img class='movie-poster-container ' src='https://image.tmdb.org/t/p/w500/"+moviePoster+"'> <div class='movie-poster-cover'><div class='add-to-wishlist-button'><img class='wishlist-icon' src='../img/list.png'></div></div><div class='movie-details'><div class='movie-name'><h2> "+movieName+"</h2></div><div class='rating-holder'><div class='moon-holder-one'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Half moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Empty moon.png'></div></div></a></div></div>");
            

           
           
        }

        
    

    });

    $(".btn").on("click", function(){
        
        if($(this).hasClass("all")){
            $(".movie-card-box").fadeIn();

        }else if($(this).hasClass("act")){
            $(".movie-card-box").hide();
            $(".Action").fadeIn();

        }else if($(this).hasClass("adv")){
            $(".movie-card-box").hide();
            $(".Adventure").fadeIn();

        }else if($(this).hasClass("ani")){
            $(".movie-card-box").hide();
            $(".Animation").fadeIn();

        }else if($(this).hasClass("com")){
            $(".movie-card-box").hide();
            $(".Comady").fadeIn();

        }else if($(this).hasClass("cri")){
            $(".movie-card-box").hide();
            $(".Crime").fadeIn();

        }else if($(this).hasClass("doc")){
            $(".movie-card-box").hide();
            $(".Docomentary").fadeIn();

        }else if($(this).hasClass("dra")){
            $(".movie-card-box").hide();
            $(".Drama").fadeIn();

        }else if($(this).hasClass("fam")){
            $(".movie-card-box").hide();
            $(".Family").fadeIn();

        }else if($(this).hasClass("fan")){
            $(".movie-card-box").hide();
            $(".Fantasy").fadeIn();

        }else if($(this).hasClass("his")){
            $(".movie-card-box").hide();
            $(".History").fadeIn();

        }else if($(this).hasClass("sci")){
            $(".movie-card-box").hide();
            $(".Science Fiction").fadeIn();

        }else if($(this).hasClass("tv")){
            $(".movie-card-box").hide();
            $(".TV Movie").fadeIn();

        }else if($(this).hasClass("thril")){
            $(".movie-card-box").hide();
            $(".Thriller").fadeIn();

        }else if($(this).hasClass("war")){
            $(".movie-card-box").hide();
            $(".War").fadeIn();

        }else if($(this).hasClass("west")){
            $(".movie-card-box").hide();
            $(".Western").fadeIn();

        }else if($(this).hasClass("mys")){
            $(".movie-card-box").hide();
            $(".Mystery").fadeIn();

        }
    }); 

});

