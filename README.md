# SBN Solar System Viewer

## Intro

This repo is for the development of a library that can be imported into a web app in order to inject a html with a three.js animation of the solar system. The injected html shall be referred from hereon as the (solar-system) 'widget'.

This repo is based on a tsdx project. tsdx is designed to make it easy to build libraries to publish to npm. Originally, this repo was set up to publish a library with usable UMD, ESM, Commonjs, React and Ngx imports. However, this made the repo too complicated, so now it is only for UMD, ESM, Commonjs. Separate libraries for react and ngx will be created that wrap around this library.

## How it works

This library creates code that will inject html into a web application with a threeJs animation of the solar system. The animation requires a lot of resources specific to this project that need to be served separately. These resources include:

- Images of planets
- Data for the ephemerides of orbiting objects
- A web-worker script

These items that need to be served are found within the dir `assets`. The web-worker script is used to try to optimize the UX of loading large amounts of comet-asteroid data. Since it is the result of the development process, it needs to be built and copied to your static-file server (see below).

## Quickstart

### Serving Static Assets

If you clone this repo then the `assets` folder will not contain the ephemerides data from the Minor Planet Center. You need to first obtain the raw data from the MPC using the `_get_raw_data` script. Then run `_process_asteroids.ts` and `_process_comets.ts` in order to extract the relevant data and output it to a format that will be readable by this widget.

### Development

To develop this library, you need to have two use the script `_library_manager` to launch two developer processes:

- `./_library_manager --dev`
- `./_library_manager --dev-worker`

### Build and Publish

#### Build

Run `_library_manager --build` to generate UMD, ESM and Commonjs modules in the `dist` dir. This command will also copy the UMD files into `demo-umd` which you can run locally with `_library_manager --demo-umd`.

The files ending `*.umd.js` are UMD modules, and can be run "directly" in an html file as demonstrated in the dir `demo-umd`. The cjs and esm files can be imported into other ts/js files using `require` and `import` keywords respectively.

The contents of dist constitute the 'library'. Once this dir has been assembled, there are different ways we can use it. One way is to import from it directly, as in the case with demo-react. This is a simple parcel setup that just imports the library from dist (based on the fact that package.json has ....)

[Oh my goodness! I have re-sussed how everything is setup. Honestly, it's so complicated that even describing it will take hours! You'll just have to refigure-out stuff as you go along!]

## Settings

The Viewer is highly configurable. Some settings are "static" in that they can be set by the coder but cannot be changed by the user, and some settings are "dynamic" and can be changed by the user (with the coder determining the starting/default values). All dynamic settings are stored in the user's local storage and therefore persist between page reloads.

### Asteroid-Abundance Modes

The Viewer has to deal with practical limitations of rendering a potentially large number of 3D objects in a browser. The javasctipt that runs in browsers is single-threaded, meaning that you cannot simulteanously process/load data AND compute coordinate updates for each animation frame.

Moreover,browsers will only let you store ~5MB of data per website; since these visualizations can easily involve ~100MB of data, we have to load and process the data from an external server every time the page is reloaded! This asteroid/comet data comes down in JSON format as simple orbital elements (plus magnitudes), and so for each comet/asteroid that the user wishes to visualize the Viewer has to compute:

- The elliptical orbit (using XXX approximations)
- A ThreeJs asteroidal shape with size based on H magnitude

So either you have to do all of this data loading/processing before the animation begins (creating an unhappy waiting user if you have too much data), or you can do the load/processing part in a separate web worker while displaying the animation and then, when the data is ready, the animation can be paused as that thread is taken over for a few seconds to convert the data to threeJs objects.

... Blha blah

### Load Mode 1:

The comet/asteroid data is loaded at the beginning before the animation begins

### Load Mode 2:

The comet/asteroid data is loaded initially in a separate web worker; when it is ready, the animation is paused so that that data can be rendered as 3D objects, then the animation continues

### Abundance Representation Mode 1: Toy Representation

This mode ignores "real world" relative abundances and just plots a decent number of each kind of comet/asteroid to let you know roughly where they reside. This has been calibrated to be quick to load. It is misleading in the sense that, to be able to see e.g. a cloud of NEOs, we have to select much smaller objects relative to e.g. Main Belt objects.

### Abundance Representation Mode 2: Real World Proportions

This mode requires two parameters:

- The maximum number of objects to be displayed
- The maximum magnitude (i.e. ~smallest size) an object can have to be displayed

Once these two parameters are set, a proportionate number of objects will be displayed for each type of object.
