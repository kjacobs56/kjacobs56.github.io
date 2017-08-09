function myFunction() {
var  greeting;
var time = new Date().getHours();
if (time < 10)
{
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";}
    document.getElementById("demo").innerHTML = greeting;
  }
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({left: '250px'});
//     });
// });
// $(document).ready(function(){
//     $("button").click(function(){
//         $("#flex-item1").fadeIn();
//         $("#flex-item2").fadeIn("slow");
//         $("#flex-item3").fadeIn(3000);
//     });
// });
