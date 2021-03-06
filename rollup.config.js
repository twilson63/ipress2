import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
//import livereload from 'rollup-plugin-livereload';
//import { terser } from 'rollup-plugin-terser';
import { mdsvex } from 'mdsvex'
import multiInput from 'rollup-plugin-multi-input'

const production = !process.env.ROLLUP_WATCH;

export default {
  input: ['src/**/*.md', 'src/**/*.html'],
	output: {
		format: 'cjs',
    dir: 'dist'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/bundle.css');
      },
      extensions: ['.svelte', '.md', '.html'],
      preprocess: mdsvex({
        extension: '.md'
      }),
      generate: 'ssr'
		}),


		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({ browser: true }),
		commonjs(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
    // !production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
    // production && terser()
    multiInput()
	],
	watch: {
		clearScreen: false
	}
};
