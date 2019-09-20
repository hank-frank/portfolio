import React, { Component } from 'react';
import ImageSlide from './ImageSlide.jsx'
import Arrow from './Arrow.jsx'


class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: props.images,
            currentImageIndex: 0
        }; 

        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = this.state.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide () {
        const lastIndex = this.state.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }

    render () {
        return(
            <div className="carousel">
                <div className="slider-wrapper">
                <Arrow
                     direction="left"
                     clickFunction={ this.previousSlide }
                     glyph="&#9664;" />
           
                   <ImageSlide image={ this.state.images[this.state.currentImageIndex] } />
           
                   <Arrow
                     direction="right"
                     clickFunction={ this.nextSlide }
                     glyph="&#9654;" />
                        {
                        this.state.images.map((image, i) => (
                            <ImageSlide key={i} image={image} />
                        ))
                    }
                </div>

                
            </div>
        );
    }

}

export default Carousel;
