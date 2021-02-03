import React, {useState, useEffect} from 'react';
import AllUsersItem from '../all-users-item';
import './all-users.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

type allUsersType = {
    update: (login:string)=> void
}

const  AllUsers = ({update}:allUsersType) => {

    const [data, setData]  = useState<any[]>([]);
    const [term, setTerm] = useState<string>('');
    
    
    useEffect(()=>{
        if (term === '') {
            return
        } else {
        let cancelled = false
        axios.get(`https://api.github.com/search/users?q=${term}`)
        .then((res)=>!cancelled && setData(res.data.items))
        .catch((err)=>console.log(err));
        return () =>{cancelled = true}
    }},[term])

    const component:any[] = data.map((el)=>{
        return(
            <li key = {el.id}  className="list-group-item"> <Link to = 'user'><AllUsersItem login = {el.login} avatar = {el.avatar_url} onClick = {()=>update(el.login)}/></Link></li>
        )
    })

           
    const onChanged = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value)
    };

        return(
            <React.Fragment>
                <div className = 'input-field'>
                    <input className = 'input' type = 'text' placeholder={'Search for Users'} onChange = {onChanged} value = {term}></input> 
                </div>

                <ul className="list-group todo-list">
                    {component}
                </ul>
            </React.Fragment>
        )
    
};

export default AllUsers;