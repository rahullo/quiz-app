import React from 'react';

import './apps.style.css'

const AppCard = ({ app, index}) => {
    return (
        <div className='app-card' index = {index}>
            <h2>{app.title}</h2>
            <p>{app.description}</p>
            <button>Download</button>
        </div>
    );
};

export default AppCard;