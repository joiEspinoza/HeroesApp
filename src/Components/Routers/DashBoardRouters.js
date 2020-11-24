import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CScreenDc from '../Dc/CScreenDc';
import CScreenHero from '../Heroes/CScreenHero';
import CScreenMarvel from '../Marvel/CScreenMarvel';
import CScreenSearch from '../Search/CScreenSearch';
import { CNavbar } from '../UI/CNavBar';

/////

const DashBoardRouters = () => 
{

    return (


        <>

            <CNavbar />  { /* Component */ }

            <div className="container mt-5">

                <Switch>
                
                    <Route exact path="/marvel" component={ CScreenMarvel }></Route>

                    <Route exact path="/hero/:heroeId" component={ CScreenHero }></Route>
                    { /* Recibe argumento por URL :heroId*/ }

                    <Route exact path="/dc" component={ CScreenDc }></Route>

                    <Route exact path="/search" component={ CScreenSearch }/>

                    <Redirect to="/marvel" ></Redirect>

                </Switch>

            </div>

        </>

    );

};

/////

export default DashBoardRouters;
