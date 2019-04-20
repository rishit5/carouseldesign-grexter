import React from 'react';
import './Carousel.css';
import CarouselItem from './CarouselItem.js'

class Carousel extends React.Component {
    constructor(props){
        super();
        this.state = {
        date: new Date(),
        translateValue: 0,
        currentIndex: 0,
        images: ["https://s3-ap-southeast-1.amazonaws.com/grexter-images/buildings/29/1551361083.jpg", "https://cdn-images-1.medium.com/max/2400/1*EVqCcmCPgpNKxU1wzcTHgw.png", "https://cdn-images-1.medium.com/max/1600/0*HlUhwLr2bnBEiGuO.gif", "https://cdn-images-1.medium.com/max/2400/1*ghfEivqtCdLAFXbgBDEoyw.png"], 
        text: ["Talk About a View", "Hi", "Dummy Text", "Dummy Heading"],
        content: ["Living Area No matter how bad your day has been, walking", "Lorem Ipsum is simply dummy text of theg industry.", "There are many variations of passn some form,", "It is a long established fact that a reader will be"]
        }
        this.handleClickPrev = this.handleClickPrev.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.tick = this.tick.bind(this);
        this.slideWidth = this.slideWidth.bind(this);
    }   
    componentDidMount(){
        this.timeID = setInterval(() => this.handleClickNext(), 3000)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
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
        console.log('Im being called')
       return (
        <div>
            <div className="slider">
                    <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s', 

                    }}>
                        {
                            this.state.images.map((image, i) => (
                                <CarouselItem image={image} text={this.state.text[i]} content={this.state.content[i]}></CarouselItem>
                            ))
                        }          
                </div>
                
            </div>
            <i className="right" onClick={this.handleClickNext}></i>
            <i className="left" onClick={this.handleClickPrev}></i>
        </div>
       )
    }
}
export default Carousel;