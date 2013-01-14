## basic use

`@font-face {
	font-family: 'Roboto';	// font name for later reference
	src: url('Roboto.eot');	// path to font file (can be local or external)
}`

As seen previously there are numerous font formats. Different browser vendors use different formats. To ensure cross browser compatibility it is necessary to include all the formats.


## cross browser compatibility

`@font-face {
    font-family: 'Roboto';
    src: url('Roboto.eot');							// IE9
    src: url('Roboto.eot?#iefix') format('embedded-opentype'),	// IE6-IE8
         url('Roboto.woff') format('woff'),			// Modern Browsers
         url('Roboto.ttf') format('truetype'),		// Safari, Android, iOS
         url('Roboto.svg#Roboto') format('svg');	// legacy iOS
}`

One very usefull and free service is [Font Squirrel](http://www.fontsquirrel.com/fontface). #this service provides not only a wide selection of fonts but also **@font-face kits** which include ttf, eot, woff and svg. Another feature is the **@font-face generator** which allows to upload fonts and create a kit from it - very handy for [icon-fonts](#/tDesign/icon-fonts).