import React, { Component } from 'react';

class FaqContactForm extends Component {
    render() {
        return (
            <div className="faq-contact-section pb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Do You Have Any Questions</h2>
                    </div>

                    <div className="faq-contact-form">
                        <div className="contact-form">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" className="form-control" required placeholder="Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" id="email" className="form-control" required placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="phone_number" required className="form-control" placeholder="Phone" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="msg_subject" className="form-control" required placeholder="Subject" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" rows="6" required placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mt-2">
                                        <button type="submit" className="submit-btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default FaqContactForm;