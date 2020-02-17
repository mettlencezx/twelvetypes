var carousel = document.querySelector(".carousel")
var cells = carousel.querySelectorAll(".carousel__cell")
var cellCount
var selectedIndex = 0
var cellWidth = carousel.offsetWidth
var cellHeight = carousel.offsetHeight
var isHorizontal = true
var rotateFn = isHorizontal ? "rotateY" : "rotateX"
var radius, theta

function rotateCarousel() {
  var angle = theta * selectedIndex * -1
  carousel.style.transform =
    "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)"
}

var prevButton = document.querySelector(".prev")
prevButton.addEventListener("click", function() {
  selectedIndex--
  rotateCarousel()
})

var nextButton = document.querySelector(".next")
nextButton.addEventListener("click", function() {
  selectedIndex++
  rotateCarousel()
})

function changeCarousel() {
  cellCount = 15
  theta = 360 / cellCount
  var cellSize = isHorizontal ? cellWidth : cellHeight
  radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount))
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i]
    if (i < cellCount) {
      // visible cell
      cell.style.opacity = 1
      var cellAngle = theta * i
      cell.style.transform =
        rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)"
    } else {
      // hidden cell
      cell.style.opacity = 0
      cell.style.transform = "none"
    }
  }

  rotateCarousel()
}

// var orientationRadios = document.querySelectorAll('input[name="orientation"]');
// ( function() {
//   for ( var i=0; i < orientationRadios.length; i++ ) {
//     var radio = orientationRadios[i];
//     radio.addEventListener( 'change', onOrientationChange );
//   }
// })();

function onOrientationChange() {
  //var checkedRadio = document.querySelector('input[name="orientation"]:checked');
  //isHorizontal = checkedRadio.value == 'horizontal';
  //rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  rotateFn = "rotateY"
  changeCarousel()
}

// set initials
//onOrientationChange();
export default onOrientationChange
