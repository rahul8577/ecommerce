import React from 'react';
import HomePage from './pages/homepage/HomePage.component';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Shop from './pages/shop/Shop.component'
import Header from './components/header/Header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/SignInAndSignOut.component'
import { auth } from './firebase/firebase.utils';
import { createUserProfile, db } from './firebase/firebase.utils';
import { onSnapshot, doc } from 'firebase/firestore';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.action'

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {

            if (authUser) {
                createUserProfile(authUser);
                onSnapshot(doc(db, `users/${authUser.uid}`), snapshot => {
                    this.props.setCurrentUser({
                        currentuser: {
                            id: snapshot.id,
                            ...snapshot.data(),
                        }
                    }, () => {
                        console.log(this.state)
                    })
                })
            } else {

                this.props.setCurrentUser(authUser)
            }

        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact component={HomePage} path="/" />
                    <Route component={Shop} path="/shop" />
                    <Route exact path="/signin" render={
                        () => this.props.currentuser ? (<Redirect to="/" />) : (<SignInAndSignOut />)} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentuser: user.currentuser
})

const mapDispatchToProps = (dispatch) =>
({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App); 