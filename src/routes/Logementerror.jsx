import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Logementerror() {
    return (
        <div>
            <div className="error-page">
                <h1>404</h1>
                <h3>Oups! La page que vous demandez n'existe pas.</h3>
                <NavLink to={`/Home`} className="comebackhome">
                    Retourner sur la page d’accueil
                </NavLink>
            </div >
        </div>
    );
};

