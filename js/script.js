const mediaQuery = window.matchMedia("(min-width: 700px)");

if (mediaQuery.matches) {
  document.addEventListener("scroll", function () {
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    var rotationDegree = scrollPosition * 0.1;
    if (rotationDegree == 0) {
      document.getElementById("rotateImage").style.transform =
        "translateX(-200px)";
    } else {
      document.getElementById("rotateImage").style.transform =
        "translateX(" + rotationDegree + "px)";
    }
  });

  document.addEventListener("scroll", function () {
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    var rotationDegree = scrollPosition * 0.1;
    if (rotationDegree == 0) {
      document.getElementById("token").style.transform = "translateX(0)";
    } else {
      document.getElementById("token").style.transform =
        "translateX(" + (rotationDegree - 100) + "px)";
    }
  });
}


