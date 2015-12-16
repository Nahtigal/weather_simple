$(function(){
  $.getJSON('http://api.openweathermap.org/data/2.5/'+
                    'forecast/daily?q=Kiev&units=metric&cnt=3&lang=ua&appid=d97e90c822543d704b84ea0fc0900327', 
      function (data){
      $('#tToday').html(data.list[0].temp.day);
      $('#tTomorrow').html(data.list[1].temp.day);
      $('#tAfterTomorrow').html(data.list[2].temp.day);
      
      $('#pToday').html(data.list[0].pressure);
      $('#pTomorrow').html(data.list[1].pressure);
      $('#pAfterTomorrow').html(data.list[2].pressure);
      
      
      
      $('#iconToday').html('<img src="images/'+ data.list[0].weather[0].icon+ '.png" alt="Weather icon">');
      $('#iconTomorrow').html('<img src="images/'+ data.list[1].weather[0].icon+ '.png" alt="Weather icon">');
      $('#iconAfterTomorrow').html('<img src="images/'+ data.list[2].weather[0].icon+ '.png" alt="Weather icon">');
      
      $('#TextToday').html(data.list[0].weather[0].description);
      $('#TextTomorrow').html(data.list[1].weather[0].description);
      $('#TextAfterTomorrow').html(data.list[2].weather[0].description);
      
      
      $('#Place').html(data.city.name+' '+ data.city.coord.lat+'  '+data.city.coord.lon);
      $('title').html("Погода в" + data.city.name);
      }
  ); 
  
    
});