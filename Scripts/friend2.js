var flag = 0;
    var a = document.querySelector("#btn2");
    var b = document.querySelector("h3");
    a.addEventListener("click", function () {
      if (flag == 0) {
        console.log("click");
        b.innerHTML = "Friends";
        b.style.color = "rgb(37, 200, 82)";
        a.innerHTML = "Remove Friend";
        flag = 1;
      }
      else {
        b.innerHTML = "Stranger";
        b.style.color = "red";
        a.innerHTML = "Add Friend";
        flag = 0;
      }
    });