import React, {useState} from 'react';
import './app.css';

import User from '../user';
import RepoList from '../repo-list';
import AllUsers from '../all-users';


const App = () => {
    const [login, setLogin]  = useState<string>('');
    const [reposQuantity, setReposQuantity] = useState<number>(0);

    const quantityUpdate = (length:number) =>{
        setReposQuantity(length)
    }

    const update = (login:string) => {
        setLogin(login)
    }

        return(
            <div className = 'app'>
                <h3>GitHub Searcher</h3>
                <User login = {login} reposQuantity = {reposQuantity}/>
                <RepoList login = {login} quantityUpdate = {quantityUpdate}/>
                <AllUsers update = {update}/>
            </div>
        )
};

export default App;