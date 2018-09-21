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
