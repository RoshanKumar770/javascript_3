var flag = 1;
    var button = document.querySelector("button");
    var bulb = document.querySelector(".bulb");

    button.addEventListener("click", function () {
      if (flag == 0) {
        button.innerHTML = "OFF";
        bulb.style.backgroundColor = "transparent";
        flag = 1;
      } else {
        button.innerHTML = "ON";
        bulb.style.backgroundColor = "yellow";
        flag = 0;
      }
    });