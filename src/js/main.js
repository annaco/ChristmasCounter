$(document).ready(function() {
  
     setInterval(function() {counter()}, 1000);
   
});


function counter() {
  
    var christmas_date = new Date('Mon Dec 24 2018 00:00:01 GMT +0100 (W. Europe Standard Time)');

    var christmas = christmas_date.getTime();
    var now = (new Date).getTime();
    var time_left = christmas - now;

    //Uträkning av tid
    var seconds = time_left/1000;
    var minutes = seconds/60;
    var hours = minutes/60;

    //Antal dagar kavr
    var days = Math.floor(hours/24);

    //Antal timmar kavr
    var hours_left =  hours - (days*24);
    var hoursToChrismas =Math.floor(hours_left); 

    //Antal minuter kvar
    var minutes_left = (hours_left-hoursToChrismas)*60;
    var minutesToChristmas = Math.floor(minutes_left);

    //Antal sekunder kvar
    var seconds_left = (minutes_left -  minutesToChristmas)*60;
    var secondsToChristmas = Math.floor(seconds_left);

   
    printout(days, hoursToChrismas, minutesToChristmas, secondsToChristmas);
}




function printout(days, hoursToChristmas, minutesToChristmas, secondsToChristmas) {
    $('.days').text(days);
    $('.hours').text(hoursToChristmas);
    $('.minutes').text(minutesToChristmas);
    $('.seconds').text(secondsToChristmas);
}