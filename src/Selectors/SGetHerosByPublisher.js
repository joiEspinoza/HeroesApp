import { DHeroes } from "../Data/DHeroes";

/////

const SGetHerosByPublisher = ( publisher ) => 
{
 
    const validPublisher = [ 'DC Comics', 'Marvel Comics' ];

    if( !validPublisher.includes( publisher ) )
    {
        throw new Error( `El publisher ${ publisher } no es correcto` );
    };

    return DHeroes.filter( ( objetoH ) => objetoH.publisher === publisher );

};

/////

export default SGetHerosByPublisher;
