import React, { Component } from 'react';
import Header from './Components/Header';
import Login from './Login/Login';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Signup from './Login/Signup';

class App extends Component{
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Header/>
                <Switch>
                    <Route exact path ='/' component={Login}/>
                    <Route path = '/Signup' component={Signup}/>
                </Switch>

            </div>
            </BrowserRouter>
        
        )
    }
}

export default App