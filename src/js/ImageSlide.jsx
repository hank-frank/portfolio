import React from 'react'

const ImageSlide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
  
    backgroundSize: 'cover',
    height: 'auto'
  };

  return (
    <div className="image-flex">
        <div className="image-spacer" />
        <img src={ image } className="carousel-image" />
        <div className="image-spacer" />
    </div>
  );
}

export default ImageSlide
