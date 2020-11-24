import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthContext';
import { CNavbar } from '../../Components/UI/CNavBar';
import "@testing-library/jest-dom";

/////

const providerValues = { dispatch : jest.fn(), user : { logged : true, name : "Lanz" } };

const historyMock = { push : jest.fn(), replace : jest.fn(),  location : {}, listen : jest.fn(), createHref : jest.fn() };

////

describe('Pruebas en NavBar', () => 
{
    const wrapper = mount( 
    
        <AuthContext.Provider value={ providerValues }>

            <MemoryRouter>
                
                <Router history={ historyMock }>

                    <CNavbar/>

                </Router> 

            </MemoryRouter>

        </AuthContext.Provider>
    
    );

    /////

        afterEach( () => {

            jest.clearAllMocks();

        } );
    
    /////

    test('Debe mostrarse correctamente ', () => 
    {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( ".text-info" ).text().trim() ).toBe( "Lanz" );

    });

    /////
    
    test('Debe llamar logout y usar history', () => 
    {
        wrapper.find( "button" ).prop( "onClick" )();

        expect( providerValues.dispatch ).toHaveBeenLastCalledWith( { type : "[auth] logout" } );

        expect( historyMock.replace ).toHaveBeenCalledWith( "/login" );

    });
    
        
});
