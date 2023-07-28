import React from 'react';
import HomePage from './pages/homepage/HomePage.component';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Shop from './pages/shop/Shop.component'


const Hats = (props) => {
    console.log(props)
    return (
        <h1>hats page</h1>
    );
}

const App = () => {

    return (
        <div>
            <Switch>
                <Route exact component={HomePage} path="/" />
                <Route component={Shop} path="/shop" />
            </Switch>
        </div>
    );
}

export default App;