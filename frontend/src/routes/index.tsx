import React from 'react';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CreatePoint from '../pages/CreatePoint';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/create-point" component={CreatePoint} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;