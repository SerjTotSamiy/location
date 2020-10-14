import React,{Component} from "react";
import {YMaps,Map, Placemark} from 'react-yandex-maps'
export default class Maps extends Component {
    constructor(props) {
        super(props);
        this.coordinates = [
            [37.3382, -121.8863],
            [37.7782887, -122.4335263]
        ];
        this.mapData = {
            center: [37.3382, -121.8863],
            zoom: 5,
        };
    }
    render() {
        return(
            <section className={"block_content"}>
                <div className={'yandex-map'}>
                    <YMaps>
                        <div style={{width: '40vw', height: '70vh', position: 'relative'}}>
                            <Map width='100%' height='100%' defaultState={this.mapData}>{this.coordinates.map(coordinate =>
                                <Placemark geometry={coordinate}/>)}
                            </Map>
                        </div>
                    </YMaps>
                </div>
            </section>
        )
    }
}