import  react from 'react';
import { Link } from "react-router-dom";
import "../Home.css";
function Navbar() {
    return (
        <nav className="navbar">
                <div className="logo">
                    <Link to="/" className="logo-name">EDGECUT</Link>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/furnitures">FURNITURES</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/login">LOGIN</Link></li>
                    </ul>
                </div>
            </nav>
    );
    }

    export default Navbar;