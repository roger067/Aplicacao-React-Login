import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from '../modules/auth/Login';
import HomePage from '../modules/home/HomePage';
import UsersPage from '../modules/users/UsersPage';
import UserForm from '../modules/users/UserForm';
import ProductsPage from '../modules/products/ProductsPage';
import ProductsForm from '../modules/products/ProductsForm';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/User' component={UsersPage} />
            <Route exact path='/UserForm' component={UserForm} />
            <Route exact path='/UserForm/:id' component={UserForm} />
            
            <Route exact path='/Products' component={ProductsPage} />
            <Route exact path='/ProductsForm' component={ProductsForm} />
            <Route exact path='/ProductsForm/:id' component={ProductsForm} />
            <Redirect from="*" to="/" />
        </Switch>        
    </BrowserRouter>
)