import React, { Component } from 'react';
import Header from './Components/Header';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Signup from './Signin/Signup';
import Signin from './Signin/Signin';
import Learn from './Learn/Learn';
import History from './Learn/History';
import Math from './Learn/Math';
import Programming from './Learn/Programming';
import Profile from './Profile/Profile';

class App extends Component{
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Header/>
                <Switch>
                    <Route exact path ='/' component={Signin}/>
                    <Route path = '/Signup' component={Signup}/>
                    <Route exact path = '/Learn' component={Learn}/>
                    <Route path = '/Learn/History' component={History}/>
                    <Route path = '/Learn/Math' component={Math}/>
                    <Route path = '/Learn/Programming' component={Programming}/>
                    <Route path = '/Profile' component={Profile}/>
                </Switch>
            </div>
            </BrowserRouter>
        
        )
    }
}

export default App