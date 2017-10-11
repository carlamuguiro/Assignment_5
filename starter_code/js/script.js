$(document).ready(function(){
// Handler for .ready() called.
  $("#submit-btn").click(function(){
  //listen for form submit
  	event.preventDefault();
  	var city = $('#city-type').val();
  	// listen if user has typed anything in
  	if (city === 'New York City' || city === 'NYC' || city === 'New York')
  		$("body").attr('class','nyc');
  	else if (city === 'San Franciso' || city === 'SF' || city === 'Bay Area')
  		$("body").attr('class','sf');
    else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX')
    	$("body").attr('class','la');
    if (city === 'Austin' || city === 'ATX')
    	$("body").attr('class','austin');
    if (city === 'Sydney' || city === 'SYD'){
    	$("body").attr('class','sydney');
    }

    });

});

//type in keywords or tag
//click to store info
//store user-submitted info in variables
//if variable is equal to city go to step below
   // "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
   // "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
   // "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
   // "Austin" or "ATX" make the background of the page austin.jpg
   // "Sydney" or "SYD" make the background of the page sydney.jpg
//if variable is not equal to city reload page?
//update background image
//to reflect user input
//specify order in which app runs using control flow
