import React, { useMemo } from 'react'
import queryString  from "query-string"; // transforma el q de la ruta en un objeto
import { useLocation } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import CHeroCard from '../Heroes/CHeroCard';
import SGetHeroByNameQ from '../../Selectors/SGetHeroByNameQ';

/////

const CScreenSearch = ( { history } ) => 
{

    const location = useLocation(); // hook de react router dom
    
    /////

    const { q = "" } = queryString.parse( location.search ); // extraccion y parceo de q | addon query-string
    // se inicializa en "" en caso de que este vacio, si no se inicializa arroja undefine

    /////
    
    const [ formValues, handleInputChange ] = useForm( { searchText : q } );

    const { searchText } = formValues;

    /////

    const handleSearch = ( event ) =>
    {
        event.preventDefault();
        history.push( `?q=${ searchText }` );
    }

    /////

    const herosFilter = useMemo( () => SGetHeroByNameQ( q ), [ q ] );

    ////

    return (

        <div>

            <div className="row">

                <div className="col-5">

                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>

                        <input type="text" className="form-control" placeholder="find your hero" name="searchText" value={ searchText } onChange={ handleInputChange } autoComplete="off" />
                        <button type="submit" className="btn btn-outline-dark mt-1 btn-block" >Search</button>

                    </form>

                </div>

                <div className="col-7">

                   
                    <h4>Result</h4>
                    <hr/>

                    { q === "" && <div className="alert alert-dark">Search a Hero</div> }

                    { q !== "" && herosFilter.length === 0 && <div className="alert alert-dark">There is no a Hero <b>{ q }</b></div> }

                    { herosFilter.map( ( ObjetoH )=> <CHeroCard key={ ObjetoH.id } {...ObjetoH} /> )    }

                </div>
                
            </div>

        </div>


    );

};


////

export default CScreenSearch;
