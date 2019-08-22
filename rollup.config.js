import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import replace from "rollup-plugin-replace";

export default {
	input: "src/index.js",
	output: {
		file: "dist/bundle.js",
		format: "iife"
	},
	plugins: [
		replace({
			"process.env.NODE_ENV": JSON.stringify("production")
		}),
		resolve({
			jsnext: true,
			main: true,
			browser: true
		}),
		commonjs({
			include: ["node_modules/**"],
			exclude: ["node_modules/process-es6/**"],
			namedExports: {
				"node_modules/react/index.js": ["useState", "useContext"]
			}
		}),
		babel({
			//plugins: ["transform-react-remove-prop-types"],
			exclude: "node_modules/**"
		}),

		serve(), // index.html should be in root of project
		livereload()
	]
};
