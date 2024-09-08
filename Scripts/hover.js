var elements = document.querySelectorAll(".elem h1");
    elements.forEach(function (h1) { // for each loop for multiple function
      var img = h1.querySelector("img");
      h1.addEventListener("mousemove", function () {
        img.style.opacity = "1";
        h1.style.color = "rgb(187, 15, 245)";
        img.style.transform = "scale(1)";

        setTimeout(function () {
          img.style.color = "rgb(187, 15, 245)";
        }, 1000);
      });
      h1.addEventListener("mouseleave", function () {
        img.style.opacity = "0";
        h1.style.color = "white";
      });
    });