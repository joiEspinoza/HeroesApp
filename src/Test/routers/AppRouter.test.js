import { mount, shallow } from "enzyme";
import AppRouter from "../../Components/Routers/AppRouter";
import React from 'react';
import { AuthContext } from "../../Auth/AuthContext";

////

describe('Pruebas en AppRouter', () => 
{
    

    test('debe mostrar login si no esta autenticado ', () => 
    {
        const contextValues = { dispatch : jest.fn(), user : { logged : false } };

        ///

        const wrapper = mount( 
        
            <AuthContext.Provider value={ contextValues }>
                <AppRouter/> 
            </AuthContext.Provider>
        
        );
        
        ////

        expect( wrapper ).toMatchSnapshot();

    });

    ////

    test('Debe mostrar componente marvel si esta autenticado', () => 
    {
        const contextValues = { dispatch : jest.fn(), user : { logged : true, name : "king" } };

        ////HOC

        const wrapper = mount( 
        
            <AuthContext.Provider value={ contextValues }> 
                <AppRouter/> 
            </AuthContext.Provider>
        
        );

        ////

        expect( wrapper.find( ".navbar" ).exists() ).toBe( true );

    });
    
    

});
