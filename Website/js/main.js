var par = document.getElementById("par")
function myFunction() {
    var x = document.getElementById("second-p");
    if (x.style.display === "none") {
      x.style.display = "block";
      par.classList.add("par")
    } else {
      par.classList.remove("par")
      x.style.display = "none";
    }
  }


var par1 = document.getElementById("par1")
function myFunction1() {
    var x = document.getElementById("second-p1");
    if (x.style.display === "none") {
      x.style.display = "block";
      par1.classList.add("par1")
    } else {
      par1.classList.remove("par1")
      x.style.display = "none";
    }
  }


var par2 = document.getElementById("par2")
function myFunction2() {
    var x = document.getElementById("second-p2");
    if (x.style.display === "none") {
      x.style.display = "block";
      par2.classList.add("par2")
    } else {
      par2.classList.remove("par2")
      x.style.display = "none";
    }
  }

  

  function myfunction(y) {
    y.classList.toggle("change");
    var x = document.getElementById("ul");
    if (x.style.display === "block") {
      x.style.display = "none";

    } else {

      x.style.display = "block";
    }
  }