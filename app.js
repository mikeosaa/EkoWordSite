function showImage(element) {
  var imageSrc = element.src;
  var overlay = document.getElementById("overlay");
  var img = document.createElement("img");

  img.src = imageSrc;
  overlay.appendChild(img);
  overlay.classList.add("show");

  overlay.onclick = function() {
    overlay.classList.remove("show");
    overlay.removeChild(img);
  }
}
