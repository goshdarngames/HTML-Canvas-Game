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

    return babylon;
}

/****************************************************************************
 * TESTS
 ***************************************************************************/

test ( "window.babylonProject.startScene is defined", () =>    
    {
        expect ( window.babylonProject.startScene ).toBeDefined ();
    });

test ( "window.babylonProject.startScene return value not null", () =>
    {
        window.babylonProject.BABYLON = get_mock_babylon();

        expect ( window.babylonProject.startScene() ).not.toBeNull ();
    });
