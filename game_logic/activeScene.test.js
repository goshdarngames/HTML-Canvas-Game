const init = require ( "./activeScene" );

test ( 'window.babylonProject.activeScene is defined', () => 
        {
            expect ( window.babylonProject.activeScene ).toBeDefined ();
        });

test ( "changeScene calls parameter as a function" , () =>
    {
        callCount = 0;

        testSceneFunction = function () { callCount = callCount+1;}; 

        window.babylonProject.changeScene(testSceneFunction);
        
        //If change scene calls its parameter as a function the value
        //should increase
        expect ( callCount ).toBe ( 1 );
    });
