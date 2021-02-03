import React from 'react';
import User from '../user';
import RepoList from '../repo-list';

type VisibleUserType = {
    login:string
}

const VisibleUser = ({login}:VisibleUserType) => {
    if (login === '') {
        return (
            <h2>Please, select a User </h2>
        )
    }
    return (
       <React.Fragment>
           <User login = {login}/>
           <RepoList login = {login}/>
       </React.Fragment>
    )
}

export default VisibleUser;
