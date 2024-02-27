var greet;
var username = 'User' //prompt("What is your name")

var myDate = new Date();
var hrs = myDate.getHours();

if (hrs < 12)
      greet = 'Good Morning';
else if (hrs >= 12 && hrs < 18)
    greet = 'Good Afternoon';
else if(hrs >=18)
    greet = 'Good Evening';
    
  
document.getElementById('Greetings').innerHTML =
    '<b>' + greet + ', ' + username + '! </b>';