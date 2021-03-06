import React, {Component} from "react";
import './slider.scss'
import Amenities from "../amenities/amenities";
import BathRoom from '../../images/slider-images/bathroom.png'
import Reminder from '../../images/svg/reminder.svg'
import {Map, Placemark, YMaps} from "react-yandex-maps";
import House1 from '../../images/slider-images/house1.png'
import House2 from '../../images/slider-images/house2.png'
import House3 from '../../images/slider-images/house3.png'
import House4 from '../../images/slider-images/house4.png'
import House5 from '../../images/slider-images/house5.png'

export default class Slider extends Component {

    constructor(props,) {
        super(props);
        this.coordinates = [
            [37.3382, -121.8863],
        ];
        this.mapData = {
            center: [37.3382, -121.8863],
            zoom: 11,
        };

        this.state = {
            current_card: 0,
            textCondition: true,
            condition: true,
            areaCondition: true,
            addClass: false,
        }

    }

    componentDidMount() {
        if (this.state.current_card === 0) {
            this.button_prev.style.display = 'none'
        }
        if (this.state.current_card > 0) {
            this.button_prev.style.display = 'inline-block'
        }
    }

    showCarouselText() {
        this.setState(prevCondition => ({
            textCondition: !prevCondition.textCondition
        }))
    }

    showText() {
        this.setState(nextConditon => ({
            condition: !nextConditon.condition
        }))
    }

    showArea() {
        this.setState(nextArea => ({
            areaCondition: !nextArea.areaCondition
        }))
    }

    addColor() {
        let dots = document.querySelectorAll('.dot')
        dots.forEach((elem,index) => {
            if (index === this.new_current_card) {
                elem.style.backgroundColor = 'red'
            }
        })
    }

    next() {
        if (this.state.current_card < this.carousel_container.children.length - 1) {
            this.new_current_card = this.state.current_card + 1;
            let carusel = document.querySelector('.carousel_slide')
            this.addColor();
            if (this.state.current_card === 1) {
                carusel.style.height = 'auto'
            } else if (this.state.current_card === 3) {
                carusel.style.height = 'auto'
            } else {
                carusel.style.height = '50vh'
            }
            this.setState({
                current_card: this.new_current_card
            }, () => {
                this.carousel_container.style.transitionDuration = '0.5s'
                this.carousel_container.style.transform = `translate(-${1000 * this.state.current_card}px)`
            })

        }
        if (this.state.current_card === 0) {
            this.button_prev.style.display = 'inline-block'
        }
        if (this.state.current_card === this.carousel_container.children.length - 2) {
            this.button_next.style.display = 'none'
        }
    }

    prev() {
        if (this.state.current_card > 0) {
            console.log(this.state.current_card)
            this.new_current_card = this.state.current_card - 1;
            let carusel = document.querySelector('.carousel_slide')
            if (this.state.current_card === 3) {
                carusel.style.height = 'auto'
            } else {
                carusel.style.height = '50vh'
            }
            this.setState({
                current_card: this.new_current_card
            }, () => {
                this.carousel_container.style.transitionDuration = '0.5s'
                this.carousel_container.style.transform = `translate(-${1000 * (this.state.current_card)}px)`
            })
        }
        if (this.state.current_card === this.carousel_container.children.length - 1) {
            this.button_next.style.display = 'inline-block'
        }
        if (this.state.current_card === 1) {
            this.button_prev.style.display = 'none'
        }
    }

    render() {
        return <section>
            <button ref={ref_id => this.button_prev = ref_id} className={'carousel_button-next'}
                    onClick={this.prev.bind(this)}>&#8249;</button>
            <div className={'carousel-dots'}>
                <div className={'dot'}></div>
                <div className={'dot'}></div>
                <div className={'dot'}></div>
                <div className={'dot'}></div>
                <div className={'dot'}></div>
            </div>
            <div className={'carousel'}>
                <div ref={ref_id => this.carousel_container = ref_id} className={'carousel_container'}>
                    <div className={'carousel_slide-block'}>
                        <YMaps>
                            <div style={{width: '100%', height: '100%', position: 'relative'}}
                                 className={'carousel_map'}>
                                <Map width='100%' height='100%'
                                     defaultState={this.mapData}>{this.coordinates.map(coordinate =>
                                    <Placemark geometry={coordinate}/>)}
                                </Map>
                            </div>
                        </YMaps>
                    </div>
                    <div className={'carousel_slide-block'}>
                        <div className={'carousel_slide-wrapper'}>
                            <div className={'carousel_picture'}>
                                <img src={BathRoom} alt={'bathroom'} className={'carousel_bathroom'}/>
                                <span className={'carousel_span'}><img src={Reminder} alt={'reminder'}
                                                                       onClick={this.showCarouselText.bind(this)}/></span>
                                <div
                                    className={this.state.textCondition ? 'carousel_span-text' : 'carousel_span-text-active'}>
                                    <h3>Example</h3>
                                    <p>Лучше, чтобы фото были такими:</p>
                                    <img className={'carousel_span-img'} alt={'carousel-span-img'}/>
                                </div>
                            </div>
                            <div className={'carousel_overview'}>
                                <h2>Overview</h2>
                                <select className={'carousel_select'}>
                                    <option>looll</option>
                                    <option>looll</option>
                                    <option>looll</option>
                                    <option>looll</option>
                                </select>
                                <div className={'carousel_text'}>
                                    <p>Просто скажите пару слов о своём доме.</p>
                                    <p>Какая тут атмосфера? Какие люди?</p>
                                    <textarea
                                        className={this.state.areaCondition ? 'carousel_textarea' : 'carousel_textarea-bigger'}
                                        onClick={this.showArea.bind(this)}></textarea>
                                    <p>Чаще всего нам задают такие вопросы:</p>
                                    <p>- а рядом есть спортзал?</p>
                                    <p>- что насчёт школ рядом?</p>
                                    <p>- что с общественным транспортом?</p>
                                    <p>- рядом есть парк/озеро?</p>
                                </div>
                            </div>
                            <span className={'carousel_span'}><img src={Reminder} alt={'reminder'}
                                                                   onMouseUp={this.showText.bind(this)}/></span>
                            <div className={this.state.condition ? 'carousel_example' : 'carousel_example-active'}>
                                <h3>Example</h3>
                                <p>More than a house, we are a startup founders community. We host entrepreneurs, but
                                    also engineers and students who want to start their own business. Live, learn and
                                    achieve, while getting the full Silicon Valley experience! </p>
                                <p>Spacious, cheerful, sunny rooms of a large house in Atherton, professionally cleaned
                                    daily.</p>
                                <p>Upon booking, please introduce yourself, thanks and welcome to our community!</p>
                            </div>
                        </div>
                    </div>
                    <div className={'carousel_slide'}>
                        <h2>Badrooms</h2>
                        <div className={'carousel_addPhotos'}>
                            <button className={'carousel_plus'}>&#43;</button>
                        </div>
                        <Amenities/>
                    </div>
                    <div className={'carousel_slide-block'}>
                        <div className={'carousel_slide-wrapper'}>
                            <div className={'carousel_rules'}>
                                <h2 className={'carousel_rules-heading'}>Rules</h2>
                                <p>Какие правила вы хотите, чтобы действовали в вашем Startup House?</p>
                                <p>Чаще всего правила регулируют такие темы, как:</p>
                                <p>- можно ли курить?</p>
                                <p>- а можно держать в доме животных?</p>
                                <p>- а можно с маленькими детьми?</p>
                                <p>- что насчёт шумных вечеринок?</p>
                                <span className={'carousel_span'}><img src={Reminder} alt={'reminder'}/></span>
                            </div>
                        </div>
                    </div>
                    <div className={'carousel_slide'}>
                        <div className={'carousel_slide-wrapper'}>
                            <div className={'carousel_address'}>
                                <h2>Address</h2>
                                <YMaps>
                                    <div style={{width: '100%', height: '100%', position: 'relative'}}
                                         className={'carousel_map'}>
                                        <Map width='100%' height='100%'
                                             defaultState={{center: [37.3382, -121.8863], zoom: 11,}}/>
                                    </div>
                                </YMaps>
                            </div>
                            <div className={'carousel_overview-next'}>
                                <h2>Overview</h2>
                                <select className={'carousel_select'}>
                                    <option>1500 ft</option>
                                    <option>1500 ft</option>
                                    <option>1500 ft</option>
                                    <option>1500 ft</option>
                                </select>
                                <p>More than a house, we are a startup founders community. We host entrepreneurs, but
                                    also engineers and students who want to start their own business. Live, learn and
                                    achieve, while getting the full Silicon Valley experience!</p>
                                <p> Spacious, cheerful, sunny rooms of a large house in Atherton, professionally cleaned
                                    daily.</p>
                                <p>Upon booking, please introduce yourself, thanks and welcome to our community!</p>
                            </div>
                        </div>
                        <div className={'carousel_slide-photos'}>
                            <h2>Photos of the house</h2>
                            <div className={'carousel_slide-wrapper'}>
                                <img src={House1} alt={'house1'}/>
                                <img src={House2} alt={'house2'}/>
                                <img src={House3} alt={'house3'}/>
                                <img src={House4} alt={'house4'}/>
                                <img src={House5} alt={'house5'}/>
                            </div>
                        </div>
                        <div className={'carousel_slide-wrapper'}>
                            <h2>Badrooms</h2>
                            <div className={'carousel_addPhotos'}>
                                <button className={'carousel_plus'}>&#43;</button>
                            </div>
                            {/*<div className={'carousel_slide-wrapper'}>
                                <figure className={'carousel_figure'}>
                                    <img src={BathRoom} alt={'bathroom'} />
                                    <figcaption className={'carousel_caption'}></figcaption>
                                    <span className={'carousel_figure_span'}>1800/month</span>
                                </figure>
                                <figure className={'carousel_figure'}>
                                    <img src={BathRoom} alt={'bathroom'} />
                                    <figcaption className={'carousel_caption'}>	&#9733; Private</figcaption>
                                    <span className={'carousel_figure_span'}>1800/month</span>
                                </figure>

                            </div>*/}
                        </div>
                        <Amenities/>
                    </div>
                </div>
            </div>
            <button ref={ref_id => this.button_next = ref_id} className={'carousel_button-prev'}
                    onClick={this.next.bind(this)}>&#8250;</button>
        </section>
    }
}