import React from 'react';
import { mount } from "enzyme";
import CScreenHero from "../../Components/Heroes/CScreenHero";
import { MemoryRouter, Route } from 'react-router-dom';

/////

const historyMock = { push : jest.fn(), goBack : jest.fn(), length : 10};

/////

describe('Pruebas en ScreenHero', () => 
{

   test('Debe mostrar el componente Redirect si no hay argumento en el URL ', () => 
   {  
        const wrapper = mount( 
   
            <MemoryRouter initialEntries={ [ "/hero" ] }>

                <CScreenHero history={ historyMock } /> 
        
            </MemoryRouter>
    
        );

       expect( wrapper.find( "Redirect" ).exists() ).toBe( true );

   });

   /////

   test('Debe mostrar un heroe si el parametro existe ', () => 
   {
       const wrapper = mount(

            <MemoryRouter initialEntries={ [ "/hero/marvel-spider" ] }>

                <Route path="/hero/:heroeId" component={ CScreenHero } />

            </MemoryRouter>

       );

       expect( wrapper.find( ".row" ).exists() ).toBe( true );

   });

   ////

   test('Debe regresar a la pantalla señalada con push ', () => 
   {
       
        const historyMock = { push : jest.fn(), goBack : jest.fn(), length : 1};

        const wrapper = mount(

            <MemoryRouter initialEntries={ [ "/hero/marvel-spider" ] }>

                <Route path="/hero/:heroeId" component={ ( props ) => <CScreenHero history={ historyMock } /> } />

            </MemoryRouter>

        );

        wrapper.find( "button" ).prop( "onClick" )();

        expect( historyMock.push ).toHaveBeenCalledWith( "/" );
        expect( historyMock.goBack ).not.toHaveBeenCalled();


   });

   ////

   test('Debe regresar a la pantalla anterior con goBack', () => 
   {

        const wrapper = mount(

            <MemoryRouter initialEntries={ [ "/hero/marvel-spider" ] }>

                <Route path="/hero/:heroeId" component={ ( props ) => <CScreenHero history={ historyMock } /> } />

            </MemoryRouter>

        );

        wrapper.find( "button" ).prop("onClick")();

        expect( historyMock.goBack ).toHaveBeenCalledTimes( 1 );
        expect( historyMock.push ).toHaveBeenCalledTimes( 0 );

   });

   ////

   test('Debe retortar nada si el argumento no existe ', () => 
   {
       
        const wrapper = mount(

            <MemoryRouter initialEntries={ [ "/hero/marvel-spiderasdasdasd2342" ] }>

                <Route path="/hero/:heroeId" component={ ( props ) => <CScreenHero history={ historyMock } /> } />

            </MemoryRouter>

        );

        expect( wrapper.text() ).toBe( "" );

   });
   

});
