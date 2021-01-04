import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthContext';
import { types } from '../../Types/types';
////

const CScreenLogin = ( { history } ) =>
{

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () =>
    {

        const action = { type : types.login, payload : { name : "King" } };

        dispatch( action );

        const lastPath = localStorage.getItem( "lastPath" ) || "/";

        history.replace( lastPath ); 

    };

/********************************************************************************************************* */

    return (

        <div className="container mt-5">

            <h1>Screen | Login</h1>
            <hr/>
            <button className="btn btn-outline-dark" onClick={ handleLogin }>Login</button>

        </div>
    );

}

/////

export default CScreenLogin;
