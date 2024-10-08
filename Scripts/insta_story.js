
var arr = [
  {
    dp: "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    , story: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    dp: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    , story: "https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    dp: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    , story: "https://images.pexels.com/photos/2086622/pexels-photo-2086622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    dp: "https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    , story: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg "
  },
  {
    dp: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    , story: " https://images.pexels.com/photos/1755743/pexels-photo-1755743.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
  },
  {
    dp: "https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    , story: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
]
var storiyan = document.querySelector("#story-container");
var clutter = " ";
arr.forEach(function (elem, idx) {
  clutter += `
  <div class="story">
    <img id="${idx}" src="${elem.dp}">
  </div>`;
});

storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function (dets) {

  // console.log(arr[dets.target.id].story); golden key
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style
    .backgroundImage = `url(${arr[dets.target.id].story})`
});

setTimeout(function () {
  document.querySelector("#full-screen").style.display = "none";
}, 3000);