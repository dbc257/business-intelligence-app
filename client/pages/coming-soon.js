import React, { Component } from 'react';
import Link from 'next/link';

class CmingSoon extends Component {

    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    };

    commingSoonTime = () => {
        let endTime = new Date("August 23, 2022 17:00:00 PDT");
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        this.myInterval = setInterval(() => { 
            this.commingSoonTime();
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.myInterval);
    };

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <React.Fragment>
                <section className="coming-soon-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="coming-soon-content">
                                    <h1>Our website is coming soon</h1>
                                    <p>Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your patience.</p>

                                    <form onSubmit={this.onSubmit}>
                                        <input type="email" name="email" id="email" className="email-input" placeholder="Enter your email" />
                                        <button type="submit" className="submit-btn">Submit</button>
                                    </form>

                                    <div id="timer">
                                        <div id="days">{this.state.days} <span>Days</span></div>
                                        <div id="hours">{this.state.hours} <span>Hours</span></div>
                                        <div id="minutes">{this.state.minutes} <span>Minutes</span></div>
                                        <div id="seconds">{this.state.seconds} <span>Seconds</span></div>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="social-list">
                        <li className="list-heading">Follow us for update:</li>
                        <li>
                            <Link href="#">
                                <a className="facebook" target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="twitter" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="linkedin" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="instagram" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}

export default CmingSoon;