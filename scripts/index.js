$(function(){
  $.getJSON('http://api.openweathermap.org/data/2.5/'+
                    'forecast/daily?q=Lima&units=metric&cnt=3&appid=d97e90c822543d704b84ea0fc0900327', 
      function (data){
      $('#tToday').html(data.list[0].temp.day);
      $('#tTomorrow').html(data.list[1].temp.day);
      $('#tAfterTomorrow').html(data.list[2].temp.day);
      }
  ); 
  
    
});