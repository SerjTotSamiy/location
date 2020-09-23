import React, {Component} from "react";
import './amenities.css'
import Parking from '../../images/svg/parking.svg'
import Service from '../../images/svg/service.svg'
import Safety from '../../images/svg/safety.svg'
import Workspace from '../../images/svg/workspace.svg'
import Other from '../../images/svg/other.svg'
import Cleanless from '../../images/svg/cleanless.svg'
import Kitchen from '../../images/svg/kitchen.svg'
import Crist  from '../../images/svg/crist.svg'

export default class Amenities extends Component {
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
                <div className={'amenities-wrapper'}>
                    <div className={'amenities-custom-block'}>
                        <input type={'text'} placeholder={'please enter your custom'} className={'custom-input'}/>
                        <button className={'amenities-button'}><img src={Crist}/></button>
                    </div>
                    <div className={'amenities-custom-block'}>
                        <input type={'text'} placeholder={'please enter your custom'} className={'custom-input'}/>
                        <button className={'amenities-button'}><img src={Crist}/></button>
                    </div>
                    <div className={'amenities-custom-block'}>
                        <input type={'text'} placeholder={'please enter your custom'} className={'custom-input'}/>
                        <button className={'amenities-button'}><img src={Crist}/></button>
                    </div>
                    <div className={'amenities-custom-block'}>
                        <input type={'text'} placeholder={'please enter your custom'} className={'custom-input'}/>
                        <button className={'amenities-button'}><img src={Crist}/></button>
                    </div>
                    <div className={'amenities-custom-block'}>
                        <input type={'text'} placeholder={'please enter your custom'} className={'custom-input'}/>
                        <button className={'amenities-button'}><img src={Crist}/></button>
                    </div>
                    <div className={'amenities-custom-block'}>
                        <input type={'text'} placeholder={'please enter your custom'} className={'custom-input'}/>
                        <button className={'amenities-button'}><img src={Crist}/></button>
                    </div>
                </div>
            </div>
            <div className={'rules'}>
                <h2 className={'rules-heading'}>Rules</h2>
                <ul className={'rules-list'}>
                    <li className={'rules-item'}>no suitable for children and infants</li>
                    <li className={'rules-item'}>no smoking</li>
                    <li className={'rules-item'}>no pets</li>
                    <li className={'rules-item'}>no parties or events</li>
                    <li className={'rules-item'}>check-in is anytime after 3PM</li>
                </ul>
            </div>
            <button className={'amenities-bottom-button'}>Create Startup House!</button>
        </section>
    }
}