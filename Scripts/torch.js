var flag = 1;

    var bulb = document.querySelector(".bulb");
    var button = document.querySelector("button");

    button.addEventListener("click", function () {
      if (flag == 1) {
        bulb.style.backgroundColor = "grey";
        button.innerHTML = "ON";
        button.style.backgroundColor = " rgb(37, 237, 64)";
        button.style.color = "black";
        flag = 0;
      }
      else {
        bulb.style.backgroundColor = "Yellow";
        button.innerHTML = "OFF";
        button.style.backgroundColor = "red";
        button.style.color = "white";
        flag = 1;
      }
    });