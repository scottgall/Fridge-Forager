  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });
  
  // $(document).ready(function() {
  //   $('input#input_text, textarea#textarea2').characterCounter();
  // });
     