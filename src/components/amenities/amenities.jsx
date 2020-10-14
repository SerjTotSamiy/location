import React, {Component, ReactDOM} from "react";
import './amenities.css'
import Parking from '../../images/svg/parking.svg'
import Service from '../../images/svg/service.svg'
import Safety from '../../images/svg/safety.svg'
import Workspace from '../../images/svg/workspace.svg'
import Other from '../../images/svg/other.svg'
import Cleanless from '../../images/svg/cleanless.svg'
import Kitchen from '../../images/svg/kitchen.svg'

export default class Amenities extends Component {
    constructor(props) {
        super(props);
        this.amenities_text = document.getElementsByClassName('amenities-text')
        this.amenities_forInput = document.getElementsByClassName('amenities-forInput')
        this.showText = []
        this.state = {
            value: '',
            showValue: this.showText
        }
    }

    addAmenities(e) {
        this.setState({
            value: e.target.value
        })
    }

    addTextForInput() {
        this.showText.push(<div className={'amenities-text'}>
            {this.state.value}
            <button onClick={this.removeAmenitiesText.bind(this)} className={'amenities-forInput'}>click my anus
            </button>
        </div>)
        this.setState({
            showValue: this.state.showText,
            value: ''
        })
    }

    removeAmenitiesText() {
        this.showText.forEach((elem, index) => {

        })
    }

    render() {
        return <section className={'amenities'}>
            <h2 className={'amenities-heading'}>Amenities</h2>
            <div className={'amenities-wrapper'}>
                <div className={'amenities-col'}>
                    <img src={Parking}/> <span className={'amenities-span'}>Parking</span>
                    <br/>
                    <input type={'checkbox'}/> Paid Parking on Premises
                    <br/>
                    <input type={'checkbox'}/> Free Parking on Street
                    <br/>
                </div>
                <div className={'amenities-col'}>
                    <img src={Service}/> <span className={'amenities-span'}>Service</span>
                    <br/>
                    <input type={'checkbox'}/> Coffee maker
                    <br/>
                    <input type={'checkbox'}/> First Aid Kit
                    <br/>
                </div>
                <div className={'amenities-col'}>
                    <img src={Safety}/> <span className={'amenities-span'}>Service</span>
                    <br/>
                    <input type={'checkbox'}/> Fire Extinguisher
                    <br/>
                    <input type={'checkbox'}/> Carbon Monoxide Detector
                    <br/>
                    <input type={'checkbox'}/> Smoke detector
                    <br/>
                </div>
                <div className={'amenities-col'}>
                    <img src={Workspace}/> <span className={'amenities-span'}>Workspace and TV</span>
                    <br/>
                    <input type={'checkbox'}/> Laptop Friendly Workspace
                    <br/>
                    <input type={'checkbox'}/> Wireless Internet
                    <br/>
                    <input type={'checkbox'}/> TV
                    <br/>
                    <input type={'checkbox'}/> Cable TV
                    <br/>
                    <input type={'checkbox'}/> Patio or balcony
                    <br/>
                </div>
                <div className={'amenities-col'}>
                    <img src={Other}/> <span className={'amenities-span'}>Other amenities</span>
                    <br/>
                    <input type={'checkbox'}/> Family/Kid Friendly
                    <br/>
                    <input type={'checkbox'}/> Indoor Fireplace
                    <br/>
                    <input type={'checkbox'}/> Garden or backyard
                    <br/>
                    <input type={'checkbox'}/> Hangers
                    <br/>
                    <input type={'checkbox'}/> Patio or balcony
                    <br/>
                </div>
                <div className={'amenities-col'}>
                    <img src={Cleanless}/> <span className={'amenities-span'}>Сleanness</span>
                    <br/>
                    <input type={'checkbox'}/> Hot Tub
                    <br/>
                    <input type={'checkbox'}/> Washer
                    <br/>
                    <input type={'checkbox'}/> Dryer
                    <br/>
                    <input type={'checkbox'}/> Hair Dryer
                    <br/>
                    <input type={'checkbox'}/> Iron
                    <br/>
                    <input type={'checkbox'}/> Essentials
                    <br/>
                    <input type={'checkbox'}/> Shampoo
                    <br/>
                </div>
                <div className={'amenities-col'}>
                    <img src={Kitchen}/> <span className={'amenities-span'}>Kitchen</span>
                    <br/>
                    <input type={'checkbox'}/> Microwave
                    <br/>
                    <input type={'checkbox'}/> Dishwasher
                    <br/>
                    <input type={'checkbox'}/> Oven
                    <br/>
                    <input type={'checkbox'}/> Stove
                    <br/>
                    <input type={'checkbox'}/> Refrigerator
                    <br/>
                    <input type={'checkbox'}/> Cookware
                    <br/>
                    <input type={'checkbox'}/> Dishes and silverware
                    <br/>
                </div>
            </div>
            <div className={'amenities-custom'}>
                <h3 className={'amenities-heading3'}>Custom amenities</h3>
                <input type={'text'} className={'amenities-text'} value={this.state.value}
                       onChange={this.addAmenities.bind(this)}/>
                <button onClick={this.addTextForInput.bind(this)}>click me</button>
                <div className={'amenities-text'}>
                    {this.showText}
                </div>
            </div>
        </section>
    }
}