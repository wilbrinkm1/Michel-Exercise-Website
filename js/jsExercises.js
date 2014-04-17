



/*	Define and use variables in the DOM  */

function inputInfo() {
  var userName=document.getElementById("uname").value;
  var age=document.getElementById("age").value;
  var redditName=document.getElementById("rname").value;
  document.getElementById("answer").innerHTML = "Your name is " + userName + ", you are " + age + " years old, and your username is " + redditName +".";

}



/* Return Absolute Value Function */

var absolute = function () {
  var givenNumber = document.getElementById("absoluteParameter").value;
  document.getElementById("absoluteAnswer").innerHTML="The absolute value of " + (givenNumber) + " is " + Math.abs(givenNumber);
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
