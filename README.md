# color-object &middot; [![Test workflow status](https://github.com/ChrisCodesThings/color-object/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/color-object)](https://www.npmjs.com/package/@chriscodesthings/color-object) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Simple, lightweight class to store and manipulate a color, and convert between formats**

## Install

```sh
npm install --save @chriscodesthings/color-object
```

## Description

The color object stores a color and provides methods for expressing the color in different formats and manipulating the color in different ways.

- **Coercible** - use as a string to return a CSS hex color code.
- **JSON Compatible** - use JSON.stringify to export color as a CSS hex color code.

# Sections

- [Constructor](#constructor--sections "Constructor")
- [Examples](#examples--sections "Examples")
- [Methods](#methods--sections "Methods")

---

## Constructor &middot; [Sections](#sections "Back to Sections")

### Syntax

```js
import Color from '@chriscodesthings/color-object';

new Color(color);
```

### Parameters
- *color* (optional):

If omitted, a random color is generated. 
If `true`, a random dark color is generated, if `false`, a random light color.
A specific color can be specified as a CSS hex color code or as an array.

> Note, if an invalid color is specified, the color defaults to black.

## Examples &middot; [Sections](#sections  "Back to Sections")

### Random Colors

If the first parameter is omitted or boolean `true/false` then a random color is generated.

```js
new Color(); // Random color
new Color(true); // Random dark color
new Color(false); // Random dark color
```

### CSS Hex Color Code

A CSS hex color code can be passed, in short or long form, with or without an alpha value.

```js
new Color("#639"); // rebeccapurple
new Color("#6495ed"); // cornflowerblue
new Color("#6495ed7f"); // cornflowerblue with 50% transparency
```

### RGB or RGBA Values

An RGB or RGBA color can be passed in an array in the form `[red, green, blue, alpha (optional)]`, with or without the alpha value.

```js
new Color([100, 149, 237]); // cornflowerblue
new Color([100, 149, 237, 0.5]); // cornflowerblue with 50% transparency
```

# Methods &middot; [Sections](#sections "Back to Sections")

- [constructor()](#constructor--sections "Read about constructor()") - create the `Color` object
- [set()](#setcolor--methods "Read about set()") - set the color
- [asHex()](#ashex--methods "Read about asHex()") - output as CSS hex color code
- [asRGBA()](#asrgba--methods "Read about asRGBA()") - output as RGBA array
- [fade()](#fadepct--methods "Read about fade()") - fade the color

---

## set(color) &middot; [Methods](#methods--sections "Back to Methods")

### Description

Sets the color.

### Use

```js
const col = new Color();

console.log(col.set([100, 149, 237]));  // cornflowerblue
// => true
```

### Parameters
- *color*: the color to set

The color can be provided using the same rules as [Constructor](#constructor--sections "Read about constructor()").

### Returns

Returns boolean `true` on success, `false` if the color provided isn't valid.

> Note, if `false` is returned, the color is unmodified.

---

## asHex() &middot; [Methods](#methods--sections "Back to Methods")

### Description

Outputs color as a CSS hex color code.

### Use

```js
const col = new Color([100, 149, 237]); // cornflowerblue

console.log(col.asHex());
// => #6495ed
```

### Returns

Returns a string containing CSS hex color code.

---

## asRGBA() &middot; [Methods](#methods--sections "Back to Methods")

### Description

Outputs color as red, green, blue and alpha values.

### Use

```js
const col = new Color([100, 149, 237]); // cornflowerblue

console.log(col.asRGBA());
// => [ 100, 149, 237, 1 ]
```

### Returns

Returns array containing `[red, green, blue, alpha]` values.

> Note, the alpha value is always provided. If the color has no transparency set the alpha value will return 1.

---

## fade(by) &middot; [Methods](#methods--sections "Back to Methods")

### Description

Fades a color towards black or white by a given percentage.

### Use

```js
const col = new Color([100, 149, 237]); // cornflowerblue

console.log(col.fade(-50)); // fade 50% towards black
// => #324b77
```

### Parameters
- *by*: a percentage from -100 to 100. Negative values fade towards black, positive towards white.

### Returns

Returns a string containing the CSS hex color code of the faded color.
