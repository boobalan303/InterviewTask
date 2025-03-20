import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import p1 from "./Assets/cover.jpeg";

function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <div className="content-text">
                    <h1>FIND YOUR ALL FURNITURES NEEDS</h1>
                    <p>A furniture shop is a treasure trove of possibilities, showcasing a diverse range of pieces that cater to comfortf</p>
                    <div className="btn-shop">
                    <Link to="/About" className="btn-about">About Us</Link>
                    <Link to="/contact" className="btn-contact">contact us</Link>
                    </div>
                </div>
                <div className="content-image">
                    <img src={p1} alt="home" />
                </div> 
            </div>
        </div>
    );
}

export default Home;