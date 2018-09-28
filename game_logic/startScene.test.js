const init = require ( './startScene' );

test ( 'window.startScene is defined', () =>    
    {
        expect ( window.startScene ).toBeDefined ();
    });

test ( 'window.startScene.createScene is defined', () =>    
    {
        expect ( window.startScene.createScene ).toBeDefined ();
    });
