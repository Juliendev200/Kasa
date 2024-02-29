import React from 'react';
import { NavLink } from "react-router-dom"

export default function Navigation() {
    return (
        <div id="header">
            <img src="../src/assets/img/logo.png" alt="logo-casa" />
            <nav>
                <ul>
                    <li>
                        <NavLink to={`/Home`}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}> Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/Apropos`}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}> A propos </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
