import React from 'react';
import './Carousel.css';
import { CSSTransitionGroup } from 'react-transition-group';

class CarouselItem extends React.Component {
    render(){
        return(
            <div className="carousel" style={this.props.style}>
                <div className="carouselimage">
                    <img className="image" src={this.props.image} alt="Fuckoff"></img>
                </div>
                <div className="carouseltext">
                    {this.props.text}
                </div>
            </div>
        )
    }
}
class Carousel extends React.Component {
    constructor(props){
        super();
        this.state = {
        translateValue: 0,
        currentIndex: 0,
        images: ["https://cdn-images-1.medium.com/max/1200/1*a2Ytu9xDa_qdWqNEQ5Q4mg.png", "https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-style-react-components/egghead-style-react-components.jpg", "https://cdn-images-1.medium.com/max/1600/0*HlUhwLr2bnBEiGuO.gif", "https://cdn-images-1.medium.com/max/2400/1*ghfEivqtCdLAFXbgBDEoyw.png"], 
        text: ["Hello", "Hi", "Bye", "waste Fellow"]
        }
        this.handleClickPrev = this.handleClickPrev.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.slideWidth = this.slideWidth.bind(this);
    }   
    handleClickPrev() {
        if(this.state.currentIndex === 0)
            return;
    
        this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
        }))
    }
    handleClickNext() {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
        }
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex + 1,
                translateValue: prevState.translateValue + -(this.slideWidth())
              }));
    }
    slideWidth = () => {
        return document.querySelector('.carousel').clientWidth
     }
    render(){
        let normalStyle = {
            transition: 'opacity 1s ease-in'
        }
       return (
        <div>
            <div className="slider">
            <ReactCSSTransitionGroup
                transitionName="infinite"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                    <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s', 

                    }}>
                        {
                            this.state.images.map((image, i) => (
                                <CarouselItem image={image} text={this.state.text[i]}></CarouselItem>
                            ))
                        }
                </div>
                {items}
            </ReactCSSTransitionGroup>
                
            </div>
            <button onClick={this.handleClickPrev}>Previous</button>
            <button onClick={this.handleClickNext}>Next</button>
        </div>
       )
    }
}
export default Carousel;