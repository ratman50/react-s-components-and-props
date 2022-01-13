import React from 'react'

export default function Avatar(props) {
    return (
        <img
        className='Avatar'
        src={props.user.avatarURL}
        alt={props.user.name}
            
        />
    );
}
