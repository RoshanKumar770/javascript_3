var flag = 1;
    var a = document.querySelector("#btn2");
    var b = document.querySelector("h3");
    var c = document.querySelector("#btn1");
    a.addEventListener("click", function () {
      if (flag == 1) {
        a.style.backgroundColor = "rgb(117, 229, 100)";
        b.innerHTML = "Friends";
        b.style.color = "rgb(46, 152, 73)";
        a.innerHTML = "Added";
        c.style.backgroundColor = "rgb(206, 201, 201)";
        flag = 0;
      }
      else {
        a.style.backgroundColor = "rgb(206, 201, 201)";
        b.innerHTML = "Stranger";
        b.style.color = "red";
        a.innerHTML = "Add Friend";
        flag = 1;
      }
    });
    c.addEventListener("click", function () {
      if (flag == 1) {
        a.style.backgroundColor = "rgb(117, 229, 100)";
        b.innerHTML = "Friends";
        b.style.color = "rgb(46, 152, 73)";
        a.innerHTML = "Added";
        flag = 0;
      }
      else {
        c.style.backgroundColor = "red";
        b.innerHTML = "Stranger";
        b.style.color = "red";
        c.style.color = "black";
        a.innerHTML = "Add Friend";
        c.innerHTML = "Removed";
        flag = 1;
      }
    })
    var flag = 1;
    var e = document.querySelector("#btn4");
    var f = document.querySelector(".h3");
    var g = document.querySelector("#btn3");
    e.addEventListener("click", function () {
      if (flag == 1) {
        e.style.backgroundColor = "rgb(117, 229, 100)";
        f.innerHTML = "Friends";
        f.style.color = "rgb(46, 152, 73)";
        e.innerHTML = "Added";
        g.style.backgroundColor = "rgb(206, 201, 201)";
        flag = 0;
      }
      else {
        e.style.backgroundColor = "rgb(206, 201, 201)";
        f.innerHTML = "Stranger";
        f.style.color = "red";
        e.innerHTML = "Add Friend";
        flag = 1;
      }
    });
    g.addEventListener("click", function () {
      if (flag == 1) {
        e.style.backgroundColor = "rgb(117, 229, 100)";
        f.innerHTML = "Friends";
        f.style.color = "rgb(46, 152, 73)";
        e.innerHTML = "Added";
        flag = 0;
      }
      else {
        g.style.backgroundColor = "red";
        f.innerHTML = "Stranger";
        f.style.color = "red";
        g.style.color = "black";
        e.innerHTML = "Add Friend";
        g.innerHTML = "Removed";
        flag = 1;
      }
    })