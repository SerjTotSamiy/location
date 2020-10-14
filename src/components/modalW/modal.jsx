import React, {Component} from "react";
import './modal.scss'
import Header from "../header/header";
import Filter from "../subcomponents/filter";
import Maps from "../subcomponents/maps";
import Modals from "../subcomponents/modals";
import LocationList from "../subcomponents/locationList/locationList";


export default class Modal extends Component {
    constructor(props) {
        super(props)
      /*  this.coordinates = [
            [37.3382, -121.8863],
        ];
        this.mapData = {
            center: [37.3382, -121.8863],
            zoom: 11,
        };*/
    }

    render() {
        return (<section className={'modal'}>
                <Header/>
                <Filter/>
                <div className={'modal_wrapper'}>
                    <Maps/>
                    <LocationList/>
                </div>
                <Modals/>
            </section>
        )
    };
}


