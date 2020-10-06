import React,{Component} from "react";

export default  class Filter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div className={"block_fillter"}>
                <form action={"#"} className={"filter-form"}>
                    <input type={'text'} className={'search_location'} placeholder={'Location'}/>
                    <a href={"#"} className={"check"}>Check in - Check out</a>
                    <input type={'number'} className={'prise'} placeholder={'price'}/>
                    <span className={"minus"}>-</span>
                    <input type={"number"} id={"Guesty"} className={"guesty"} placeholder={"Guesty"}
                           disabled={true}/>
                    <span className={"plus"}>+</span>
                    <input type={'submit'} style={{display: 'none'}}/>
                </form>
                <div className={"more"}>
                    <a href={"#"} className={"but_more"}>More</a>
                    <div className={"more_block"}>
                        <h2>Interests & skills</h2>
                        <form action={''} method={'GET'}>
                            <input type={'text'} placeholder={"Enter your Interests & skills"}
                                   className={"req_interes"}
                                   id={'interes'}/>
                            <div className={"user_select"} id={"user_select_one"}>
                            </div>
                        </form>
                        <h2>Sphere of future startsup</h2>
                        <form action={''} method={'GET'}>
                            <input type={"text"} placeholder={"Enter sphere"} className={"req_interes"}
                                   id={"sphere"}/>
                            <div className={"user_select"} id={"user_select_two"}>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}