module.exports = function ( grunt ) {

    grunt.loadNpmTasks ( 'grunt-run' );
    grunt.loadNpmTasks ( 'grunt-contrib-concat' );
    //grunt.loadNpmTasks ( 'grunt-contrib-uglify' );

    grunt.initConfig ({

        run: 
        {
            options: 
            {
            },
            npm_test_jest:
            {
                cmd : 'npm',
                args : [ 'test', '--silent' ]
            }
        },

        concat : 
        {
            game_logic :
            {
                src : 'game_logic/**/*.js',
                dest: 'game_logic.min.js'
            }
        }
                 
    });

    grunt.registerTask( 'default', ['run:npm_test_jest']);
};
