import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from '../modules/auth/Login';
import UserPage from '../modules/users/UserPage';
import User from '../modules/users/User';
import UserForm from '../modules/users/UserForm';
import Products from '../modules/products/Products';
import ProductsForm from '../modules/products/ProductsForm';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/UserPage' component={UserPage} />
            <Route exact path='/User' component={User} />
            <Route exact path='/UserForm' component={UserForm} />
            <Route exact path='/Products' component={Products} />
            <Route exact path='/ProductsForm' component={ProductsForm} />
            <Redirect from="*" to="/" />
        </Switch>        
    </BrowserRouter>
)