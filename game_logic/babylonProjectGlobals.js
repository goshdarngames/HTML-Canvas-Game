/****************************************************************************
 * babylonProjectGlobals.js
 *
 * Data that can be accessed from anywhere within the babylonProject
 * namespace is defined here.
 *
 * Most of these are pointers to external objects that should be set
 * when the page is loaded.
 ***************************************************************************/


( function ( babylonProject, undefined )
{
    //HTML Canvas DOM object that is used for rendering.
    babylonProject.canvas = null;

    //pointer to the BABYLON library object.
    babylonProject.BABYLON = null;

    //reference to the Babylon 3D engine
    babylonProject.engine = null;

} ( window.babylonProject = window.babylonProject || {} ));

