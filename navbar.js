function expansion() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " expanded";
    } else {
      x.className = "navbar";
    }
  }