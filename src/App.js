import React, { Component } from 'react';
import Header from './Components/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Signup from './Signin/Signup';
import Signin from './Signin/Signin';
import Learn from './Learn/Learn';
import History from './Learn/History';
import Teach from './Teach/Teach';
import Profile from './Profile/Profile';
import EditProfile from './Profile/ProfileEdit'

class App extends React.Component {
    state = {
        value: 0
    };
    render() {
        
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Signin} />
                        <Route path='/Signup' component={Signup} />
                        <Route exact path='/Learn' component={Learn} />
                        <Route path='/Learn/History' component={History} />
                        <Route path='/Teach' component={Teach} />
                        <Route path='/Profile' component={Profile} />
                        <Route path='/EditProfile' component={EditProfile} />
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}

export default App