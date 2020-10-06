import React, {Component} from "react";
import SHLogoT from "../../images/svg/SHLogoT 1Logo.svg";
import VectorZoom from "../../images/svg/Vectorzoom.svg";
import Car2 from "../../images/svg/car2.svg";
import Parking from "../../images/svg/parking.svg";
import Fireman from "../../images/svg/fireman.svg";
import Vector_12 from "../../images/svg/Vector-12.svg";
import Notebook from "../../images/svg/noteboock.svg";
import Wifi from "../../images/svg/wifi.svg";
import Tv from "../../images/svg/tv.svg";
import CableTv from "../../images/svg/cabletv.svg";
import HotTub from "../../images/svg/hotub.svg";
import Washer from "../../images/svg/Washer.svg";
import Dryer from "../../images/svg/dryer.svg";
import Salon from "../../images/svg/salon.svg";
import MicroWave from "../../images/svg/microwave.svg";
import Diwa from "../../images/svg/diwa.svg";
import Oven from "../../images/svg/oven.svg";
import Stove from "../../images/svg/stove.svg";
import Refrigerator from "../../images/svg/Refrigerator.svg";
import Dishes from "../../images/svg/dishes.svg";
import Fkf from "../../images/svg/fkf.svg";
import FirePlace from "../../images/svg/fireplace.svg";
import Garden from "../../images/svg/garden.svg";
import Cafe from "../../images/svg/cafe.svg";
import Ambulance from "../../images/svg/anbulance.svg";
import Maps from "./maps";

export default class Modals extends Component {
    render() {
        return (
            <section className={"modals"}>
                <div className={"modal"} hidden={true}>
                    <div className={"modal_dialog"}>
                        <div className={"modal_content"}>
                            <div className={"content_img"}>
                                <img src={'#'} alt={'contentImg'}/>
                                <img src={'#'} alt={'contentImg'}/>
                                <img src={'#'} alt={'contentImg'}/>
                                <img src={'#'} alt={'contentImg'}/>
                                <img src={'#'} alt={'contentImg'}/>
                            </div>
                            <div className={"line"}></div>
                            <div className={"content_info"}>
                                <img src={SHLogoT} alt={'shlogo'} className={"logo_modal"}/>
                                <div className={"content_info_home"}>
							<span className={"price_modal"}>
								Palo Alto
							</span>
                                    <span className={"about_home_modal"}>
								244.44
							</span>
                                    <p className={"about_adress_modal"}>
                                        1841 Macross Dr, San Jose, CA 95621
                                    </p>
                                    <span className={"status_modal"}>
								<span className={"green"}></span>
								Есть места на эти даты
							</span>
                                    <a href="#" className={"button_modal_book"}>
                                        Book Now
                                    </a>
                                    <a href="#" className={"button_modal_mananger"}>
                                        Contact a house manager
                                    </a>
                                    <hr/>
                                    <nav className={"menu_targer_select_option"}>
                                        <ul>
                                            <li className={"active"}>Overview</li>
                                            <li>Rooms</li>
                                            <li>Amenities</li>
                                            <li>Rules</li>
                                            <li>Projects</li>
                                            <li>Neighborhood</li>
                                            <span className={"opasity_effect"}>
									</span>
                                        </ul>
                                    </nav>
                                    <div className={"content_targer"}>
                                        <div className={"foto-block"}>
                                            <img src={"#"} alt={"overview-foto"} className={"overview-foto"}/>
                                            <img src={'#'} alt={"next_to_img"} className={"next_to_img"}/>
                                            <img src={VectorZoom} className={"zoom"} alt={"vectorZoom"}/>
                                        </div>
                                        <div className={"text_content"}>
                                            <h2>Overview</h2>
                                            <p>More than a house, we are a startup founders community. We host
                                                entrepreneurs, but
                                                also engineers and students who want to start their own
                                                business.
                                                Live, learn and
                                                achieve, while getting the full Silicon Valley experience! <br/>Spacious,
                                                cheerful, sunny rooms of a large house in Atherton,
                                                professionally cleaned daily.
                                                <br/> Upon booking, please introduce yourself, thanks and
                                                welcome to our
                                                community!</p>
                                        </div>
                                        <div className={"house_manager_message"}>
                                            <img src={'#'} alt={'foto_house_manager'}
                                                 className={"foto_house_manager"}/>
                                            <h3 className={"name_house_manager"}>
                                                Matt
                                            </h3>
                                            <p>className="message_house_manager">
                                                House manager & python dev
                                            </p>
                                        </div>
                                        <h2 className={"title_preview"}>Amenties
                                        </h2>
                                        <div className={"previews_home"}>
                                            <div className={"columm_one"}>
                                                <div className={"block_about_home"}>
                                                    <h3>Parking</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={Car2} alt={"Car2"}/> Paid Parking on
                                                            Premises
                                                        </li>
                                                        <li>
                                                            <img src={Parking} alt={"pSvg"}/>
                                                            Free Parking on Street
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"block_about_home"}>
                                                    <h3>Safety</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={Fireman} alt={'Fireman'}/> Fire
                                                            Extinguisher
                                                        </li>
                                                        <li>
                                                            <img src={Vector_12} alt={'Vector12'}/>
                                                            Carbon Monoxide Detector
                                                        </li>
                                                        <li>
                                                            <img src={Vector_12} alt={'Vector12'}/>
                                                            Smoke detector
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"block_about_home"}>
                                                    <h3>Workspace and TV</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={Notebook} alt={'NoteBook'}/> Laptop
                                                            Friendly
                                                            Workspace
                                                        </li>
                                                        <li>
                                                            <img src={Wifi} alt={'Wifi'}/>
                                                            Wireless Internet
                                                        </li>
                                                        <li>
                                                            <img src={Tv} alt={'Tv'}/>
                                                            TV
                                                        </li>
                                                        <li>
                                                            <img src={CableTv} alt={'CableTv'}/>
                                                            Cable TV
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"block_about_home"}>
                                                    <h3>Cleanness</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={HotTub} alt={'HotTub'}/> Hot Tub
                                                        </li>
                                                        <li>
                                                            <img src={Washer} alt={'Washer'}/>
                                                            Washer
                                                        </li>
                                                        <li>
                                                            <img src={Dryer} alt={'Dryer'}/>
                                                            Dryer
                                                        </li>
                                                        <li>
                                                            <img src={Salon} alt={'Salon'}/>
                                                            Hair Dryer
                                                        </li>
                                                        <li>
													<span className={"figure"}>
													</span>
                                                            Iron
                                                        </li>
                                                        <li>
													<span className={"figure"}>
													</span>
                                                            Essentials
                                                        </li>
                                                        <li>
													<span className={"figure"}>
													</span>
                                                            Shampoo
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={"columm_two"}>
                                                <div className={"block_about_home"}>
                                                    <h3>Kithcen</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={MicroWave}
                                                                 alt={'MicroWave'}/> Microwave
                                                        </li>
                                                        <li>
                                                            <img src={Diwa} alt={'Diwa'}/>
                                                            Dishwasher
                                                        </li>
                                                        <li>
                                                            <img src={Oven} alt={'Oven'}/>
                                                            Oven
                                                        </li>
                                                        <li>
                                                            <img src={Stove} alt={'Stove'}/>
                                                            Stove
                                                        </li>
                                                        <li>
                                                            <img src={Refrigerator} alt={'Refrigerator'}/>
                                                            Refrigerator
                                                        </li>
                                                        <li><img src={Tv} alt={'Tv'}/>
                                                            Cookware
                                                        </li>
                                                        <li><img src={Dishes} alt={'Dishes'}/>
                                                            Dishes and silverware
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"block_about_home"}>
                                                    <h3>
                                                        Othet amenities
                                                    </h3>
                                                    <ul>
                                                        <li>
                                                            <img src={Fkf} alt={'Fkf'}/> Family/Kid Friendly
                                                        </li>
                                                        <li>
                                                            <img src={FirePlace} alt={'Fireplace'}/>
                                                            Indoor Fireplace
                                                        </li>
                                                        <li>
                                                            <img src={Garden} alt={'Garden'}/>
                                                            Garden or backyard
                                                        </li>
                                                        <li>
                                                            <span className={"figure"}></span>
                                                            Patio or balcony
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"block_about_home"}>
                                                    <h3>Service</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={Cafe} alt={'Cafe'}/> Coffee maker
                                                        </li>
                                                        <li>
                                                            <img src={Ambulance} alt={'Ambulance'}/>
                                                            First Aid Kit
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className={"rules_title_target"}>Rules</h2>
                                        <div className={"block_home_rules"}>
                                            <ul>
                                                <li>Not siutable for children and infants</li>
                                                <li>Not smoking</li>
                                                <li>Not pets</li>
                                                <li>Not parties or events</li>
                                                <li>Check-in is anytime after 3PM
                                                </li>
                                            </ul>
                                        </div>
                                        <h2 className={"project_hone_target"}>Projects</h2>
                                        <div className={"block_home_projects"}>
                                            <div className={"columm_one"}>
										<span className={"statuse"}>
											<span className={"greens"}></span>
											Your skils will be useful
										</span>
                                            </div>
                                            <div className={"columm_two"}>
                                                <h2>Poopa & Loopa</h2>
                                                <a href={"#"}>Learn more</a>
                                            </div>
                                        </div>
                                        <hr className={"line_shows"}/>
                                        <h4>Show other</h4>
                                        <hr className={"line_show"}/>
                                        <h2 className={"neighborhood"}>Neighborhood</h2>
                                        <div className={"block_neigh_home_geolocation"}>
                                            <form action={"#"}>
                                                <label htmlFor={"selec"}>Show:</label>
                                                <select name={"sel"} id={"selec"} className={"selec"}>
                                                    <option value={"Gym"} selected={"Gym"}>Gym</option>
                                                    <option value={"-------"}>------</option>
                                                </select>
                                                <input type={'submit'} name={'sub'} style={{display: 'none'}}/>
                                            </form>
                                            <Maps/>
                                        </div>
                                        <h2 className={"ask_house_manager"}>Ask the house manager</h2>
                                        <div className={"block_form_message_for_menager"}>
                                            <form action="">
                                                <input type={'text'} className={'in_info'}
                                                       placeholder={'Name'}/>
                                                <input type={'number'} placeholder={'Phone'}
                                                       className={'in_info'}/>
                                                <input type="email" placeholder="Email"
                                                       className="in_info"/>
                                                <textarea className={'message'}></textarea>
                                                <input placeholder={'Add your ask'} type={'submit'}
                                                       className={'submited'}
                                                       value={'Ask a question'}/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"modal"} hidden={true}>
                    <div className={"modal_dialog"}>
                        <div className={"modal_content"}>
                            <div className={"content_img"}>
                                <img src={'#'} alt={''}/>
                                <img src={'#'} alt={''}/>
                                <img src={'#'} alt={''}/>
                                <img src={'#'} alt={''}/>
                                <img src={'#'} alt={''}/>
                            </div>
                            <div className={"line"}></div>
                            <div className={"content_info"}>
                                <img src={SHLogoT} alt={'SHLogoT'} className="logo_modal"/>
                                <div className={"content_info_home"}>
							<span className={"price_modal"}>
								Alamo Square
							</span>
                                    <span className={"about_home_modal"}>
								609.16
							</span>
                                    <p className={"about_adress_modal"}>
                                        1841 Macross Dr, San Jose, CA 95621
                                    </p>
                                    <span className="status_modal">
								<span className={"green"}></span>
								Есть места на эти даты
							</span>
                                    <a href={"#"} className={"button_modal_book"}>
                                        Book Now
                                    </a>
                                    <a href={"#"} className={"button_modal_mananger"}>
                                        Contact a house manager
                                    </a>
                                    <hr/>
                                    <nav className={"menu_targer_select_option"}>
                                        <ul>
                                            <li className={"active"}>Overview</li>
                                            <li>Rooms</li>
                                            <li>Amenities</li>
                                            <li>Rules</li>
                                            <li>Projects</li>
                                            <li>Neighborhood</li>
                                            <span className={"opasity_effect"}>
									</span>
                                        </ul>
                                    </nav>
                                    <div className={"content_targer"}>
                                        <div className={"foto-block"}>
                                            <img src={'#'} alt={''} className={"overview-foto"}/>
                                            <img src={'#'} alt={''} className={"next_to_img"}/>
                                            <img src={VectorZoom} className={"zoom"} alt={'VectorZoon'}/>
                                        </div>
                                        <div className={"text_content"}>
                                            <h2>Overview</h2>
                                            <p>More than a house, we are a startup founders community. We host
                                                entrepreneurs, but
                                                also engineers and students who want to start their own
                                                business.
                                                Live, learn and
                                                achieve, while getting the full Silicon Valley
                                                experience! <br/>Spacious,
                                                cheerful, sunny rooms of a large house in Atherton,
                                                professionally cleaned daily.
                                                <br/> Upon booking, please introduce yourself, thanks and
                                                welcome to our
                                                community!</p>
                                        </div>
                                        <div className={"house_manager_message"}>
                                            <img src={'#'} alt={''} className={"foto_house_manager"}/>
                                            <h3 className={"name_house_manager"}>
                                                Matt
                                            </h3>
                                            <p className={"message_house_manager"}>
                                                House manager & python dev
                                            </p>
                                        </div>
                                        <h2 className={"title_preview"}>Amenties
                                        </h2>
                                        <div className={"previews_home"}>
                                            <div className={"columm_one"}>
                                                <div className={"block_about_home"}>
                                                    <h3>Parking</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={Car2} alt={'Car2'}/> Paid
                                                            Parking on
                                                            Premises
                                                        </li>
                                                        <li>
                                                            <img src={Parking} alt={'Parking'}/>
                                                            Free Parking on Street
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"block_about_home"}>
                                                    <h3>Safety</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={Fireman} alt={'Fireman'}/> Fire
                                                            Extinguisher
                                                        </li>
                                                        <li>
                                                            <img src={Vector_12} alt={'Vector_12'}/>
                                                            Carbon Monoxide Detector
                                                        </li>
                                                        <li>
                                                            <img src={Vector_12} alt={'Vector_12'}/>
                                                            Smoke detector
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"block_about_home"}>
                                                    <h3>Workspace and TV</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={Notebook} alt={'Notebook'}/> Laptop
                                                            Friendly
                                                            Workspace
                                                        </li>
                                                        <li>
                                                            <img src={Wifi} alt={'Wifi'}/>
                                                            Wireless Internet
                                                        </li>
                                                        <li>
                                                            <img src={Tv} alt={'Tv'}/>
                                                            TV
                                                        </li>
                                                        <li>
                                                            <img src={CableTv} alt={'CableTv'}/>
                                                            Cable TV
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"block_about_home"}>
                                                    <h3>Cleanness</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={HotTub} alt={'HotTub'}/> Hot Tub
                                                        </li>
                                                        <li>
                                                            <img src={Washer} alt={'Washer'}/>
                                                            Washer
                                                        </li>
                                                        <li>
                                                            <img src={Dryer} alt={'Dryer'}/>
                                                            Dryer
                                                        </li>
                                                        <li>
                                                            <img src={Salon} alt={'Salon'}/>
                                                            Hair Dryer
                                                        </li>
                                                        <li>
													<span className={"figure"}>
													</span>
                                                            Iron
                                                        </li>
                                                        <li>
													<span className={"figure"}>
													</span>
                                                            Essentials
                                                        </li>
                                                        <li>
													<span className={"figure"}>
													</span>
                                                            Shampoo
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={"columm_two"}>
                                                <div className={"block_about_home"}>
                                                    <h3>Kithcen</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={MicroWave} alt={'MicroWave'}/>
                                                            Microwave
                                                        </li>
                                                        <li>
                                                            <img src={Diwa} alt={'Diwa'}/>
                                                            Dishwasher
                                                        </li>
                                                        <li>
                                                            <img src={Oven} alt={'Oven'}/>
                                                            Oven
                                                        </li>
                                                        <li>
                                                            <img src={Stove} alt={'Stove'}/>
                                                            Stove
                                                        </li>
                                                        <li>
                                                            <img src={Refrigerator} alt={'Refrigerator'}/>
                                                            Refrigerator
                                                        </li>
                                                        <li><img src={Tv} alt={'Tv'}/>
                                                            Cookware
                                                        </li>
                                                        <li><img src={Dishes} alt={'Dishes'}/>
                                                            Dishes and silverware
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"block_about_home"}>
                                                    <h3>
                                                        Othet amenities
                                                    </h3>
                                                    <ul>
                                                        <li>
                                                            <img src={Fkf} alt={'Fkf'}/> Family/Kid Friendly
                                                        </li>
                                                        <li>
                                                            <img src={FirePlace} alt={'FirePlace'}/>
                                                            Indoor Fireplace
                                                        </li>
                                                        <li>
                                                            <img src={Garden} alt={'Garden'}/>
                                                            Garden or backyard
                                                        </li>
                                                        <li>
                                                            <span className={"figure"}></span>
                                                            Patio or balcony
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"block_about_home"}>
                                                    <h3>Service</h3>
                                                    <ul>
                                                        <li>
                                                            <img src={Cafe} alt={'Cafe'}/> Coffee maker
                                                        </li>
                                                        <li>
                                                            <img src={Ambulance} alt={'Ambulance'}/>
                                                            First Aid Kit
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className={"rules_title_target"}>Rules</h2>
                                        <div className={"block_home_rules"}>
                                            <ul>
                                                <li>Not siutable for children and infants</li>
                                                <li>Not smoking</li>
                                                <li>Not pets</li>
                                                <li>Not parties or events</li>
                                                <li>Check-in is anytime after 3PM
                                                </li>
                                            </ul>
                                        </div>
                                        <h2 className={"project_hone_target"}>Projects</h2>
                                        <div className={"block_home_projects"}>
                                            <div className={"columm_one"}>
										<span className={"statuse"}>
											<span className={"greens"}></span>
											Your skils will be useful
										</span>
                                            </div>
                                            <div className={"columm_two"}>
                                                <h2>Poopa & Loopa</h2>
                                                <a href={"#"}>Learn more</a>
                                            </div>
                                        </div>
                                        <hr className={"line_shows"}/>
                                        <h4>Show other</h4>
                                        <hr className={"line_show"}/>
                                        <h2 className={"neighborhood"}>Neighborhood</h2>
                                        <div className={"block_neigh_home_geolocation"}>
                                            <form action={"#"}>
                                                <label htmlFor={"selec"}>Show:</label>
                                                <select name={"sel"} id={"selec"} className={"selec"}>
                                                    <option value={"Gym"} selected={"Gym"}>Gym</option>
                                                    <option value={"-------"}>------</option>
                                                </select>
                                                <input type={"submit"} name={"sub"} style={{display: 'none'}}/>
                                            </form>
                                        </div>
                                        <h2 className={"ask_house_manager"}>Ask the house manager</h2>
                                        <div className={"block_form_message_for_menager"}>
                                            <form action={""}>
                                                <input type={"text"} className={"in_info"} placeholder="Name"/>
                                                <input type="number" placeholder="Phone"
                                                       className="in_info"/>
                                                <input type="email" placeholder="Email" className="in_info"/>
                                                <textarea className="message"/>
                                                <input placeholder={"Add your ask"} type={"submit"}
                                                       className={"submited"}
                                                       value={"Ask a question"}/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}