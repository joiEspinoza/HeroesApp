import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import CScreenSearch from '../../Components/Search/CScreenSearch';

describe('Pruebas en CScreenSearch', () => 
{


   test('Debe mostrarse correctamente con valores por defecto ', () => 
   {
       const wrapper = mount( 
       
            <MemoryRouter initialEntries={["/search"]}>

                <Route path="/search" component={ CScreenSearch } />

            </MemoryRouter> 
        
       );

       expect( wrapper ).toMatchSnapshot();
       expect( wrapper.find( ".alert-dark" ).text().trim() ).toBe( "Search a Hero" );

   });

   /////

   test('Debe mostrar a batman y el input con el queryString', () => 
   {

        const wrapper = mount( 
        
            <MemoryRouter initialEntries={["/search?q=batman"]}>

                <Route path="/search" component={ CScreenSearch } />

            </MemoryRouter> 
        
        );

        expect( wrapper.find( "input" ).prop( "value" ) ).toBe( "batman" );
        expect( wrapper ).toMatchSnapshot();

   });

   ///

   test('debe mostrar un error si no se encuentra el heroe', () => 
   {
      
    const wrapper = mount( 
        
        <MemoryRouter initialEntries={["/search?q=batman12345"]}>

            <Route path="/search" component={ CScreenSearch } />

        </MemoryRouter> 
    
    );
    
    const inputValue = wrapper.find( "input" ).prop( "value" );

    expect( wrapper.find( ".alert-dark" ).text().trim() ).toBe( `There is no a Hero ${ inputValue }` );

   });

   ///

   test('Debe llamar el push del history ', () => 
   {
        const historyMock = { push : jest.fn() };

        const wrapper = mount( 
        
            <MemoryRouter initialEntries={["/search?q=batman"]}>

                <Route path="/search" component={ ( props ) => <CScreenSearch history={ historyMock } /> } />

            </MemoryRouter> 
        
        );

        wrapper.find( "input" ).simulate( "change", { target : { name : "searchText", value : "batman" } }  );

        wrapper.find( "form" ).prop( "onSubmit" )( { preventDefault(){} } );

        expect( historyMock.push ).toHaveBeenCalledWith( `?q=batman` );
   });
   

});
