import authReducer from "../../Auth/authReducer";
import { types } from "../../Types/types";

/////


describe('Pruebas en authReducer', () => 
{
    
    test('Debe retornar estado por defecto', () => 
    {
        const state = authReducer( { logged : false }, {} );

        expect( state ).toEqual( { logged : false } );
 
    });

    /////

    test('Debe autenticar y colocar el name de usuario', () => 
    {

        const action = { type : types.login, payload : { name : "king" } };

        const state = authReducer( { logged : false }, action );

        expect( state ).toEqual( { logged : true, name : "king" } );

    });
        
    /////

    test('Debe borrar el name y poner el logged en false', () => 
    {
        const action = { type : types.logout };

        const state = authReducer( { logged : true }, action );

        expect( state ).toEqual( { logged : false } );
    });
        
        
});
