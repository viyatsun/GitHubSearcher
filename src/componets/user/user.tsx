import React,{useState,useEffect} from 'react';
import axios from 'axios';

import './user.css';

type UserType = {
    login:string,
    reposQuantity:number
}

const User = ({login, reposQuantity}:UserType) => {

    const [data, setData]  = useState<any>('');

    useEffect(()=>{
        if (login === ''){
            return
        } else {   
        let cancelled = false
        axios.get(`https://api.github.com/users/${login}`)
        .then((res)=>!cancelled && setData(res.data))
        .catch((err)=>console.log(err));
        return () =>{cancelled = true}
    }},[login])


    const {login:name, bio, followers, following, email, avatar_url:avatar,location } = data;
    
    return(
        <React.Fragment>
        <div className = 'user'>
            <div>
                <img alt = 'image' src={avatar}></img>
            </div>
            <ul className = 'user-bio'>
                <li>{name}</li>
                <li>Repositories {reposQuantity}</li>
                <li>{email}</li>
                <li>{location}</li>
                <li>Folowers {followers} </li>
                <li>Following {following}</li>
            </ul>
        </div>

        <div className = 'text'>{bio}</div>
   
        </React.Fragment>
    )
}

export default User;