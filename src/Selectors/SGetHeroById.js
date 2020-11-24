import { DHeroes } from "../Data/DHeroes";

/////

const SGetHeroById = ( id ) => 
{
    return DHeroes.find( ( objetoH ) => objetoH.id === id );
};

/////

export default SGetHeroById;
