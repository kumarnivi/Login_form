
  function myfunc(){


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var zipCode= document.getElementById("Zipcode").value;
    var phoneNumber =document.getElementById("Phone number").value;
    
    
    
    
    if (/^[a-zA-Z]{2,23}/.test(name)) {
        document.getElementById("none").innerHTML = " "
    } else {
        document.getElementById("none").innerHTML = "charecter should be 2 to 23";
      
    }
    
    
    if (/[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim.test(email)) {
        document.getElementById("none1").innerHTML = " "
    } else {
        document.getElementById("none1").innerHTML = "invalid email";
    
    }
    if (/^[10000-90000]/.test(zipCode)) {
        document.getElementById("none2").innerHTML = " "
    } else {
        document.getElementById("none2").innerHTML = "invalid Zipcode";
    
    }
    
    if (/^\d{10}$/.test(phoneNumber)) {
        document.getElementById("none3").innerHTML = " "
    } else {
        document.getElementById("none3").innerHTML = "phone number should be 10.";
        return false;
    }
    
    
    };
    

    function myFunction() {
      var txt;
      if (confirm("Press a button!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
      document.getElementById("demo").innerHTML = txt;
    };

// Get the button start
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Get the button start