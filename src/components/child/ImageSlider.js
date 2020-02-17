import React from "react"
import twelveType from "../../api/twelveType"
import ProgressiveImage from "react-progressive-image"
import placeholder from "../../assets/images/CaregiverPlaceholder.jpg"

class ImageSlider extends React.Component {
  state = { archetypeImages: [] }

  componentDidMount = async () => {
    try {
      const response = await twelveType.get("/getArchetypeImages", {})

      this.setState({
        archetypeImages: response.data
      })
      console.log(this.state.archetypeImages)
    } catch (er) {
      console.log(er)
    }

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
      cellCount = 12
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

    function onOrientationChange() {
      rotateFn = "rotateY"
      changeCarousel()
    }

    // set initials
    onOrientationChange()
  }

  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment linear-background">
        <div className="ui text container overflow-custom">
          {/* <h1 className="ui inverted header">
            Imagine-a-Company
          </h1>
          <h2>Do whatever you want when you want to.</h2>
          <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div> */}

          <div className="scene">
            <div className="carousel">
              {this.state.archetypeImages.map(item => (
                <div className="carousel__cell">
                  <ProgressiveImage src={item.male} placeholder={placeholder}>
                    {(src, loading) => (
                      <img
                        style={{ opacity: loading ? 0.3 : 1 }}
                        src={src}
                        alt="Archetype"
                        className="carousel-img"
                      />
                    )}
                  </ProgressiveImage>
                </div>
              ))}
            </div>
          </div>
          <div className="next">
            <i className="icon caret right"></i>
          </div>
          <div className="prev">
            <i className="icon caret left"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageSlider
