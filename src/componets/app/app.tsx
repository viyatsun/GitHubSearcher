import React, {useState} from 'react';
import './app.css';

import User from '../user';
import RepoList from '../repo-list';
import AllUsers from '../all-users';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


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
                <Router>
                    <Link to ='/'><h3>GitHub Searcher</h3></Link>
                    <Route path = '/' exact render = {()=><AllUsers update = {update}/>} />
                    <Route path = '/user' exact render = {()=><User login = {login} reposQuantity = {reposQuantity}/>} />
                    <Route path = '/user' exact render = {()=><RepoList login = {login} quantityUpdate = {quantityUpdate}/>} />
                </Router>
            </div>
        )
};

export default App;