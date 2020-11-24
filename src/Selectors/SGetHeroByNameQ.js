import { DHeroes } from "../Data/DHeroes";


const SGetHeroByNameQ = ( nameQ ) => 
{

    if( nameQ === "" ){ return [] };

    nameQ = nameQ.toLowerCase().replace(/[" "]/g,"");
    return DHeroes.filter( ( ObjetoH )=> ObjetoH.superhero.toLowerCase().replace(/[" "]/g,"").includes( nameQ ) );
};

export default SGetHeroByNameQ;
