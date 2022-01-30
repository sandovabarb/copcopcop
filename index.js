var countDownDate = new Date("Feb 4, 2022, 11:30:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000*60*60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) /1000);

  document.getElementById("countdown").innerHTML = days + " d " + hours + " h " + minutes + " min " + seconds + " secs";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "We are here!";

  }
}, 1000);
