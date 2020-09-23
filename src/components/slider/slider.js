import React, {Component} from "react";
import '../slider/slider.css'

export default class Slider extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <section>
            <div className={'carousel'}>
                <nav className={'carousel-nav'}>
                    <ul className={'carousel-list'}>
                        <li className={'carousel-item'}>
                            hello
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    }
}