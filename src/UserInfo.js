import React from 'react'
import Avatar from './Avatar'
export default function UserInfo( props) {
    return (
        <div className='UserInfo'>
            <Avatar user={props.user} />
            <div className='UserInfo__name'>{props.user.name}</div>
        </div>
    )
}
