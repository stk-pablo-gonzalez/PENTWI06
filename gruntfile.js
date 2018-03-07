module.exports = function(grunt) {
    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            jquery: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist',
                        src: 'jquery.min.js',
                        dest: 'public/js/lib'
                    }
                ]
            },
            angular: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/angular',
                        src: 'angular.min.js',
                        dest: 'public/js/lib'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/angular-route',
                        src: 'angular-route.min.js',
                        dest: 'public/js/lib'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/angular-mocks',
                        src: 'angular-mocks.js',
                        dest: 'public/js/lib'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/angular-resource',
                        src: 'angular-resource.min.js',
                        dest: 'public/js/lib'
                    }
                ]
            },
            bootstrap: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/css',
                        src: ['bootstrap-theme.min.css', 'bootstrap.min.css' ],
                        dest: 'public/css'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/js',
                        src: 'bootstrap.min.js',
                        dest: 'public/js/lib'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/fonts',
                        src: '*.*',
                        dest: 'public/fonts'
                    }
                ]
            }
        },
        shell: {
            launch: {
                options: {
                    stdout: true
                },
                command: 'node app.js'
            }
        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-shell');
    
    //Tasks
    grunt.registerTask('start', ['copy', 'shell']);

    //Default tasks

}