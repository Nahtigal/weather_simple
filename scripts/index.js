$(function(){
  
  /* 
  //$.getJSON('http://api.openweathermap.org/data/2.5/'+
    //                'forecast/daily?q=Kiev&units=metric&cnt=3&lang=ua&appid=d97e90c822543d704b84ea0fc0900327', 
     $.getJSON('http://api.openweathermap.org/data/2.5/find?lat=' + $('#lat').val() + '&lon='+ $('#long').val() + '&cnt=10'+
            '&lang=ru&units=metric&appid=d97e90c822543d704b84ea0fc0900327',
      function (data){
      /*$('#tToday').html(data.list[0].temp.day);
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
      
      $('#tToday').html(data.list[0].name);
      $('#tTomorrow').html(data.list[1].name);
      $('#tAfterTomorrow').html(data.list[2].name);
        });
  */
$('#btnGetWeather').click(function() {
do_something("text","text1","text2");
});
  
  function getWeather(lat,long){
        $.getJSON('http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon='+ long + '&cnt=10'+
            '&lang=ru&units=metric&appid=d97e90c822543d704b84ea0fc0900327',
      function (data){
      $('#tToday').html(data.list[0].name);
      $('#tTomorrow').html(data.list[1].name);
      $('#tAfterTomorrow').html(data.list[2].name);
        });
    
  }
  
  function do_something(a,b,c){
    $('#tToday').html(a);
      $('#tTomorrow').html(b);
      $('#tAfterTomorrow').html(c);
  }
});