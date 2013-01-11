*this comprehensive guide was taken from [Smashing Magazine](http://www.smashingmagazine.com/2011/03/02/the-font-face-rule-revisited-and-useful-tricks/)*

## Web Font Formats ##
EOT, TTF, OTF, CFF, AFM, LWFN, FFIL, FON, PFM, PFB, WOFF, SVG, STD, PRO, XSF, and the list goes on. To find one’s way through in this veritable jungle of font formats is not exactly easy. Let’s have a closer look at the pros and cons of font formats that are particularly relevant for their use on websites.


### TRUETYPE
This format was developed in the late 1980s as a competitor to Adobe’s Type 1 fonts used in PostScript. As a scalable outline format, it replaced the common bitmap fonts that were used for screen display at that time. Microsoft took up the TrueType format as well and it soon evolved into the standard format for system fonts due to the fact that it offered fine-tuned control for a precise display of font in particular sizes.


### OPENTYPE
Microsoft and Adobe teamed up in developing this font format. Based on the TrueType format, OpenType offers additional typographical features such as ligatures, fractions or context sensitive glyphs and the like. However, browser support of these features which are common in sophisticated layout and illustration programs is still unsatisfactory. There are two different versions of OpenType fonts, depending on the outline technology used. There are:

- OpenType fonts with TrueType Outlines (OpenType TT) and
- OpenType fonts with PostScript Outlines (OpenType PS)

OpenType comes in two different versions.
OpenType PS is a so-called CFF based file format (CFF = compact file format). This is relevant when using OpenType PS fonts as Web fonts, because PostScript based formats are displayed without subpixel rendering on Windows platforms which affects the rendering quality considerably. That’s why TrueType based fonts are the better choice as Web fonts, even though Microsoft will solve this rendering issue in the future. The structures of TrueType and OpenType fonts are very similar and browser support is available in Safari 3.1 and higher, Firefox 3.5 and Opera 10 (and of course newer versions).


### EOT
Internet Explorer has supported the proprietary Embedded OpenType (EOT) standard from the late 1990s. It’s a variation of the TrueType and OpenType formats that provide the following particularities:
EOT fonts are a compact form of OpenType optimized for quick delivery on the Web due to data compression.
By means of URL-binding, EOT fonts can be tied to a specific domain. The fonts can then only be delivered to and used on those Web pages. This technique helps prevent fonts from being copied and used without a licence.
EOT is exclusively supported by Internet Explorer. Even though it might not succeed as a Web font format in the future, it still makes sense to use this format today in order to supply the users of various IE versions with Web fonts. Current IE versions (< 9) do not use any other format.
If you want to convert TTF fonts to natively compressed EOT files, you can use EOTFast (a free application) currently available only for Windows.


### WOFF
Unlike EOT, the Web Open Font Format (WOFF) is in the process of being standardized as a recommendation by the W3C which published WOFF as a working draft back in July 2010.
WOFF came into existence as a kind of a compromise between font foundries and browser companies, so it’s no wonder that WOFF has been developed by two font designers (Erik van Blokland and Tal Leming) in cooperation with Mozilla developer Jonathan Kew. Essentially, WOFF is a wrapper that contains TrueType and OpenType fonts, and it’s not really a new format of its own.
WOFF uses an integrated compression algorithm named zlib, which offers file size reduction for TrueType fonts exceeding 40%. Furthermore, meta data can be added, e.g. a user’s licence. However, this data presents only meta information and is not validated by browsers.

Thanks to WOFF, Mozilla can use its corporate typeface FF Meta.
The format has been supported by Firefox since version 3.6, and by Google Chrome since version 5.0. All other browser manufacturers are working on adding full support in future releases. Fonts can be converted into the WOFF format by the online service Font Squirrel free of charge.


### SVG
SVG fonts are text files that contain the glyph outlines represented as standard SVG elements and attributes, as if they were single vector objects in the SVG image. But this is also one of the biggest disadvantages of SVG fonts. While EOT, WOFF and PostScript-flavoured OpenType have compression built into the font format — SVG fonts are always uncompressed and usually pretty large.
SVG fonts are not really an alternative to the other Web font formats, and iOS 4.2 is the first version of Mobile Safari to support native Web fonts (in TrueType format) instead of SVG. However, SVG is the only format that can be used for the iPhone and iPad prior to iOS 4.2.
Tools, such as Font Squirrel, can be used to convert fonts into this format. Another possibility to obtain SVG fonts is to rent them from one of the numerous Web font providers.