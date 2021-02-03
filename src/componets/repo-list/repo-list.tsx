import React, {useState, useEffect} from 'react';
import './repo-list.css';
import axios from 'axios';
import RepoListItem from '../repo-list-item';

type RepoListType = {
    login:string
};


const RepoList = ({login}:RepoListType) =>{


    const [data, setData]  = useState<any[]>([]);
    const [term, setTerm] = useState<string>('');
    

    useEffect(()=>{
        if(login === '') {
            return
        } else {
        let cancelled = false
        axios.get(`https://api.github.com/users/${login}/repos`)
        .then((res)=>!cancelled && setData(res.data))
        .catch((err)=>console.log(err));
        return () =>{cancelled = true}
    }},[login]);
    
    const onChanged = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value)
    };

    const search = (items:any[], term:string) => {
        if (term.length === 0 ) {
            return items
        }
        
        return items.filter((item)=>{
            return item.full_name.indexOf(term) > -1;
        })
    } 
    
    const visibleItems = search(data, term);

    const components = visibleItems.map((el)=>{
        return(
            <li key = {el.id}  className="list-group-item" ><RepoListItem name = {el.full_name} forks = {el.forks} star = {el.stargazers_count} url= {el.html_url}/></li>
        )   
    });

    


    return(
        <React.Fragment>
            <div className = 'input-field'>
                <input className = 'input' type = 'text' placeholder={`Search for User's Repositories`} onChange = {onChanged} value = {term}></input> 
            </div>
            <ul className="list-group todo-list">
               {components}
            </ul>
    </React.Fragment>
    )
};

export default RepoList;