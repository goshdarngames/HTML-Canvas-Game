/****************************************************************************
 * jQueryDomFunctions.js
 *
 * Uses the jQuery document ready function to execute initialization
 * functions that should be called after all DOM elements have been loaded.
 ***************************************************************************/

(function( babylonProject, $,  undefined )
{
    //Called when all HTML/DOM objects have been loaded.
    $(document).ready(function() 
    {
        babylonProject.canvas = document.querySelector("#renderCanvas");

        babylonProject.engine =
            new BABYLON.Engine(babylonProject.canvas, true);

        babylonProject.scene = babylonProject.createScene();

        // Register a render loop to repeatedly render the scene
        babylonProject.engine.runRenderLoop(function ()
        {
            babylonProject.scene.render();
        });
    });

    //Dynamically resizes the canvas as the browser window changes.
    $(window).on("resize load", function()
    {
        if ( babylonProject.engine )
        {
            babylonProject.engine.resize();
        }
    });

} ( window.babylonProject = window.babylonProject || {}, jQuery));
