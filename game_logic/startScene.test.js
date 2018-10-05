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

/*    babylon.Color3 = function (r,g,b)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }*/ 

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

test ( "window.babylonProject.startScene.clearColor is Color3", () =>
    {
        window.babylonProject.BABYLON = get_mock_babylon();

        var scene = window.babylonProject.startScene();
        
        var babylon = window.babylonProject.BABYLON;

        expect ( babylon.Color3 ).toHaveBeenCalledTimes ( 1 );
        
        expect ( scene.clearColor ).toBeInstanceOf ( babylon.Color3 );
        /*
        expect ( scene.clearColor.r ).toBe(0);
        expect ( scene.clearColor.g ).toBe(0.3);
        expect ( scene.clearColor.r ).toBe(0);
        */
        
    });
