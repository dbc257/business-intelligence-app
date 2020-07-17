import React, { Component } from 'react';
import Link from 'next/link';
import BlogSideBar from './BlogSideBar';

class BlogCardThree extends Component {
    render() {
        return (
            <section className="blog-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left-blog-sidebar">
                                <BlogSideBar />
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="blog-item">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog1.png" alt="image" />
                                            </a>
                                        </Link>
        
                                        <div className="blog-content">
                                            <ul className="meta-tags">
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fa fa-user-alt"></i> 
                                                            Admin
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fas fa-calendar-week"></i>
                                                            7 Dec 2020
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="far fa-comments"></i> 
                                                    3 Comments
                                                </li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        Startup marketing solution for business owner
                                                    </a>
                                                </Link>
                                            </h3>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                        
                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More
                                                    <i className="fa fa-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div> 
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="blog-item">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog2.png" alt="image" />
                                            </a>
                                        </Link>
        
                                        <div className="blog-content">
                                            <ul className="meta-tags">
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fa fa-user-alt"></i> 
                                                            Admin
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fas fa-calendar-week"></i>
                                                            7 Dec 2020
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="far fa-comments"></i> 
                                                    3 Comments
                                                </li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        Web developement best work in future world
                                                    </a>
                                                </Link>
                                            </h3>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                        
                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More
                                                    <i className="fa fa-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div> 
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="blog-item">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog3.png" alt="image" />
                                            </a>
                                        </Link>
        
                                        <div className="blog-content">
                                            <ul className="meta-tags">
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fa fa-user-alt"></i> 
                                                            Admin
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fas fa-calendar-week"></i>
                                                            7 Dec 2020
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="far fa-comments"></i> 
                                                    3 Comments
                                                </li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        Creative solutions to improve your business!
                                                    </a>
                                                </Link>
                                            </h3>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                        
                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More
                                                    <i className="fa fa-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="blog-item">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog4.png" alt="image" />
                                            </a>
                                        </Link>
        
                                        <div className="blog-content">
                                            <ul className="meta-tags">
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fa fa-user-alt"></i> 
                                                            Admin
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fas fa-calendar-week"></i>
                                                            7 Dec 2020
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="far fa-comments"></i> 
                                                    3 Comments
                                                </li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        Making peace with the feast or famine of freelancing
                                                    </a>
                                                </Link>
                                            </h3>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                        
                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More
                                                    <i className="fa fa-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="blog-item">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog5.png" alt="image" />
                                            </a>
                                        </Link>
        
                                        <div className="blog-content">
                                            <ul className="meta-tags">
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fa fa-user-alt"></i> 
                                                            Admin
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fas fa-calendar-week"></i>
                                                            7 Dec 2020
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="far fa-comments"></i> 
                                                    3 Comments
                                                </li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        Instagram feed add to your WordPress site
                                                    </a>
                                                </Link>
                                            </h3>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                        
                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More
                                                    <i className="fa fa-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="blog-item">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog6.png" alt="image" />
                                            </a>
                                        </Link>
        
                                        <div className="blog-content">
                                            <ul className="meta-tags">
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fa fa-user-alt"></i> 
                                                            Admin
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a>
                                                            <i className="fas fa-calendar-week"></i>
                                                            7 Dec 2020
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="far fa-comments"></i> 
                                                    3 Comments
                                                </li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        I used the web for a day on a 50 mb budget
                                                    </a>
                                                </Link>
                                            </h3>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                        
                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More
                                                    <i className="fa fa-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Pagination */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area">
                                        <Link href="#">
                                            <a className="prev page-numbers">
                                                <i className="fas fa-angle-double-left"></i>
                                            </a>
                                        </Link>

                                        <Link href="#">
                                            <a className="page-numbers">1</a>
                                        </Link>

                                        <span className="page-numbers current">2</span>

                                        <Link href="#">
                                            <a className="page-numbers">3</a>
                                        </Link>

                                        <Link href="#">
                                            <a className="page-numbers">4</a>
                                        </Link>

                                        <Link href="#">
                                            <a className="next page-numbers">
                                                <i className="fas fa-angle-double-right"></i>
                                            </a>
                                        </Link>
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

export default BlogCardThree;