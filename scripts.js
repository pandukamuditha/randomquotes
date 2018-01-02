var quote;
var author;
var colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5',
  '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722', '#9E9E9E', '#607D8B'
];


function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}


function getQuote() {
  var request = $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com",
    method: "POST",
    accepts: "application/json",
    dataType: "json",
    data: {
      cat: 'famous',
      count: '1'
    },
    headers: {
      'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V'
    },
    success: function(data) {
      quote = data.quote;
      author = data.author;
      $("#quote").animate({
          opacity: 0
        },
        500,
        function() {
          $(this).animate({
              opacity: 1
            },
            500
          );
          $("#quote").html(quote);
        }
      );

      $("#author").animate({
          opacity: 0
        },
        500,
        function() {
          $(this).animate({
              opacity: 1
            },
            500
          );
          $("#author").html(author);
        }
      );

      $(".card").animate({
          opacity: 0
        },
        500,
        function() {
          $(this).animate({
              opacity: 1
            },
            500
          );
        }
      );

      var color = randomColor();
      $("body").animate({
        backgroundColor: color
      }, 1000);
    }
  });
}


$(document).ready(function() {
  getQuote();
  $("#btn").click(function() {
    getQuote();
  });
});
