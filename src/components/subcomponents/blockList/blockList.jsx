import React, {Component} from "react";
import './blockList.scss'
import BathRoom from '../../../images/slider-images/bathroom.png'
import * as GuestHouse from "../../../home.json";


export default class BlockList extends Component {
    constructor(props) {
        super(props);
    }

    address(props) {
        for (let elem in GuestHouse.default) {
            for (let key in GuestHouse.default) {
                for (let city in GuestHouse.default[key]) {
                    // <p key={GuestHouse.default[key][city].address.full}>`${GuestHouse.default[key][city].address.full}`</p>
                    const address = GuestHouse.default[key][city].address.full;
                }
            }
        }
    }

    render() {
        console.log(this.address(this.props.children))
        return (
            <div className={'block_list_wrapper'}>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
                <div className={'block_list_block'}>
                    <div className={'block_list_status'}>
                        <span className={'statusColor'}></span>
                        <span className={'statusText'}>есть места на эти даты</span>
                        <div className={'heart'}>&#10084;</div>
                    </div>
                    <img src={BathRoom} alt={'Bathroom'} alt={'Bathroom'}/>
                    <div className={'block_list_footer'}>
                        <span className={'price'}>$3000</span>
                        <span className={'period'}>3 pr |  5 bd |  6 ba</span>
                    </div>
                </div>
            </div>

        )
    }
}