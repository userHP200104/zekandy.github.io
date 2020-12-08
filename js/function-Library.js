/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function mySecondFunction() {
    document.getElementById("myDropdownTwo").classList.toggle("show");
}

function myThirdFunction() {
    document.getElementById("myDropdownThree").classList.toggle("show");
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

function myFourthFunction() {
    document.getElementById("myDropdownFour").classList.toggle("show");
}

$(function(){
    

    // API Call Area for the first 20 movies

    api_key= "d87792c5e11fef2e1c8d310e05a12498";

    var endPoint = "https://api.themoviedb.org/3/movie/popular?api_key="+ api_key
    var data = $.getJSON(endPoint, function(result){

        

        for(i = 0; i < 25; i++){

            

            var movieName = result.results[i].original_title;
            var moviePoster = result.results[i].poster_path;
            //page one of movies
            var genreCode = result.results[i].genre_ids[0];
            var releaseYear = result.results[i].release_date;

           

            
            var date = new Date(releaseYear);
            var year = date.getFullYear();

            
            
            
            // Movies of page 0 filter

            if(year=== 2020){
                yearReleased = "2020";

            }else if(year === 2019){
                yearReleased = "2019"
            }else if(year === 2018){
                yearReleased = "2018"
            }else if(year === 2017){
                yearReleased = "2017"
            }else if(year === 2016){
                yearReleased = "2016"
            }else if(year === 2015){
                yearReleased = "2015"
            }else if(year === 2014){
                yearReleased = "2014"
            }else if(year === 2013){
                yearReleased = "2013"
            }else if(year === 2012){
                yearReleased = "2012"
            }else if(year === 2011){
                yearReleased = "2011"
            }else if(year === 2010){
                yearReleased = "2010"
            }



            // Movies of page 0 filter for the realise year
            $(".movie-poster-box").append("<div class='movie-card-box col-xl-3 col-md-4 col-6  "+yearReleased+"  '><div class='movie-card '><a class='link-text' href='../pages/individual.html'><img class='movie-poster-container' src='https://image.tmdb.org/t/p/w500/"+moviePoster+"'> <div class='movie-poster-cover'><div class='add-to-wishlist-button'><img class='wishlist-icon' src='../img/list.png'></div></div><div class='movie-details'><div class='movie-name'><h2> "+movieName+"</h2></div><div class='rating-holder'><div class='moon-holder-one'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Half moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Empty moon.png'></div></div></div></div>");
    
            
            

            
           
           
           

        }

     

    

    });
    $(".btn").on("click", function(){
        
        if($(this).hasClass("all")){
            $(".movie-card-box").fadeIn();

        }else if($(this).hasClass("20")){
            $(".movie-card-box").hide();
            $(".2020").fadeIn();

        }else if($(this).hasClass("19")){
            $(".movie-card-box").hide();
            $(".2019").fadeIn();

        }else if($(this).hasClass("18")){
            $(".movie-card-box").hide();
            $(".2018").fadeIn();

        }else if($(this).hasClass("17")){
            $(".movie-card-box").hide();
            $(".2017").fadeIn();

        }

        
        

        
    });
    
});

$(function(){
   

    // API Call Area for the first 20 movies

    api_key= "d87792c5e11fef2e1c8d310e05a12498";

    var endPoint = "https://api.themoviedb.org/3/movie/popular?api_key="+ api_key
    var data = $.getJSON(endPoint, function(result){

       

        for(i = 0; i < 25; i++){

         

            var movieName = result.results[i].original_title;
            var moviePoster = result.results[i].poster_path;
            //page one of movies
            var movieRating = result.results[i].vote_average;
            var movieRounded = movieRating*10;  
           
          
            
            
            // Movies of page 0 filter

            if(movieRounded>= 90){
                moviePercen = "100-";

            }else if(movieRounded > 80){
                moviePercen = "90-"
            }else if(movieRounded > 70){
                moviePercen = "80-"
            }else if(movieRounded > 60){
                moviePercen = "70-"
            }else if(movieRounded > 50){
                moviePercen = "60-"
            }else if(movieRounded > 40){
                moviePercen = "50-"
            }else if(movieRounded > 30){
                moviePercen = "40-"
            }else if(movieRounded > 20){
                moviePercen = "30-"
            }else if(movieRounded > 10){
                moviePercen = "20-"
            }else if(movieRounded > 10){
                moviePercen = "10-"
            }


            // Movies of page 0 filter for the IMDB
            $(".movie-poster-box").append("<div class='movie-card-box col-xl-3 col-md-4 col-6  "+moviePercen+"  '><div class='movie-card '><a class='link-text' href='../pages/individual.html'><img class='movie-poster-container' src='https://image.tmdb.org/t/p/w500/"+moviePoster+"'> <div class='movie-poster-cover'><div class='add-to-wishlist-button'><img class='wishlist-icon' src='../img/list.png'></div></div><div class='movie-details'><div class='movie-name'><h2> "+movieName+"</h2></div><div class='rating-holder'><div class='moon-holder-one'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Half moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Empty moon.png'></div></div></div></div>");
            
           

        }

     

    

    });
    $(".btn").on("click", function(){
        
        if($(this).hasClass("all")){
            $(".movie-card-box").fadeIn();

        }else if($(this).hasClass("10-9")){
            $(".movie-card-box").hide();
            $(".100-").fadeIn();

        }else if($(this).hasClass("9-8")){
            $(".movie-card-box").hide();
            $(".90-").fadeIn();

        }else if($(this).hasClass("8-7")){
            $(".movie-card-box").hide();
            $(".80-").fadeIn();

        }else if($(this).hasClass("7-6")){
            $(".movie-card-box").hide();
            $(".70-").fadeIn();

        }else if($(this).hasClass("6-5")){
            $(".movie-card-box").hide();
            $(".60-").fadeIn();

        }else if($(this).hasClass("5-4")){
            $(".movie-card-box").hide();
            $(".50-").fadeIn();

        }else if($(this).hasClass("4-3")){
            $(".movie-card-box").hide();
            $(".40-").fadeIn();

        }else if($(this).hasClass("3-2")){
            $(".movie-card-box").hide();
            $(".30-").fadeIn();

        }else if($(this).hasClass("2-1")){
            $(".movie-card-box").hide();
            $(".20-").fadeIn();

        }else if($(this).hasClass("2-1")){
            $(".movie-card-box").hide();
            $(".10-").fadeIn();

        }

        
        

        
    });
    
});


$(function(){
    

    // API Call Area for the first 20 movies

    api_key= "d87792c5e11fef2e1c8d310e05a12498";

    var endPoint = "https://api.themoviedb.org/3/movie/popular?api_key="+ api_key
    var data = $.getJSON(endPoint, function(result){

        console.log(result);

        for(i = 0; i < 25; i++){

            
        
            var movieName = result.results[i].original_title;
            var moviePoster = result.results[i].poster_path;
            //page one of movies
          
            var x = movieName;
            var letter = x.substring(0, 1)
            
            console.log("let do letters" + " " + letter);
            console.log(letter);
            
            
            // Movies of page 0 filter
        
            if(letter === "A"){
                titleLetter = "a";
                
            }else if(letter === "B"){
                titleLetter = "b"
            }else if(letter === "C"){
                titleLetter = "c"
            }else if(letter === "D"){
                titleLetter = "d"
            }else if(letter === "E"){
                titleLetter = "e"
            }else if(letter === "F"){
                titleLetter = "f"
            }else if(letter=== "G"){
                titleLetter = "g"
            }else if(letter === "H"){
                titleLetter = "h"
                console.log("Yes!!!")
            }else if(letter === "I"){
                titleLetter = "i"
            }else if(letter === "J"){
                titleLetter = "j"
            }else if(letter === "K"){
                titleLetter = "k"
            }else if(letter === "L"){
                titleLetter = "l"
            }else if(letter === "M"){
                titleLetter = "m"
                console.log("Yes!!!")
            }else if(letter === "N"){
                titleLetter = "n"
            }else if(letter === "O"){
                titleLetter = "o"
            }else if(letter === "P"){
                titleLetter = "p"
            }else if(letter === "Q"){
                titleLetter = "q"
            }else if(letter === "R"){
                titleLetter = "r"
            }else if(letter === "S"){
                titleLetter = "s"
            }else if(letter === "T"){
                titleLetter = "t"
            }else if(letter === "U"){
                titleLetter = "u"
            }else if(letter === "V"){
                titleLetter = "v"
            }else if(letter = "W"){
                titleLetter === "w"
            }else if(letter === "X"){
                titleLetter = "x"
            }else if(letter === "Y"){
                titleLetter = "y"
            }else if(letter === "Z"){
                titleLetter = "z"
            }
            
            
            // Movies of page 0 filter for the IMDB
            $(".movie-poster-box").append("<div class='movie-card-box col-xl-3 col-md-4 col-6  "+titleLetter+"  '><div class='movie-card '><a class='link-text' href='../pages/individual.html'><img class='movie-poster-container' src='https://image.tmdb.org/t/p/w500/"+moviePoster+"'> <div class='movie-poster-cover'><div class='add-to-wishlist-button'><img class='wishlist-icon' src='../img/list.png'></div></div><div class='movie-details'><div class='movie-name'><h2> "+movieName+"</h2></div><div class='rating-holder'><div class='moon-holder-one'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Full-moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Half moon.png'></div><div class='moon-holder'><img class='moon-icon' src='../img/Empty moon.png'></div></div></div></div>");
            
           
        
        }

     

    

    });
    $(".btn").on("click", function(){
        
        if($(this).hasClass("lall")){
            $(".movie-card-box").fadeIn();

        }else if($(this).hasClass("la")){
            $(".movie-card-box").hide();
            $(".a").fadeIn();

        }else if($(this).hasClass("lb")){
            $(".movie-card-box").hide();
            $(".b").fadeIn();

        }else if($(this).hasClass("lc")){
            $(".movie-card-box").hide();
            $(".c").fadeIn();

        }else if($(this).hasClass("ld")){
            $(".movie-card-box").hide();
            $(".d").fadeIn();

        }else if($(this).hasClass("le")){
            $(".movie-card-box").hide();
            $(".e").fadeIn();

        }else if($(this).hasClass("lf")){
            $(".movie-card-box").hide();
            $(".f").fadeIn();

        }else if($(this).hasClass("lg")){
            $(".movie-card-box").hide();
            $(".g").fadeIn();

        }else if($(this).hasClass("lh")){
            $(".movie-card-box").hide();
            $(".h").fadeIn();

        }else if($(this).hasClass("li")){
            $(".movie-card-box").hide();
            $(".i").fadeIn();

        }else if($(this).hasClass("lj")){
            $(".movie-card-box").hide();
            $(".j").fadeIn();

        }else if($(this).hasClass("lk")){
            $(".movie-card-box").hide();
            $(".k").fadeIn();

        }else if($(this).hasClass("ll")){
            $(".movie-card-box").hide();
            $(".l").fadeIn();

        }else if($(this).hasClass("lm")){
            $(".movie-card-box").hide();
            $(".m").fadeIn();

        }else if($(this).hasClass("ln")){
            $(".movie-card-box").hide();
            $(".n").fadeIn();

        }else if($(this).hasClass("lo")){
            $(".movie-card-box").hide();
            $(".o").fadeIn();

        }else if($(this).hasClass("lp")){
            $(".movie-card-box").hide();
            $(".p").fadeIn();

        }else if($(this).hasClass("lq")){
            $(".movie-card-box").hide();
            $(".q").fadeIn();

        }else if($(this).hasClass("lr")){
            $(".movie-card-box").hide();
            $(".r").fadeIn();

        }else if($(this).hasClass("ls")){
            $(".movie-card-box").hide();
            $(".s").fadeIn();

        }else if($(this).hasClass("lt")){
            $(".movie-card-box").hide();
            $(".t").fadeIn();

        }else if($(this).hasClass("lu")){
            $(".movie-card-box").hide();
            $(".u").fadeIn();

        }else if($(this).hasClass("lv")){
            $(".movie-card-box").hide();
            $(".v").fadeIn();

        }else if($(this).hasClass("lw")){
            $(".movie-card-box").hide();
            $(".w").fadeIn();

        }else if($(this).hasClass("lx")){
            $(".movie-card-box").hide();
            $(".x").fadeIn();

        }else if($(this).hasClass("ly")){
            $(".movie-card-box").hide();
            $(".y").fadeIn();

        }else if($(this).hasClass("lz")){
            $(".movie-card-box").hide();
            $(".z").fadeIn();

        }

        
        

        
    });
    
});
