import React, { Component } from 'react';

class WorkingProcess extends Component {
    render() {
        return (
            <section className="work-section pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Our Working Process</span>
                        <h2>How Does Work Raxr</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="work-item">
                                <div className="work-image">
                                    <img src="/images/work/work1.png" alt="image" />
                                </div>
                                <div className="work-content">
                                    <h3>Planning</h3>
                                    <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="work-item">
                                <div className="work-image">
                                    <img src="/images/work/work2.png" alt="image" />
                                </div>
                                <div className="work-content">
                                    <h3>Design & Execution</h3>
                                    <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="work-item">
                                <div className="work-image">
                                    <img src="/images/work/work3.png" alt="image" />
                                </div>
                                <div className="work-content">
                                    <h3>Analytics Project</h3>
                                    <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkingProcess;