const init = require ( "./startScene" );

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

/**
 * Creates a mock of the BABYLON object with the functions needed for the
 * tests.
 */
function get_mock_babylon ()
{
    babylon = jest.fn ();

    babylon.Scene = jest.fn ();

    babylon.Color3 = jest.fn ();

    babylon.FreeCamera = jest.fn ();

    babylon.Vector3 = jest.fn ();
    return babylon;
}

/****************************************************************************
 * TESTS
 ***************************************************************************/
describe ("window.babylonProject.startScene", () =>
{
    test ( "is defined", () =>    
        {
            expect ( window.babylonProject.startScene ).toBeDefined ();
        });
    
    test ( "is not null", () =>
        {
            window.babylonProject.BABYLON = get_mock_babylon();
    
            expect ( window.babylonProject.startScene() ).not.toBeNull ();
        });
    
    test ( "has clearColor that is Color3", () =>
        {
            window.babylonProject.BABYLON = get_mock_babylon();
    
            var scene = window.babylonProject.startScene();
            
            var babylon = window.babylonProject.BABYLON;
    
            expect ( babylon.Color3 ).toHaveBeenCalledTimes ( 1 );
            
            expect ( scene.clearColor ).toBeInstanceOf ( babylon.Color3 );
        });
});
