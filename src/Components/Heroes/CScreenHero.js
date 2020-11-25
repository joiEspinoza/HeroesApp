import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import SGetHeroById from '../../Selectors/SGetHeroById';

////

const CScreenHero = ( { history } ) => 
{

    const { heroeId } = useParams(); // hook de router-dom | extrae parametros de url en forma de objeto
    
    /////

    const hero = useMemo( () => SGetHeroById( heroeId ), [ heroeId ] );

    /////

    if( !hero )
    {
        return <Redirect to="/" />
    };

    /////

    const { id,superhero,publisher,alter_ego,first_appearance,characters } = hero;

    /////
   
    const handleBack = () =>
    {
        if(history.length <= 2)
        {
            history.push( "/" );
        }
        else
        {
           history.goBack(); 
        };

    };

    /////

    return (

       <div className="row mt-5">

           <div className="col-4">

                <img src={ `../img/${ id }.jpg` } className="img-thumbnail animate__animated animate__fadeInLeft" alt={ superhero }/>

           </div>

           <div className="col-8">

                <h3>{ superhero }</h3>

                <ul className="list-group list-group-flush">

                    <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"><b>First appearance: </b>{ first_appearance }</li>
                    <li className="list-group-item"><b>Characters: </b>{ characters }</li>

                </ul>

                <button className="btn btn-outline-dark mt-4" onClick={ handleBack }>Back</button>

           </div>
           
        </div>
    );

};

/////

export default CScreenHero;
