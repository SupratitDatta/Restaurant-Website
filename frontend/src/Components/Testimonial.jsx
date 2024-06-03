import React, { useState, useEffect } from 'react';
import "../css/testimonial.css";
import testimonialsData from '../asset/testimonials.json';
import { FaStar } from "react-icons/fa6";

function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        setTestimonials(testimonialsData.testimonials);
    }, []);

    return (
        <div>
            <section id="testimonials">
                <h2 className="testimonial-title">What Our Customers Say</h2>
                <div className="testimonial-container container">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-box" key={index}>
                            <div className="customer-detail">
                                <div className="customer-photo">
                                    <img src={testimonial.photo} alt="" />
                                    <p className="customer-name">{testimonial.name}</p>
                                </div>
                                <div className='star'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div className="star-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span className="fa fa-star checked" key={i}></span>
                                ))}
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Testimonial;