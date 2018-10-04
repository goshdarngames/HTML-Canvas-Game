const init = require ( "./startScene" );

test ( "window.babylonProject.startScene is defined", () =>    
    {
        expect ( window.babylonProject.startScene ).toBeDefined ();
    });

test ( "window.babylonProject.startScene return value not null", () =>
    {
        window.babylonProject.BABYLON = jest.fn();
        window.babylonProject.BABYLON.Scene = jest.fn(); 

        expect ( window.babylonProject.startScene() ).not.toBeNull ();
    });
