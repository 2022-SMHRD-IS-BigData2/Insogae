$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Wanju&appid=0a2582f0c723eb6d18812adb54336260&units=metric',
            function(result){
//alert(result.main.temp)
$('.weathertext1').append(result.main.temp)
//$('.lowtemp').append(result.main.temp_min)
//$('.highttemp').append(result.main.temp_max)

$('.wt_icon1').html("<i class='wt_icon _"+result.weather[0].icon+"'><span class='blind'>맑음</span></i>");
});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Jeonju&appid=0a2582f0c723eb6d18812adb54336260&units=metric',
            function(result){
//alert(result.main.temp)
$('.weathertext2').append(result.main.temp)
//$('.lowtemp').append(result.main.temp_min)
//$('.highttemp').append(result.main.temp_max)

$('.wt_icon2').html("<i class='wt_icon _"+result.weather[0].icon+"'><span class='blind'>맑음</span></i>");
});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Mokpo&appid=0a2582f0c723eb6d18812adb54336260&units=metric',
            function(result){
//alert(result.main.temp)
$('.weathertext3').append(result.main.temp)
//$('.lowtemp').append(result.main.temp_min)
//$('.highttemp').append(result.main.temp_max)

$('.wt_icon3').html("<i class='wt_icon _"+result.weather[0].icon+"'><span class='blind'>맑음</span></i>");
});