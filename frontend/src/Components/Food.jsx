import React from 'react'
import "../css/food.css"
import food1 from "../asset/food1.jpg"
import food2 from "../asset/food2.png"
import food3 from "../asset/food3.jpg"

function Food() {
    return (
        <div>
            <section id="food">
                <h2>Types of food</h2>
                <div class="food-container container">
                    <div class="food-type thali">
                        <div class="img-container">
                            <img src={food1} alt="error" />
                            <div class="img-content">
                                <h3>Thali</h3>
                                <a href="https://en.wikipedia.org/wiki/Fruit" class="btn btn-primary" target="blank">learn
                                    more</a>
                            </div>
                        </div>
                    </div>
                    <div class="food-type mocktails">
                        <div class="img-container">
                            <img src={food2} alt="error" />
                            <div class="img-content">
                                <h3>Mocktails</h3>
                                <a href="https://en.wikipedia.org/wiki/Vegetable" class="btn btn-primary" target="blank">learn
                                    more</a>
                            </div>
                        </div>
                    </div>
                    <div class="food-type desserts">
                        <div class="img-container">
                            <img src={food3} alt="error" />
                            <div class="img-content">
                                <h3>Desserts</h3>
                                <a href="https://en.wikipedia.org/wiki/Grain" class="btn btn-primary" target="blank">learn
                                    more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Food