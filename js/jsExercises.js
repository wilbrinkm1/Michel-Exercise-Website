/* Hide when saving */


function getPW() {
var userName=document.getElementById("username").value;
if (userName= "mica") {
  document.getElementById("pw").innerHTML = "Your password tonight is " + userName + "0901" + " Patio open between 1 - 3am, see you then " + userName +".";
  document.getElementById("note").innerHTML = "Patio open between 1 - 3am, see you then, " + userName +".";
} else {
  document.getElementById("pw").innerHTML = "Kindly provide your reservation";
}

<script type="text/javascript">
function getPW() {
var uName = document.getElementById("username").value;
if (uName == "mica") {
  document.getElementById("pw").innerHTML = "Your password tonight is " + uName + " 0901";
  document.getElementById("note").innerHTML = "Patio open between 1 - 3am, see you then, " + uName +".";
} else {
  document.getElementById("pw").innerHTML = "Kindly provide your reservation";
}
</script>

 $(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
});




/*	Define and use variables in the DOM */


/*
angular.module('ngReddit', []);

angular.module('ngReddit').controller('myController', function($scope) {
  

});

*/



function inputInfo() {
  var userName=document.getElementById("uname").value;
  var age=document.getElementById("age").value;
  var redditName=document.getElementById("rname").value;
  document.getElementById("answer").innerHTML = "Your name is " + userName + ", you are " + age + " years old, and your username is " + redditName +".";

}











/* Return Absolute Value Function */

/*angular.module('absoluteValue',[]);

angular.module('absoluteValue').controller('absoluteValueCtrl', function($scope) {
    $scope.absolute = function () {    
        $scope.absoluteInput = Math.abs($scope.absoluteInput);
    };                                 
});

*/

var absolute = function () {
  var givenNumber = document.getElementById("absoluteParameter").value;
  document.getElementById("absoluteAnswer").innerHTML="The absolute value of " + (givenNumber) + " is " + Math.abs(givenNumber);
}













/* Return a Range */

/*angular.module('returnRange',[]);

angular.module('returnRange').controller('returnRangeCtrl', function($scope) {
  $scope.range = function () {
    for (var count = 0; count <= goal; count++) {
      document.getElementById("answer").innerHTML = "The numbers within the range are:";  
      console.log(count);
      var e = $("<li>" + {{count}} + "</li>");
      $("#rangeList").append(e);
    }
  };
});




*/


var range = function () {
  var goal = document.getElementById("goal").value; 
  for (var count = 0; count <= goal; count++) {
    document.getElementById("answer").innerHTML = "The numbers within the range are:";  
    console.log(count);
    $(document).ready(function(){
      var e = $("<li>" + (count) + "</li>");
      $("#rangeList").append(e);
    });
  }
}



/* Let's Sing a Song...! */

var countWallSong = 99;

function singSong() {
  var countLess = countWallSong - 1;
  document.getElementById("songLyrics").innerHTML = countWallSong + " bottles off beer on the wall" + countWallSong + " bottles of beer! You take one down, pass it to Dan," + countLess + " bottles of beer on the wall.";
  countWallSong = countWallSong - 1;
  t = setTimeout(function(){singSong()},5000);
}

function stopSong() {
  clearTimeout(t);
}









							/*		THROWN OUT JS/PREVIOUS TRIES	 */



/* 

------------------------------------------------------------------------------------------------------------------------------


This is the js for the password() function that would have been called with an onload in the body tag.


function password() {
  alert("You will have to enter your name and password (pw: letMeIn) before this page loads");
}

$(document).ready(function(){
  $("#nextStage").click(function(){
    var passwordVar = document.getElementById("passwordInput").value;
    $(document).ready(function(){
      console.log("passwordVar");
      var pwCheck = "letMein";
      $(document).ready(function(){
        if (passwordVar === pwCheck) {
          $("div").removeClass("hidden");  
          $("#passwordSection").addClass("hidden");
        } else {
            alert("You will have to enter your name and password (pw: letMeIn) before this page loads");     
        }
      }
      }
    });
  });
});


------------------------------------------------------------------------------------------------------------------------------






------------------------------------------------------------------------------------------------------------------------------






------------------------------------------------------------------------------------------------------------------------------






------------------------------------------------------------------------------------------------------------------------------






------------------------------------------------------------------------------------------------------------------------------





*/
