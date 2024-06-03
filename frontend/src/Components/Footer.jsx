import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import "../css/footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="about">
                        <h6>About</h6>
                        <p>
                            Our restaurant has consistently been ranked among the top dining establishments in the city, earning prestigious accolades and five-star ratings from over 30 renowned hotels. We take pride in our exceptional service, exquisite cuisine, and the memorable experiences we provide to our guests, which have led to our outstanding reputation.
                        </p>
                    </div>
                    <div className='subfooter'>
                        <div className="category">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="#">Mughlai cuisine</a></li>
                                <li><a href="#">Chinese Cuisine</a></li>
                                <li><a href="#">Indian Cuisine</a></li>
                                <li><a href="#">South Indian Dishes</a></li>
                                <li><a href="#">Mexican Cuisine</a></li>
                            </ul>
                        </div>

                        <div className="quick">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Location</a></li>
                                <li><a href="#">Owner</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="bottom container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                            Copyright &copy; 2024 All Rights Reserved by
                            <a href="#"> Restaurant</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><FaFacebook className='icon' /></a></li>
                            <li><a className="twitter" href="#"><FaXTwitter className='icon' /></a></li>
                            <li><a className="dribbble" href="#"><FaGoogle className='icon' /></a></li>
                            <li><a className="linkedin" href="#"><MdLocationPin className='icon' /></a></li>
                            <li><a className="dribbble" href="#"><FaYoutube className='icon' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;