import React from 'react';

const User = (props) => {
    const user = props.user;
    
    return (
        <div>
            {
               <h1>{user.name}</h1> 
            }
        </div>
    );
};

export default User;