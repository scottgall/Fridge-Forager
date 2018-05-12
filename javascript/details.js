$(function() {
    
    var database = firebase.database();

    var id = "";

    database.ref('recipe').once("value", function(snapshot) {
        var recipeId = localStorage.getItem("recipe");
        console.log(recipeId)
        displayRecipe(recipeId);
    });

    function displayRecipe(x) {

        var queryURL = "https://api.yummly.com/v1/api/recipe/" + x + "?_app_id=32912019&_app_key=210449776997cc0adaf6fb150addc070";

        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
            console.log(response)
            
            var imageDiv = $("<div>");
            var nameDiv = $("<div>");
            var ingredientsDiv = $("<div>");
            var recipeDiv = $("<div>");
            
            var name = $("<h2>").text(response.name);
            var image = $("<img>").attr("src", response.images["0"].hostedLargeUrl);
            var ingredients = $("<h4>").text(response.ingredientLines);
            var recipe = $("<a>").text("Full recipe").addClass("link").attr("link", response.attribution.url);

            nameDiv.append(name);
            $(".name").append(nameDiv);
            imageDiv.append(image);
            $(".image").append(imageDiv);
            recipeDiv.append(recipe);
            $(".recipe").append(recipeDiv);

            var ingredients = $("<div>");
            // var recipe = $("<button>").text("Full recipe").addClass("link").attr("link", response.attribution.url);
            id = response.id;
            var ingredientString = response.ingredientLines;
            console.log(ingredientString);
        
        for(var i = 0; i < response.ingredientLines.length; i++) {
            var ingredient = $("<h5>").text("- " + response.ingredientLines[i]);
            ingredients.append(ingredient); 
        }

        ingredientsDiv.append(ingredients);
        $(".ingredients").append(ingredientsDiv);

        var timeHeader = $("<h4>").text("Time");
        var time = $("<h5>").text(response.totalTime);
        var courseHeader = $("<h4>").text("Course");
        var course = $("<h5>").text(response.attributes.course["0"]);
        var servingsHeader = $("<h4>").text("Servings");
        var servings = $("<h5>").text(response.numberOfServings);
        var ratingHeader = $("<h4>").text("Rating");

        $(".additional-info").append(timeHeader , time, courseHeader, course, servingsHeader, servings, ratingHeader, rating);
        for (var i = 1; i < 6; i++){
            var rating = $("<i>").addClass("material-icons " + i).text("star_border").attr("num", i);
            $(".additional-info").append(rating);
        }
        for (var i = 1; i < response.rating + 1; i++) {
            $("." + i).text("star");
        }
        });
    }

    $(document.body).on("click", ".link", function() {

        var link = $(this).attr("link");
        console.log(link)
    
        window.location = link;
    
    });
    console.log(id)
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
  });