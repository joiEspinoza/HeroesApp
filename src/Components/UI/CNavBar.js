import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../Auth/AuthContext';
import { types } from '../../Types/types';

/////

export const CNavbar = () => 
{   
    
    const { user:{ name }, dispatch } = useContext( AuthContext );

    const history = useHistory(); // router cuenta con un provider que entrega la informacion global de las rutas
 
    /////

    const handleLogout = () =>
    {
        const action = { type : types.logout };
        dispatch( action );
        history.replace( "/login" );
    };

    /////

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link className="navbar-brand" to="/">
                H
            </Link>

            <div className="navbar-collapse">
               
               <div className="navbar-nav">

                    <NavLink activeClassName="active"className="nav-item nav-link" exact to="/marvel">
                        Marvel
                    </NavLink>

                    <NavLink activeClassName="active"className="nav-item nav-link" exact to="/dc">
                        DC
                    </NavLink>

                    <NavLink activeClassName="active"className="nav-item nav-link" exact to="/search">
                        Search
                    </NavLink>

                </div>

            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">

                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>

                    <button onClick={ handleLogout } className="nav-item nav-link btn" >
                        Logout
                    </button>

                </ul>

            </div>

        </nav>
    );
};