// Clicking a food picture should make the recipe show
var food_times = [20, 25, 30, 120, 50, 10];

for (var i = 1; i <= 6; i++) { 
    $("[id^='timer']").attr("data-time", food_times[i-1]);
    var width = (food_times[i - 1] * 2).toString() + "px";
    var $aot = $("#AoT" + i);
    var identity = i;
    $aot.css("width", width);
    $aot.text(food_times[i-1] + "min" );
}

$("[id^='close']").click(function() {
    var no = $(this).attr('id').replace('close',''); 
    $("#recipe" + no).hide();
});
$("[id^='food']").click(function() {
    var no = $(this).attr('id').replace('food','');    
    $("[id^='recipe']").hide();
    $("#recipe" + no).show();
    
});


var count=0;
var counter;
function timer()
{
  count=count+1;
    
    var total = $("#timer" + timerno).attr("data-time");
    
  if (count >= parseFloat(total) * 1000)
  {
     clearInterval(counter);
     //counter ended, do something here
      $("#timer" + timerno).text("DONE ")
     return;
  }

  //Do code for showing the number of seconds here

    text = Math.floor(count/60) + ":" + (count % 60);    
    
$("#timer" + timerno).text("Time Passed " + text)
}
$("[id^='timer']").click(function() {
    clearInterval(counter);
  timerno = $(this).attr('id').replace('timer','');
 counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    });
