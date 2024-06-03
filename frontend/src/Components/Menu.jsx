import React, { useState, useEffect } from 'react';
import "../css/menu.css";
import menuData from '../asset/data.json';

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems(menuData.menu);
    }, []);

    return (
        <div>
            <section id="food-menu">
                <h2 className="food-menu-heading">Our Top Menu</h2>
                <div className="food-menu-container container">
                    {menuItems.map((item, index) => (
                        <div className="food-menu-item" key={index}>
                            <div className="food-img">
                                <img src={item.image} alt="Pic" />
                            </div>
                            <div className="food-description">
                                <h2 className="food-title">{item.name}</h2>
                                <p className='desc'>{item.description}</p>
                                <p className="food-price">Price: {item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Menu;