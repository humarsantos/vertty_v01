// Load Grunt
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [ 'sass/**/*.scss' ],
                dest: 'sass/build.scss'
            }            
        },
        sass: { 
            dist: {
                src: [ 'sass/main.scss' ],
                dest: 'sass/main.css'
            } 
        },
        shopify_sass: {
            dist: {
                src: [ 'sass/main.scss' ],
                dest: 'sass/main.scss.liquid'
            } 
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: [ '**/*.scss', '**/*.css' ],
                tasks: [ 'shopify_sass' ],
                options: {
                    spawn: false
                }
            }
        }
	});
    
	// Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-shopify-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register Grunt tasks
	grunt.registerTask('default', ['watch']);
};