import React from 'react'
import UserInfo from './UserInfo'
export default function Comment(props) {
    return (
        <div className='comment'>
            <div className='UserInfo'>
                <UserInfo user={props.author}/>
            </div>
            {/* <div className='comment__text'>{formate(props.date)}</div> */}
        </div>
    )
}
