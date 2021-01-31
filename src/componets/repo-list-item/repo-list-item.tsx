import React from 'react';
import './repo-list-item.css';

type RepoListItemType = {
    name:string,
    forks:number,
    star:number,
    url:string
}

const RepoListItem = ({name, forks, star,url}:RepoListItemType) => {
    return (
        <div className = 'elements'>
            <div><a href={url}>{name}</a></div>
            <div className = 'elements-position'> 
               <div>{forks} Forks</div> 
               <div>{star} Stars</div>
            </div>
        </div>

    )
}

export default RepoListItem;