import React, { Component } from 'react';
import Header from './Components/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Signup from './Signin/Signup';
import Signin from './Signin/Signin';
import Learn from './Learn/Learn';
import History from './Learn/History';
import Teach from './Teach/Teach';
import Art from './Learn/Art'
import Design from './Learn/Design'
import Literature from './Learn/Literature'
import Math from './Learn/Math';
import Programming from './Learn/Programming';
import Speech from './Learn/Speech';
import Sports from './Learn/Sports';
import Profile from './Profile/Profile';
import EditProfile from './Profile/ProfileEdit';
import "./App.css";

class App extends Component {
    state = {
        value: 0
    };
    render() {
        console.log(process.env.PUBLIC_URL);
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="main">
                <Header />
                <Switch>
                    <Route exact path ='/' component={Signin}/>
                    <Route path = '/Signup' component={Signup}/>
                    <Route exact path = '/Learn' component={Learn}/>
                    <Route path = '/Learn/History' component={History}/>
                    <Route path = '/Learn/Math' component={Math}/>
                    <Route path = '/Learn/Programming' component={Programming}/>
                    <Route path = '/Learn/Speech' component={Speech}/>
                    <Route path= '/Learn/Art' component={Art} />
                    <Route path= '/Learn/Literature' component={Literature} />
                    <Route path= '/Learn/Design' component={Design} />
                    <Route path= '/Learn/Sports' component={Sports} />
                    <Route path = '/Profile' component={Profile}/>
                    <Route path='/Teach' component={Teach} />
                    <Route path= '/EditProfile' component={EditProfile} />
                </Switch>
            </div>
            </BrowserRouter>

        )
    }
}

export default App