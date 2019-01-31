import React from 'react';

const CardInfo = props => {
    return (
        <div className="card-info">
            <div className="card-header">
                <div className="text-center">{props.title}</div>
            </div>
            <div className="card-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className="card-footer">
                {props.children}
            </div>
        </div>
    );
}

export default CardInfo