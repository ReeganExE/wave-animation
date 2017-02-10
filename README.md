# An implementation of Google Chrome logo effect.

![demo](demo.gif)

See this effect on https://www.google.com/intl/en/chrome/browser/. Just mouse on the Google Chrome logo.

## Installation
```sh
bower install ReeganExE/wave-animation --save
```

## Usage
```js
var el = document.getElementById('download-button');
var animated = new AnimatedItem(el, 8 /* left */, 15 /* top */);
```

Stop animation
```js
animated.stop();
```