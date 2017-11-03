
$(document).ready(function(){

$('#getQuote').click(function(){
  $.ajax({
 url:'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',
    jsonp: 'jsonp',
    dataType: 'jsonp',
    success: function getQuote (data) {
  
			document.getElementById("quote").innerHTML = data.quoteText;
      var x = "-";
      var author =data.quoteAuthor;
      if(!author) {
        author = "Unknown";
        document.getElementById("author").innerHTML = x+author;
      } else
        //document.innerHTML("Unknown");
      
       document.getElementById("author").innerHTML = x+author;
		}
  })
});

});		