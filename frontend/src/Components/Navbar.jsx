import React from 'react';
import '../css/navbar.css';
import logo from "../asset/logo.jpg";
import { Link } from "react-scroll";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange() {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" id="menu-checkbox" checked={this.state.checked}
                        onChange={this.handleCheckboxChange} />
                    <div className="hamburger-lines" onClick={this.handleCheckboxChange}>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className={`menu-items ${this.state.checked ? 'show' : ''}`}>
                        <li>
                            <Link to="home" spy={true} smooth={true} duration={500} onClick={this.handleCheckboxChange}>
                                Home</Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} duration={500} onClick={this.handleCheckboxChange}>
                                About</Link>
                        </li>
                        <li>
                            <Link to="food" spy={true} smooth={true} duration={500} onClick={this.handleCheckboxChange}>
                                Category</Link>
                        </li>
                        <li>
                            <Link to="food-menu" spy={true} smooth={true} duration={500} onClick={this.handleCheckboxChange}>
                                Menu</Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} duration={500} onClick={this.handleCheckboxChange}>
                                Contact</Link>
                        </li>
                    </ul>
                    <Link to="home" spy={true} smooth={true} duration={500} onClick={this.handleCheckboxChange}>
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>

                </div>
            </nav>
        );
    }
}

export default Navbar;