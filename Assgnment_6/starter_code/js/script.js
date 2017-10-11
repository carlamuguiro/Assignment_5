// create cities array
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
$(document).ready(function(){
 
 //cities.forEach(function(city){
 //console.log(city);
 //})

  for(var i = 0; i < cities.length; i++) {
   // loop through cities array with `for` or `forEach` loop
   $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
  // at each iteration of loop, create + append `option` element


  $("#city-type").change(function(){
  //listen for `.change` on `select` element

  	// 'select' element
  	var city = $('#city-type').val();
    if (city == 'NYC')
  		$("body").attr('class','nyc');
  	else if (city == 'SF')
  		$("body").attr('class','sf');
    else if (city == 'LA')
    	$("body").attr('class','la');
    else if (city == 'ATX')
    	$("body").attr('class','austin');
    else if (city == 'SYD'){
    	$("body").attr('class','sydney');
    }

  });

});
