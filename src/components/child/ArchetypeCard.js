import React from "react"
// import { Link } from 'react-router-dom';
import ProgressiveImage from "react-progressive-image"
import placeholder from "../../assets/images/CaregiverPlaceholder.jpg"

const ArchetypeCard = props => {
  return (
    <div>
      <h2 className="ui archetype">{props.archetype}</h2>
      <div className="ui two cards">
        <a className="card" onClick={props.onImageClick} href="#details">
          <div className="image">
            <ProgressiveImage src={props.maleImage} placeholder={placeholder}>
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                />
              )}
            </ProgressiveImage>
            {/* <img src={ props.maleImage } alt="Male Archetype"/> */}
          </div>
        </a>
        <a className="card" onClick={props.onImageClick} href="#details">
          <div className="image">
            <ProgressiveImage src={props.femaleImage} placeholder={placeholder}>
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Female Archetype"
                />
              )}
            </ProgressiveImage>
            {/* <img src={ props.femaleImage } alt="Female Archetype"/> */}
          </div>
        </a>
      </div>
      <p className="archetype-text">{props.description}</p>
    </div>
  )
}

export default ArchetypeCard
