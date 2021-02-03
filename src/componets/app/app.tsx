import React from 'react';
import './app.css';

import AllUsers from '../all-users';
import VisibleUser from '../visible-user';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


const App = () => {
    const [login, setLogin]  = useLocalStorage('user','');
   
    const update = (login:string) => {
        setLogin(login)
    }

        return(
            <div className = 'app'>
                
                <Router  basename={process.env.PUBLIC_URL}>
                    <Link to ='/'><h3>GitHub Searcher</h3></Link>
                    <Route path = '/' exact render = {()=><AllUsers update = {update}/>} />
                    <Route path = '/user' exact render = {()=><VisibleUser login = {login}/>} />
                </Router>
            </div>
        )
};

export default App;