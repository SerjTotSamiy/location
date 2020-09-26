import React, {Component} from "react";
import './slider.scss'
import Slide from "./slide/slide";

export default class Slider extends Component{
    constructor(props) {
        super(props);

        this.state = {
            current_card: 1,
        }
    }

    componentDidMount() {
        let firs_slide_clone = this.carousel_container.children[0].cloneNode(true)
        let last_slide_clone = this.carousel_container.children[this.carousel_container.children.length - 1 ].cloneNode(true)

        this.carousel_container.insertBefore(last_slide_clone, this.carousel_container.children[0])
        this.carousel_container.append(firs_slide_clone);

        this.carousel_container.style.transitionDuration = '0s'
        this.carousel_container.style.transform = `translate(-${350}px)`
    }

next () {
        if(this.state.current_card < this.carousel_container.children.length - 1) {
            this.new_current_card = this.state.current_card + 1;
            this.setState({
                current_card: this.new_current_card
            }, () => {
                this.carousel_container.style.transitionDuration = '0.5s'
                this.carousel_container.style.transform = `translate(-${350 * this.state.current_card}px)`
            })
        }
        if(this.state.current_card === this.carousel_container.children.length - 1) {
            let next_button = document.querySelector('.carousel_button-next');
            next_button.classList.display ='none'
            setTimeout(() => {
                this.carousel_container.style.transitionDuration = '0s'
                this.carousel_container.style.transform = `translate(-${350}px)`
                this.setState({
                    current_card: 1
                })
            },0)
        }
    }
    prev () {
        if(this.state.current_card > 0) {
            this.new_current_card = this.state.current_card - 1;
            this.setState({
                current_card: this.new_current_card
            }, () => {
                this.carousel_container.style.transitionDuration = '0.5s'
                this.carousel_container.style.transform = `translate(-${350 * (this.state.current_card)}px)`
            })
        }
        if(this.state.current_card === 0) {
            setTimeout(() => {
                this.carousel_container.style.transitionDuration = '0s'
                this.carousel_container.style.transform = `translate(-${350 * (this.carousel_container.children.length - 2)}px)`
                this.setState({
                    current_card: this.carousel_container.children.length - 2
                })
            },0)
        }
    }
    render() {
        return <section>
            <button className={'carousel_button-next'} onClick={this.prev.bind(this)} >Prev</button>
            <div className={'carousel'}>
                <div ref={ref_id => this.carousel_container = ref_id} className={'carousel_container'}>
                    <div className={'carousel_slide'}> hello</div>
                    <Slide slide_number = '2'/>
                    <Slide slide_number = '3'/>
                    <Slide slide_number = '4'/>
                    <Slide slide_number = '5'/>
                </div>
            </div>
            <button className={'carousel_button-prev'} onClick={this.next.bind(this)}>next</button>
        </section>
    }
}