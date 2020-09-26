import './slide.scss'
import React, {Component} from "react";

export default class Slide extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className={'card'}>
            {this.props.slide_number}
        </div>
    }


}