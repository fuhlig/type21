Symbols or Icons are visually really powerful as they deliver instant information without any cultural or lingual barrier. Icons can support the displayed text or stand on their own.

Building a Global Visual Language by [The Noun Project](http://thenounproject.com)

This lesson is a tutorial on how to create a font - an icon font!

A guide on how to use an icon font inside a webproject see ICON FONT INTEGRATION in the WEB CATEGORY.


## Why use icon fonts?

There are several reasons but I want to start bottom up:

### Graphics
Pixelgraphics (*simple graphics*) often get the job done until its about to **maintain**, **customize** and **scale** them

> **not scalable**: with an increasing device and screen landscape with different hard- and software attributes it would need x versions (low, medium, high, retina resolution) in order to display the graphic on many devices as possible in a decent quality
> 

> **performance**: serving [responsive images](http://www.alistapart.com/articles/responsive-images-how-they-almost-worked-and-what-we-need/) is a difficult task with (yet) not entirely satifying results. Serving multiple images has a negative affect on the performance (client + network). If an image has different states (active, hover, inactive, ...) this multiplies the server requests and maintainability.

### CSS Sprites
A possible solution to these issues would be using [CSS sprites](http://css-tricks.com/css-sprites/). When using multicolor, image-like icons - this is the way to go.
But creating sprites is not that easy

> **complex creating**: all images have to be arranged in a grid with all possible states. Multiple resolutions mean multiple sprites

> **complex positioning**: the visible area has to be positioned pixel-perfect (thats were the grid comes in handy) with `background-position`

> **consuming maintenance**: when adding or editing icons the entire sprite has to be recreated and repositioned

To ease and streamline the workflow with CSS sprites there are some great tools like [Compass for SASS](http://compass-style.org/help/tutorials/spriting/).

### Icon Fonts
But when aiming for a simplified design approach (like type21) with monochrome icons using icon fonts is probably the best solution in terms of performance, cross device and browser compatibility.

> **free scalable**: as icon fonts are *fonts* and consist basicly of vectors they can scale without quality loss - perfect for big and small screens

> **performance**: despite the different formats only the format compatible to the browser is downloaded by the client (few kb) which result in less http requests.

> **flexible and customizable**: having a font all the effects that can be applied by CSS to text can be applied to the icons: size, color, shadow, transformations, animations etc.


# Tutorial
Before getting creative, here are some resources that will be used in this tutorial

- **Vector Graphics software** *(like [Adobe Illustrator](http://www.adobe.com/de/products/illustrator.html))*
- **[Inkscape](http://inkscape.org/)** *(free vector graphics software with **SVG font editor**)*
- **[Iconfont canvas template](https://github.com/Heydon/Community-Icon-Font/blob/master/resources/inkscape_iconfont_canvas_template.svg)** by [Heydon Pickering](https://github.com/Heydon)
- **Font Converter** (like [freefontconverter.com](http://www.freefontconverter.com/))
- **Web Font Converter / @font-face Generator**(like [fontsquirrel.com](http://www.fontsquirrel.com/fontface/generator))


## LETS GO
When creating icons for a font they have to be in svg (scalable vector graphic) format in order to be free scalable.


- open the **[Iconfont canvas template](https://github.com/Heydon/Community-Icon-Font/blob/master/resources/inkscape_iconfont_canvas_template.svg)** in a vector graphic software and create an icon

- save icon as *icon*.svg

- open the open the **[Iconfont canvas template](https://github.com/Heydon/Community-Icon-Font/blob/master/resources/inkscape_iconfont_canvas_template.svg)** in Inkscape

- setting up the workspace 
	Object -> Fill and Stroke
	Object -> Align and Distribute
	Text -> SVG Font Editor

- import the *icon*.svg and center it on the canvas

- to make the icon work for a font it needs to be converted to a path shape
	Path -> Object to Path
	
	*troubleshooting*
	is the following steps with *get curves from selection* don't work apply the following steps aswell:
	- Path -> Combine
	- Path -> Union
	- Fill -> Solid Color

- to make a glyph from the shape now create a **new glyph** by (1), enter a **matching string** (2), enter the matching string into the **preview text** (3) and select **Get curves from selection** (4) [see troubleshooting above if icon doesn't appear]

- save icon as *iconset*.svg

- convert the svg to a font with a service like [freefontconverter.com](http://www.freefontconverter.com/)
	
	