function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("search-header");
  var z = document.getElementById("main");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  }
}
