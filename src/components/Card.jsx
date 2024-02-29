import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ logement }) => {
    return (
        <NavLink to={`/logement/${logement.id}`} className='card'>
            <img src={logement.cover} alt={"image de " + logement.title} />
            <h3> {logement.title} </h3>
        </NavLink>
    );
};


export default Card;