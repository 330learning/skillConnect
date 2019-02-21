import React, { Component } from 'react';
import Header from './Components/Header';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Signup from './Login/Signup';
import Login from './Login/Login';
import Learn from './Learn/Learn';
import History from './Learn/History';

class App extends Component{
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Header/>
                <Switch>
                    <Route exact path ='/' component={Login}/>
                    <Route path = '/Signup' component={Signup}/>
                    <Route exact path = '/Learn' component={Learn}/>
                    <Route path = '/Learn/History' component={History}/>
                </Switch>

            </div>
            </BrowserRouter>
        
        )
    }
}

export default App