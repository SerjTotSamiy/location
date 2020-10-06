import React, {Component} from "react";
import './locationList.scss'
import BlockList from "../blockList/blockList";

export default class LocationList extends Component {

    render() {

        return (
            <div className={"block_list_home"}>
                <h2>Location Listings</h2>
                <div className={'sortByResult'}>
                    <div className={'sortByResult_wrapper'}>
                        <p className={'result'}>21 result</p>
                        <div className={'sort'}>
                            <span>Sort by: </span>
                            <select>
                                <option value={'Newest'}>Newest</option>
                                <option value={'heloo'}>Hello</option>
                                <option value={'heloo'}>Hello</option>
                            </select>
                        </div>
                    </div>

                    <div className={"grid_columm"}>
                        <BlockList/>
                    </div>
                </div>

            </div>

        )
    }
}