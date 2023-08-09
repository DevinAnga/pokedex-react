function toggleMenu() {
  const myLinks = document.getElementById("myLinks");
  const navOverlay = document.getElementsByClassName("navigation-overlay")[0];
  const body = document.getElementById("body");

  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
    navOverlay.classList.add("hidden");
    body.classList.remove("navOpened");
  } else {
    myLinks.style.display = "block";
    navOverlay.classList.remove("hidden");
    body.classList.add("navOpened");
  }
}
