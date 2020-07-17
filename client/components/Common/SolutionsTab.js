import React, { Component } from 'react';
import Link from 'next/link';

class SolutionsTab extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="tab-section ptb-100">
                <div className="container">
                    <div className="tab solutions-list-tab">
                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>Research & Solution</span>
                            </li>

                            <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                <span>Design & Strategy</span>
                            </li>

                            <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                                <span>Analytics AI</span>
                            </li>

                            <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                                <span>Cloud Deployment</span>
                            </li>
                        </ul>

                        {/* Tab Content */}
                        <div className="tab_content">
                            {/* Tabs item 1 */}
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>Enterprise AI & Data Platform Solutions</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Innovation idea the latest business technology
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Safe secure services for your online email account
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Digital content marketing online
                                                </li>
                                            </ul>

                                            <div className="tab-btn">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="tab-image-right">
                                            <img src="/images/tab-solution.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs item 2 */}
                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image-left">
                                            <img src="/images/tab-solution.png" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>Design & Strategy Data Platform Solutions</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Innovation idea the latest business technology
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Safe secure services for your online email account
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Digital content marketing online
                                                </li>
                                            </ul>

                                            <div className="tab-btn">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs item 3 */}
                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>Analytics AI & Data Platform Solutions</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Innovation idea the latest business technology
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Safe secure services for your online email account
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Digital content marketing online
                                                </li>
                                            </ul>

                                            <div className="tab-btn">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="tab-image-right">
                                            <img src="/images/tab-solution.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs item 4 */}
                            <div id="tab4" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image-left">
                                            <img src="/images/tab-solution.png" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>Cloud Deployment AI & Data Platform Solutions</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Innovation idea the latest business technology
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Safe secure services for your online email account
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Digital content marketing online
                                                </li>
                                            </ul>

                                            <div className="tab-btn">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SolutionsTab;