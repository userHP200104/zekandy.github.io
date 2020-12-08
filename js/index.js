$(function(){

    console.log("IT'S ALLLLIVE");

    $(".sign-in-button").on("click", function(){

        var username = $("input:text").val()
        $(".sign-in-url").attr("href", 'pages/landing.html?username=' + username);
        console.log(username);

    });

    $(".sign-up-button").on("submit", function(){

        var username = $("input:text").val()
        $(".sign-up-url").attr("href", 'pages/landing.html?username=' + username);
        console.log(username);

    });

    var queryString = window.location.search;
    var userParms = new URLSearchParams(queryString);
    var username = userParms.get('username');

    console.log(username)

    $(".profile").text(username);




    // var queryString = window.location.search;
    // var signInParms = new URLSearchParams(queryString);
    // var username = signInParms.get('username');

    // var text = $('#DynamicValueAssignedHere').find('input[name="FirstName"]').val();

});