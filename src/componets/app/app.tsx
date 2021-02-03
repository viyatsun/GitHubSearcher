import React, {useState} from 'react';
import './app.css';

import AllUsers from '../all-users';
import VisibleUser from '../visible-user';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const App = () => {
    const [login, setLogin]  = useState<string>('');
   
    const update = (login:string) => {
        setLogin(login)
    }

        return(
            <div className = 'app'>
                
                <Router>
                    <Link to ='/'><h3>GitHub Searcher</h3></Link>
                    <Route path = '/' exact render = {()=><AllUsers update = {update}/>} />
                    <Route path = '/user' exact render = {()=><VisibleUser login = {login}/>} />
                </Router>
            </div>
        )
};

export default App;