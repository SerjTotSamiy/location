import React, {Component} from "react";
import './header.css'
import logo from '../../images/svg/logo.svg'
import Facebook from '../../images/svg/facebook.svg'
import Linkdein from '../../images/svg/linkedin.svg'
import Google from '../../images/svg/google.svg'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: true,
            sign: true,
        }
        this.changeButton = this.changeButton.bind(this)
        this.changeSign = this.changeSign.bind(this)
    }

    changeButton() {
        this.setState(prevState => ({
            condition: !prevState.condition
        }));
    }

    changeSign() {
        this.setState(prevSign => ({
            sign: !prevSign.sign
        }))
    }

    render() {
        return (
            <header className={'header'}>
                    <nav className={'header_nav'}>
                        <ul className={'header_list'}>
                            <li className={'header_item'}>
                                <a href={'#'} className={'header_a'}>
                                    <div className={'header_link-wrapp'}>
                                        <img src={logo} alt={'header_logo'} className={'header-logo'}/>
                                        <span className={'header_logo-text'}>StartUp House</span>
                                    </div>
                                </a>
                            </li>
                            <li className={'header_item'}>
                                <a href={'#'} className={'header_link'}>
                                    Find a home
                                </a>

                            </li>
                            <li className={'header_item'}>
                                <a href={'#'} className={'header_link'}>
                                    Comunity
                                </a>
                            </li>
                            <li className={'header_item'}>
                                <a className={'header_link'} href={'#'}>
                                    Become a host
                                </a>
                            </li>
                            <li className={'header_item'}>
                                <a className={'header_link'} href={'/'}>
                                    Why Startup House
                                </a>
                            </li>
                            <li className={'header_item'}>
                                <a className={'header_link'} href={'#'}>
                                    FAQ
                                </a>
                            </li>
                            <button className={'header_button'} onClick={this.changeSign}>
                                Sign Up
                            </button>
                        </ul>
                    </nav>
                <div className={this.state.sign ? 'sign-up-wrapper' : 'sign-up-show'}>
                    <div className={'sign-up'} id={'signup'}>
                        <img src={logo} alt={'header_logo'} className={'header-logo'}/>
                        <h2 className={'sign-up-heading'}>Login to your account</h2>
                        <a className={'sign-up-social'} href={'#'}>
                            <img src={Facebook} alt={'header_logo'} className={'header-logo'}/>
                            <p className={'sign-up-social-facebook'}>Continue with Facebook</p>
                        </a>
                        <a className={'sign-up-social'} href={'#'}>
                            <img src={Linkdein} alt={'header_logo'} className={'header-logo'}/>
                            <p className={'sign-up-social-linkedin'}>Continue with Linkedin</p>
                        </a>
                        <a className={'sign-up-social'} href={'#'}>
                            <img src={Google} alt={'header_logo'} className={'header-logo'}/>
                            <p className={'sign-up-social-google'}>Continue with Google</p>
                        </a>
                        <p className={'signup-paragraph'}>or</p>
                        <input type={'text'} className={this.state.condition ? 'header-input' : 'header-input-active'}
                               placeholder={'Please text your mail'}/>
                        <button onClick={this.changeButton}
                                className={this.state.condition ? 'header-mail-button' : 'header-mail-button-active'}>
                            {this.state.condition ? 'Use mail' : 'Log in'}
                        </button>
                        <p>Don’t have an account? <a href={'#signup'}>Sign Up</a></p>
                    </div>
                </div>

            </header>)
    }
}
