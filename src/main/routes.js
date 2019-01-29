import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from '../modules/auth/Login';
import UserPage from '../modules/users/UserPage';
import User from '../modules/users/User';
import Products from '../modules/products/Products';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/UserPage' component={UserPage} />
            <Route exact path='/User' component={User} />
            <Route exact path='/Products' component={Products} />
            <Redirect from="*" to="/" />
        </Switch>        
    </BrowserRouter>
)