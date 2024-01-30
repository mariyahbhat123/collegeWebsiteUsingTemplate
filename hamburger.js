function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "center") {
      x.className += " responsive";
    } else {
      x.className = "center";
    }
  }