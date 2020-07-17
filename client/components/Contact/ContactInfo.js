import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-box pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-box">
                                <i className="fa fa-map-marker"></i>
                                <div className="content-title">
                                    <h3>Address</h3>
                                    <p>32 st Kilda Road, Melbourne VIC, 3004 Australia</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-box">
                                <i className="fa fa-envelope"></i>
                                <div className="content-title">
                                    <h3>Email</h3>
                                    <p>hello@raxr.com</p>
                                    <p>fax@raxr.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-contact-box">
                                <i className="fa fa-phone"></i>
                                <div className="content-title">
                                    <h3>Phone</h3>
                                    <p>+123(456)123</p>
                                    <p>+123(534)445</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;