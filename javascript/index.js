  $(document).ready(function(){
    
  $('.fixed-action-btn').floatingActionButton();

  var gifArr = [];
  var offset = 0;
  var current = "";
  
  
  function displayGif(search) {
  
      $("#addMore").remove();
  
      var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=32912019&_app_key=210449776997cc0adaf6fb150addc070&allowedIngredient[]=" + search;
  
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
              gifDiv.addClass("d-inline-block gifDiv");
              var image = $("<img>");
              image.attr("src", results[i].imageUrlsBySize[90]);
              // image.attr("still", results[i].images.fixed_height_still.url);
              // image.attr("animate", results[i].images.fixed_height.url);
              // image.attr("state", "still");
              image.addClass("img img-fluid");
  
              // var rating = results[i].rating;
              var br = $("<br>");
              // var row = $("<div>").addClass("row justify-content-between gifRow");
              // var rate = $("<div>").text("Rating: " + rating);
              var fav = $("<button>").html("<i class='material-icons'>favorite</i>");
              fav.addClass("fav").val(offset + i);
              // row.append(rate);
              // row.append(fav);
  
              gifDiv.append(image);
              gifDiv.append(br);
              gifDiv.append(fav);
  
              $("#gifSection").prepend(gifDiv);
  
              offset += 10;
          }
          $(".header1").empty();
          $(".header1").append($("<button>").text("add more").attr("id", "addMore"));
      });
  } 
  
  // $(document.body).on("click", ".img", function() {
  
  //     var state = $(this).attr("state");
  //     console.log(state);
  
  //     if (state === "still") {
  //         var animateUrl = $(this).attr("animate");
  //         $(this).attr("src", animateUrl);
  //         $(this).attr("state", "animate");
  //     } else if (state === "animate") {
  //         var stillUrl = $(this).attr("still");
  //         $(this).attr("src", stillUrl);
  //         $(this).attr("state", "still");
  //     }
  // });
  
  $(document.body).on("click", ".fav", function() {
      var i = $(this).val();
      $("#img" + i).clone().appendTo("#favSection").children('img').addClass('img-fluid');
  });
      
  function renderButtons() {
  
      $("#buttonSection").empty();
  
      for (var i = 0; i < gifArr.length; i++) {
          var a = $("<button>");
          a.addClass("gif");
          a.attr("data", gifArr[i]);
          a.text(gifArr[i]);
          $("#buttonSection").append(a);
      }
  }
  
  $("#add-button").on("click", function(event) {
      event.preventDefault();
      var button = $("#button-input").val().trim();
      $("#button-input").val('');
      if (button != '') {
          gifArr.push(button);
          renderButtons();
      }
  });
  
  $(document).on("click", ".gif", function() {
      $("#gifSection").empty();
      offset = 0;
      displayGif($(this).attr("data"));
      current = $(this).attr("data");
  });
  
  $(document).on("click", "#addMore", function() {
      displayGif(current);
  });
  
  renderButtons();

  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });
  

  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
     
