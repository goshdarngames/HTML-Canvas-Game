const init = require ( "./startScene" );

test ( "window.babylonProject.startScene is defined", () =>    
    {
        expect ( window.babylonProject.startScene ).toBeDefined ();
    });

test ( "window.babylonProject.startScene return value not null", () =>
    {
        expect ( window.babylonProject.startScene() ).not.toBeNull ();
    });
