import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthContext';
import { types } from '../../Types/types';
////

const CScreenLogin = ( { history } ) =>  // history -> prop de react-router-dom
{
    const { dispatch } = useContext( AuthContext );

    ////

    const handleLogin = () =>
    {

        const action = { type : types.login, payload : { name : "King" } };

        dispatch( action );

        /////

        const lastPath = localStorage.getItem( "lastPath" ) || "/";

        history.replace( lastPath ); //reemplaza la direccion dentro de la historia evitando que se pueda volver a la pagina inicial
    };

    /////

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
