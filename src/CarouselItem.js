import './Carousel.css';
import React from 'react'

class CarouselItem extends React.Component {
    render(){
        return(
            <div className="carousel" style={this.props.style}>
                <div className="carouselimage">
                    <img className="image" src={this.props.image} alt=""></img>
                </div>
                <div className="carouseltext">
                    <h1>{this.props.text}</h1>
                    <p>{this.props.content}</p>
                    <img className="imagesmall" src={this.props.image} alt=""></img>
                    <img className="imagesmall" src={this.props.image} alt=""></img>
                    <img className="imagesmall" src={this.props.image} alt=""></img>
                </div>
            </div>
        )
    }
}
export default CarouselItem;