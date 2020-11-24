import React, { useMemo } from 'react';
import SGetHerosByPublisher from '../../Selectors/SGetHerosByPublisher';
import CHeroCard from './CHeroCard';

/////

const CHeroesList = ( { publisher } ) => 
{ 
    const heroes = useMemo( () => SGetHerosByPublisher( publisher ), [ publisher ] );// la funcion vuelve a dispararse si es que el publisher cambia

    /////

    return (


        <div className="card-columns animate__animated animate__fadeIn" >
            
            { heroes.map( ( objetoH )  => <CHeroCard key={ objetoH.id } { ...objetoH } /> ) }
        
        </div>


    );

};

/////

export default CHeroesList;
