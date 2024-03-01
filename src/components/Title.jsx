import React from 'react';

export default function Title({ localisation, title }) {
    return (
        <div>
            <h1>{title} </h1>
            <p> {localisation}</p>
        </div>
    );
};

