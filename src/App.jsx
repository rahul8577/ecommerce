import React from 'react';
import HomePage from './pages/homepage/HomePage.component';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


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
                <Route component={Hats} path="/hats" />
                <Route component={HomePage} path="/" />
            </Switch>
        </div>
    );
}

export default App;