const init = require ( "./activeScene" );

test ( 'window.babylonProject.activeScene is defined', () => 
        {
            expect ( window.babylonProject.activeScene ).toBeDefined ();
        });

test ( "changeScene alters window.babylonProject.activeScene" , () =>
    {
        window.babylonProject.changeScene(1);

        expect ( window.babylonProject.activeScene).toBe ( 1 );
    });
