import React from 'react';
import { Link } from 'react-scroll';
import "../css/hero.css";
import place1 from "../asset/place1.jpg"
import place2 from "../asset/place2.jpeg"
import place3 from "../asset/place3.jpg"
import place4 from "../asset/place4.jpg"

function Hero() {
    return (
        <div>
            <section className="showcase-area" id="showcase">
                <div className="showcase-container">
                    <h1 className="main-title" id="home">Delight in Every Bite</h1>
                    <p>A Journey of Flavors Awaits You.</p>
                    <Link to="food-menu" spy={true} smooth={true} duration={500} className="btn btn-primary">
                        Menu</Link>
                </div>
            </section>
            <section id="about">
                <div className="about-wrapper container">
                    <div className="about-text">
                        <p className="small">About Us</p>
                        <h2>Delicious, Healthy Meals Made with Love for Over 10 Years</h2>
                        <p>
                            Welcome to our restaurant, where we've been serving delightful, healthy meals for over a decade. We pride ourselves on using fresh, locally sourced ingredients to craft dishes that satisfy and nourish. Our talented chefs prepare each meal with love and attention to detail. Whether it's a special occasion or a casual meal with friends, we offer a warm, welcoming atmosphere for every dining experience. Join us and taste the difference!
                        </p>
                    </div>
                    <div className="about-img img_container">
                        <img class="container__img img-1" src={place1}></img>
                        <img class="container__img img-2" src={place2}></img>
                        <img class="container__img img-3" src={place3}></img>
                        <img class="container__img img-4" src={place4}></img>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;