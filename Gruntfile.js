module.exports = function ( grunt ) {

    grunt.loadNpmTasks ( 'grunt-run' );
    grunt.loadNpmTasks ( 'grunt-contrib-uglify' );

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

        uglify : 
        {
            game_logic :
            {
                files:
                [{
                    expand : true,
                    cwd : 'game-logic/',
                    src : '**/*.js',
                    dest: 'game-logic.min.js'
                }]
            }
        }
                 
    });

    grunt.registerTask( 'default', ['run:npm_test_jest']);
};
