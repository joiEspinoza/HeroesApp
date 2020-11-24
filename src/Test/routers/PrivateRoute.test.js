import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../../Components/Routers/PrivateRoute';

//////

describe('Pruebas en Private Router', () => 
{

   const rest = { location : { pathname : "/marvel" } }; 

   Storage.prototype.setItem = jest.fn();

   /////

   test('Debe mostrar el componente si esta autenticado y guardar localStorage', () => 
   {
       const wrapper = mount( 

        <MemoryRouter>

            <PrivateRoute 
            
                isAuthenticated={ true } 
                
                component={ () => <span>Listo!</span> }

                { ...rest }
            
            />

        </MemoryRouter>
       
       );

       console.log(wrapper.html());

       expect( wrapper.find( "span" ).exists() ).toBe( true );
       expect( localStorage.setItem ).toHaveBeenCalledWith( "lastPath", "/marvel" );

   });

   ////

   test('Debe bloquear componente si no esta autenticado', () => 
   {
       
        const wrapper = mount( 
        
            <MemoryRouter>

                <PrivateRoute

                isAuthenticated={ false }

                component={ ()=> <p>Cosa</p> }

                {...rest }
                
                /> 

            </MemoryRouter>

        );

        expect( wrapper.find( "p" ).exists() ).toBe( false );

   });
   
    
});
