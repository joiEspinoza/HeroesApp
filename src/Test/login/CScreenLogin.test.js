const { mount } = require("enzyme");
const { AuthContext } = require("../../Auth/AuthContext");
const { default: CScreenLogin } = require("../../Components/Login/CScreenLogin");

/////

describe('Pruebas en CScreenLogin', () => 
{
    const providerValue = { logged : false, dispatch : jest.fn() };
    const historyMock = { replace : jest.fn() };

    /////

    const wrapper = mount(

        <AuthContext.Provider value={ providerValue } >

            <CScreenLogin history={ historyMock } />

        </AuthContext.Provider>

    );  

   /////

   test('Debe mostrarse correctamente ', () => 
   {
        expect( wrapper ).toMatchSnapshot();
   });

    /////

   test('Debe realizazr dispatch y navegacion ', () => 
   {
       wrapper.find( "button" ).simulate( "click" );

       expect( providerValue.dispatch ).toHaveBeenCalledTimes( 1 );
       expect( historyMock.replace ).toHaveBeenCalledTimes( 1 );

       localStorage.setItem( "lastPath", "/dc" );

       wrapper.find( "button" ).simulate( "click" );

       expect( historyMock.replace ).toHaveBeenCalledWith( "/dc" );

   });

    
});
