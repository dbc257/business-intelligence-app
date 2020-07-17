import React, { Component } from 'react';
import Link from 'next/link';

class ProjectsContent extends Component {
    render() {
        return (
            <section className="project-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Project</span>
                        <h2>Our Latest Project</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src="/images/projects/project1.png" alt="image" />
                                </div>
            
                                <div className="image-hover">
                                    <div className="text">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Data is the new science big data holds the answer</a>
                                            </Link>
                                        </h3>
                                        <p>Data Analysis</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src="/images/projects/project2.png" alt="image" />
                                </div>
            
                                <div className="image-hover">
                                    <div className="text">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Data is the new science big data holds the answer</a>
                                            </Link>
                                        </h3>
                                        <p>Business Intelligence</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src="/images/projects/project3.png" alt="image" />
                                </div>
            
                                <div className="image-hover">
                                    <div className="text">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Data is the new science big data holds the answer</a>
                                            </Link>
                                        </h3>
                                        <p>Data Management</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src="/images/projects/project4.png" alt="image" />
                                </div>
            
                                <div className="image-hover">
                                    <div className="text">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Data is the new science big data holds the answer</a>
                                            </Link>
                                        </h3>
                                        <p>Data Analysis</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src="/images/projects/project5.png" alt="image" />
                                </div>
            
                                <div className="image-hover">
                                    <div className="text">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Data is the new science big data holds the answer</a>
                                            </Link>
                                        </h3>
                                        <p>Business Intelligence</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src="/images/projects/project6.png" alt="image" />
                                </div>
            
                                <div className="image-hover">
                                    <div className="text">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Data is the new science big data holds the answer</a>
                                            </Link>
                                        </h3>
                                        <p>Data Management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectsContent;