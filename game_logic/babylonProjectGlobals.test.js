/**
 * @jest-environment jsdom
 */

const init = require ('./babylonProjectGlobals');

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


