# Choice View Plugin for reveal.js

A reveal.js plugin that scans for elements with the `choice-view` class and logs them to the console.

## Features

- Automatically scans for elements with the `choice-view` class when the presentation is ready
- Re-scans when slides change to catch dynamically added elements
- Logs detailed information about each found element including:
  - The DOM element itself
  - Tag name
  - Inner HTML content
  - All attributes and their values
- Provides a public API for manual scanning

## Installation

1. Copy the `choice-view` folder to your reveal.js `plugin/` directory
2. Add the plugin script to your HTML:

```html
<script src="plugin/choice-view/choice-view.js"></script>
```

3. Initialize the plugin:

```javascript
Reveal.initialize({
    // ... other config options
    plugins: [ RevealChoiceView ]
});
```

## Usage

### Automatic Scanning

The plugin automatically scans for `choice-view` elements when:
- The presentation is ready
- A slide changes

### Manual Scanning

You can manually trigger a scan using:

```javascript
Reveal.choiceView.scan();
```

### Example HTML

```html
<section>
    <h1>My Slide</h1>
    <div class="choice-view" data-type="example">
        <p>This element will be logged to console</p>
    </div>
    
    <ul class="choice-view" data-category="options">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
    </ul>
</section>
```

## Console Output

When choice-view elements are found, you'll see output like:

```
Choice View Plugin: Found 2 choice-view elements
Choice View 1: {
  element: <div class="choice-view" data-type="example">...</div>,
  tagName: "DIV",
  innerHTML: "<p>This element will be logged to console</p>",
  attributes: [
    {name: "class", value: "choice-view"},
    {name: "data-type", value: "example"}
  ]
}
Choice View 2: { ... }
```

## API

The plugin adds a `choiceView` object to the Reveal instance with the following methods:

- `Reveal.choiceView.scan()` - Manually trigger a scan for choice-view elements

## Compatibility

This plugin works with reveal.js 4.x and supports both ES6 modules and CommonJS formats.

## Files

- `plugin.js` - Main plugin file (ES6 export)
- `choice-view.js` - UMD/CommonJS compatible version
- `choice-view.esm.js` - ES6 module version
