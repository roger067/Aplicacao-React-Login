import React from 'react';

const Inputs = props => {
    return(
        <div>
            <div className="form-group">
                <input type={props.typeInput} className="form-control" id={props.idInput} placeholder={props.placeholder}></input>
            </div>
        </div>
    );
}

export default Inputs