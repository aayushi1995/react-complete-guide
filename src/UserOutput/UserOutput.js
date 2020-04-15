import React from 'react';


const UserOutput = (props) => {
        return (
            <div className="UserOutputBox">
                <p>
                    This is a username : {props.username}
                </p>
            </div>
        )
}

export default UserOutput;