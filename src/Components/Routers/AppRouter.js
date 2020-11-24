import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from '../../Auth/AuthContext';
import CScreenLogin from '../Login/CScreenLogin';
import DashBoardRouters from './DashBoardRouters';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

/////

const AppRouter = () => 
{
    
    const { user:{ logged } } = useContext( AuthContext );

    /////

    return (

        <Router>

            <div>

                <Switch>

                    <PublicRoute isAuthenticated={ logged } exact path="/login" component={ CScreenLogin } />

                    <PrivateRoute isAuthenticated={ logged } path="/" component={ DashBoardRouters } />

                </Switch>

            </div>

        </Router>

    );
};

/////

export default AppRouter;
