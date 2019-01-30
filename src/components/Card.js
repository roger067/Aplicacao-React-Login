import React from 'react';

const Card = props => {
    return (
        <div className="card">
            <div className="header">
                <p className="text-center text-header">{props.title}</p>
            </div>
            {props.children}
        </div>
    );
}

export default Card