# SBN Solar System Viewer

## Project Set up

This repo is a bit complicated. It's based on a tsdx react project. tsdx is designed to make it easy to build libraries to publish to npm.

However, tsdx is designed to make it easy to build EITHER an esm/cjs-module library OR a react library, but not both at once. To build both at once, I have had to complicate what tsdx gives you out of the box.

Not only that, but I also wanted to make it easy for someone wanting to embed the solar-system viewer into an angular project to be able to do so easily.

(On retrospect, I think that the extra complexity is not worth it; better to make visual widgets as a simple UMD modules and leave it to the user to bridge the complexity of incorporating the UMD into their SPA.)

In any case, here's how things work.

The way of developing a tsdx project out of the box is to run something like `parcel serve -p 3000 src/dev.html`, which includes `<script type="module" src="./dev.tsx"></script>` as the entry point. I.e. we're not even using tsdx, we are just running our code 'directly'.

To build the foundations of our library, we run `tsdx build --format cjs,esm,umd --name SbnSolarSystemViewer`. This generates a dir dist in which you will find the resulting js files:

```
sbnsolarsystemviewer.cjs.development.js
sbnsolarsystemviewer.cjs.development.js.map
sbnsolarsystemviewer.cjs.production.min.js
sbnsolarsystemviewer.cjs.production.min.js.map
sbnsolarsystemviewer.esm.js
sbnsolarsystemviewer.esm.js.map
sbnsolarsystemviewer.umd.development.js
sbnsolarsystemviewer.umd.development.js.map
sbnsolarsystemviewer.umd.production.min.js
sbnsolarsystemviewer.umd.production.min.js.map
```

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
