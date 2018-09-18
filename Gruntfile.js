module.exports = function ( grunt ) {

    grunt.loadNpmTasks ( 'grunt-run');

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
        }
    });

    grunt.registerTask( 'default', ['run:npm_test_jest']);
};
