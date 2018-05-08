$(function() {

    // Initialize Firebase
    var config = { 
    apiKey: "AIzaSyCYkK09jL1mtsfaVCCM-p1QI9CVHx89tNo",
    authDomain: "fridgeforager-40b0c.firebaseapp.com",
    databaseURL: "https://fridgeforager-40b0c.firebaseio.com",
    projectId: "fridgeforager-40b0c",
    storageBucket: "fridgeforager-40b0c.appspot.com",
    messagingSenderId: "709178750655"
    };
    firebase.initializeApp(config);
    
    var database = firebase.database();
    
    var gifArr = [];
    var offset = 0;
    var current = "";
    var searchParam = "";
    
    
    function displayGif(search) {
    
        $("#addMore").remove();
        console.log(searchParam)
        var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=32912019&_app_key=210449776997cc0adaf6fb150addc070" + search;
    
        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
            console.log(response)
            var results = response.matches;
    
            for (var i = 0; i < results.length; i++) {
                
                var gifDiv = $("<div>");
                gifDiv.attr("id", "img" + (offset + i));
                gifDiv.attr("getId", results[i].id)
                console.log(results[i].id)
                gifDiv.addClass("d-inline-block gifDiv");
                var image = $("<img>");
                image.attr("src", results[i].imageUrlsBySize[90]);
                // image.attr("still", results[i].images.fixed_height_still.url);
                // image.attr("animate", results[i].images.fixed_height.url);
                // image.attr("state", "still");
                image.addClass("img img-fluid");
    
                // var rating = results[i].rating;
                // var br = $("<br>");
                var row = $("<div>").addClass("row justify-content-between gifRow");
                var rate = $("<div>").text(results[i].recipeName);
                var fav = $("<button>").html("<i class='material-icons'>favorite</i>");
                fav.addClass("fav").val(offset + i);
                row.append(rate);
                row.append(fav);
    
                gifDiv.append(image);
                // gifDiv.append(br);
                gifDiv.append(row);
    
                $("#gifSection").prepend(gifDiv);
    
                offset += 10;
            }
            $(".header1").empty();
            $(".header1").append($("<button>").text("add more").attr("id", "addMore"));
        });
    } 
    
    $(document.body).on("click", ".gifDiv", function() {

        window.location = 'details.html';

    
        var recipeId = $(this).attr("getId");
        database.ref().child("/recipes/" + recipeId).set({
            recipe: recipeId
        });
        database.ref("/recipes/" + recipeId).onDisconnect().remove();

    
    
        // var state = $(this).attr("state");
        // console.log(state);
    
        // if (state === "still") {
        //     var animateUrl = $(this).attr("animate");
        //     $(this).attr("src", animateUrl);
        //     $(this).attr("state", "animate");
        // } else if (state === "animate") {
        //     var stillUrl = $(this).attr("still");
        //     $(this).attr("src", stillUrl);
        //     $(this).attr("state", "still");
        // }
        // window.location = 'details.html';
    
    
    });
    
    $(document.body).on("click", ".fav", function() {
        var i = $(this).val();
        $("#img" + i).clone().appendTo("#favSection").children('img').addClass('img-fluid');
    });
        
    function renderButtons() {
    
        $("#buttonSection").empty();
    
        var b = $("<button>");
        b.addClass("search-recipes");
        b.text("search recipes");
        $("#buttonSection").append(b);
        var c = $("<br>");
        $("#buttonSection").append(c);
    
        for (var i = 0; i < gifArr.length; i++) {
            var a = $("<div>");
            // a.addClass("gif");
            a.attr("data", gifArr[i]);
            a.html(gifArr[i] + " <span class='x'>X</span>");
            $("#buttonSection").append(a);
            console.log(gifArr)
          
        }
    }
    
    $("#add-ingredient").on("click", function(event) {
        event.preventDefault();
        var button = $("#button-input").val().trim();
        $("#button-input").val('');
        if (button != '') {
            gifArr.push(button);
            renderButtons();
        }
    });
    
    $(document).on("click", ".search-recipes", function() {
        console.log(gifArr)
        $("#gifSection").empty();
        offset = 0;
        for (var i = 0; i < gifArr.length; i++) {
            searchParam += "&allowedIngredient[]=" + gifArr[i];
        }
        displayGif(searchParam);
    });
    
    $(document).on("click", "#addMore", function() {
        displayGif(searchParam);
    });

    $(document).on("click", ".x", function() {
        var data = ($(this).closest("div").attr("data"))
        console.log(data)
        for (var i = 0; i < gifArr.length; i++) {
            if (data === gifArr[i]) {
                gifArr.splice(i, 1);
            }
        }
        // for (var i = 0; i < gifArr.length; i++) {
        //     if (data === gifArr[i]) {
        //         gifArr.splice(gifArr[i], 1);
        //     }
        // }
        $(this).parent().remove();
        console.log(gifArr)
    });
    
    console.log('hi')
    // renderButtons();

    //DETAILS PAGE
    
    
    });