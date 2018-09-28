(function( babylonProject,  undefined )
{
    babylonProject.activeScene = null;

    babylonProject.changeScene = function( scene ) 
    {
        babylonProject.activeScene = scene;
    };

} ( window.babylonProject = window.babylonProject || {} ));
