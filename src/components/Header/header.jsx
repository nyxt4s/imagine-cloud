import React from "react";
import './header.css';

const Header = () => {
    return (
        <section className="header">
             <a href="" className="logo">sasa</a>
                <nav className="navbar">
                <a className="navbar-tab" href="">Inicio</a>
                <a className="navbar-tab" href="">Que hacemos</a>
                <a className="navbar-tab" href="">Foro</a>
                <a className="navbar-tab" href="">Contactanos</a>
               </nav>
        </section>
    )
}

export default Header