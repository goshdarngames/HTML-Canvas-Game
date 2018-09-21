//Tests the initialization of the babylon project
const main = require ('./init')

test ( 'window.babylonProject is defined', () => 
        {
            expect ( window.babylonProject ).toBeDefined ();
        });

test ( 'window.babylonProject.canvas is defined', () => 
        {
            expect ( window.babylonProject.canvas ).toBeDefined ();
        });

test ( 'window.babylonProject.engine is defined', () => 
        {
            expect ( window.babylonProject.engine ).toBeDefined ();
        });

test ( 'window.babylonProject.scene is defined', () => 
        {
            expect ( window.babylonProject.scene ).toBeDefined ();
        });




test ( 'window.babylonProject.canvas has DOM ID of \'renderCanvas\'.', () =>
        {
            expect ( window.babylonProject.canvas.id ).toBe ("renderCanvas")
        });
