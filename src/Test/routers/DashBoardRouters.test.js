import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthContext';
import DashBoardRouters from '../../Components/Routers/DashBoardRouters';
import { CNavbar } from '../../Components/UI/CNavBar';

describe('Pruebas en DashBoardRouters', () => 
{
    const contextValues = { dispatch : jest.fn(), user : { logged : true, name : "king" } };

    ////

    test('Debe mostrarse correctamente ', () => 
    {
       
        const wrapper = mount( 

            <AuthContext.Provider value={ contextValues }>

                <MemoryRouter>

                    <DashBoardRouters />

                </MemoryRouter>

            </AuthContext.Provider> 

        
        );

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find( "span" ).text().trim() ).toBe( "king" );

    });
    
     
});
