import React from 'react';
import HomePage from './pages/homepage/HomePage.component';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Shop from './pages/shop/Shop.component'
import Header from './components/header/Header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/SignInAndSignOut.component'
import {auth} from './firebase/firebase.utils';

class App extends React.Component {

    constructor(){
        super();

        this.state={
            currentuser:null
        }
    }

    unsubscribeFromAuth=null;

    componentDidMount(){
       this.unsubscribeFromAuth= auth.onAuthStateChanged((user)=>{
            this.setState({currentuser:user})
            console.log(user)
        })
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render() {

        return (
            <div>
                <Header currentuser={this.state.currentuser} />
                <Switch>
                    <Route exact component={HomePage} path="/" />
                    <Route component={SignInAndSignOut} path="/signin" />
                    <Route component={Shop} path="/shop" />
                </Switch>
            </div>
        );
    }
}

export default App;