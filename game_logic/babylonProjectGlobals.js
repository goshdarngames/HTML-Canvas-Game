/****************************************************************************
 * babylonProjectGlobals.js
 *
 * Data that can be accessed from anywhere within the babylonProject
 * namespace is defined here.
 ***************************************************************************/


( function ( babylonProject, undefined )
{
    //HTML Canvas DOM object that is used for rendering.
    babylonProject.canvas = null;

    //reference to the Babylon 3D engine
    babylonProject.engine = null;

} ( window.babylonProject = window.babylonProject || {} ));

