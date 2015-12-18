# ClockMVCRequireJS

To get started, you’ll need node and npm installed on your computer.

```
npm install
npm run build
```

or for watching and running:

```
npm run start
```
run browserify or watchify:
browserify js/main.js > build/app.js -d //-d for source maps
watchify js/main.js -o build/app.js -dv //-v for verbose, -o output file