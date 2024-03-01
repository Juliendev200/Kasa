import React from 'react';
import { useLocation } from "react-router-dom";



export default function Banner() {
    const location = useLocation();
    if (location.pathname === "/Home") {
        // you can check using equality also (location.pathname === "/about")
        return (<div className="banner">
            <img
                src="src/assets/img/homeimg.png"
                alt="coast-img" />
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
        )
    }
    if (location.pathname === "/Apropos") {
        // you can check using equality also (location.pathname === "/about")
        return (<div className="banner">
            <img
                src="src/assets/img/Aproposimg.png"
                alt="mountain-img" />
        </div>
        )
    }
}