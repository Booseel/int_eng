# Webpack 4 Boilerplate Typescript/Sass with build-in option to change preprocessor (less/stylus)
This Webpack 4 Boilerplate comes with 2 builds:

--> <code>npm run dev</code> <br>
  starts dev server on <code>localhost:8080</code> with livereload, sourcemap

--> <code>npm run build</code> <br>
  creates prod files to <code>/dist</code> with:

  1. compiles sass/stylus/less to css <br>
  2. autoprefixer for browser compability <br>
  3. compiles typescript to ES5 <br>
  4. minifying for css/js <br>
  5. uglyfing js code <br>
  6. hash css and js file (file versioning for browser caching) <br>

# Setup
1. clone and run <code>npm install</code> or <code>yarn</code> in project folder

