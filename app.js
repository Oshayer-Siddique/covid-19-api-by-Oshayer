//const select = document.getElementById("selectCountry");
//var countryName = select.options[select.selectedIndex].value;
/*var countryName = "Norway"

  $.getJSON("https://coronavirus-19-api.herokuapp.com/countries/" + countryName,function(data){
    console.log(data);
  var cases = (data.cases);
  console.log(cases);
  $('.cases').append(cases);
  var deaths = (data.deaths);
  $('.deaths').append(deaths);
  
 
 
    
  })*/

const btn = document.getElementById("updateCountryInput");

btn.addEventListener("click",updateCountryInput);

function updateCountryInput(){
  countryName = document.getElementById("selectCountryText").value;

  $.getJSON("https://coronavirus-19-api.herokuapp.com/countries/" + countryName,function(data){
  console.log(data);  
  var cases =  (data.cases);
  $('.cases').append(cases);
  var deaths = (data.deaths);
  $('.deaths').append(deaths);
  var critical = (data.critical);
  $('.critical').append(critical);
  var recovered = (data.recovered);
  $('.recovered').append(recovered);

  
  



  })
}

