//Tests the initialization of the babylon project
const main = require ('./init')

/////////////////////////////////////////////////////////////////////////////
//PROJECT NAMESPACE TESTS
/////////////////////////////////////////////////////////////////////////////

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
