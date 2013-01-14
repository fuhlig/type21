# Web Fonts

Web typography came a long way since the beginning of the world wide web and made a big leap in recent years.

Web fonts allow the use of fonts that are not installed on the user's device. 
In the past web designers were very limited with typography within the browser. Possible solutions were using only fonts that were commonly installed on user's computer or the use of images. 
Plain text on images had the big drawback that they didn't include any interactivity in terms that they were not selectable and therefor couldn't be copied and pasted. Search engines were unable to recognise the text and images have worse performance than plain text.

CSS2 made it possible to download and use external fonts either from a web font service or via the `@font-face` rule.


# services
Web Font Services allow the use of extensive font libraries.
To include these into a website only a script needs to be embedded with the specific font and defined in CSS.

Two of the most free and popular services are Google Web Fonts and Adobe Egde Webfonts (formerly known as Typekit)

## Google Web Fonts
This free service by Google is easy and fast to get started with.

<<image>>

Fonts can be either added to **Collection** and embedded with one script or single fonts via the **Quick-use**

### use

The *standard* way is to load a script  and integrate the font into the css

javascript
>`
<head>
	<link href='http://fonts.googleapis.com/css?family=Donegal+One' rel='stylesheet' type='text/css'>
</head>
`

css
>`font-family: 'Donegal One', serif;`

CSS3 also supports the @import rule so no external javascripts needs to be loaded but works the same way. 
Google Web Fonts also supports a pure Javascript solution as a fallback.



## Adobe Edge Webfonts
Adobe recently launched a similar service called Egde Webfonts. Adobe aquired Typekit and integrated it within the [Edge Services and Tools](http://html.adobe.com/edge/) (e.g. Edge Code, Reflow, Muse and others)

<<image>>

### use

Via Edge Webfonts a javascript is loaded and `font-family`integrated in CSS - similar to Google Webfonts

javascript
>`<script src="http://use.edgefonts.net/droid-sans.js"></script>`

css
>`font-family: droid-sans, serif;`