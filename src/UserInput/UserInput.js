import React from 'react';

const UserInput = (props) => {
    return(
        <div className="UserInputContainer">
            <h2>Enter Username : </h2>
            <input type="text" className="UserInput" onChange={props.onchange}/> 
        </div> 
    )
}

export default UserInput;