import React from 'react';
import './all-users-item.css'

type AllUsersItemType = {
    login:string,
    avatar:string,
    onClick: (id:React.MouseEvent)=>void
};

const AllUsersItem = ({login,avatar, onClick}:AllUsersItemType) =>{

    return (
        <span className = 'elements' onClick = {onClick} >
            <span>{login}</span>
            <img alt = 'img' src = {avatar}/>
        </span>
    )
};

export default AllUsersItem;