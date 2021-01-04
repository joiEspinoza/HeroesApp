import React, { useEffect, useReducer } from 'react'
import { AuthContext } from '../Auth/AuthContext';
import authReducer from '../Auth/authReducer';
import AppRouter from '../Components/Routers/AppRouter';
import "./HeroesApp.css";

/////``

const init = () =>
{
    return JSON.parse( localStorage.getItem( "user" ) ) || { logged : false };
};


const HeroesApp = () => 
{

    const [ user, dispatch ] = useReducer( authReducer, {}, init );

    useEffect( () => 
    {
        
        ( localStorage.setItem( "user", JSON.stringify( user ) ) );

        
    }, [ user ]);


/*************************************************************************************************** */

    return (

        <AuthContext.Provider value={ { user, dispatch } }> {/* user y dispatch se pueden utilizar en toda la aplicacion */}

            <AppRouter />

        </AuthContext.Provider>

    );
};

/////

export default HeroesApp;
