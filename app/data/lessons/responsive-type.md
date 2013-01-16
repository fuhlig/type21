Responsive design is a technique that got a lot of attention and momentum in the recent years. No surpise by looking at the ever expanding device landscape with different screensize, resolution, dpi...this list goes on and on. If you want to know more about responsive design this [article on smashing magazine](http://www.smashingmagazine.com/responsive-web-design-guidelines-tutorials/) is a great start. 
While the most discussed topics on that technique is responsive grid and images the matter of **responsive type** is often overlooked and underestimated.

But why bother? Because [Web Design is 95% Typography](http://informationarchitects.net/blog/the-web-is-all-about-typography-period/) and thinking about it - it's right. Content is what matters because *content is king*.

Some aspects in this lesson have been covered in the other lessons of this course or other courses. But typography can not be narrowed down to one topic.


## font size
It is not just about big screen vs. small screen results in big and small font. It comes down to reading distance. [Oliver Reichenstein](http://informationarchitects.net/) came up with a good trick: hold a printed next to the screen with a comfortable reading distance and try to match the font size.

<< image font-size >>

To match the font size cross device look into using rem at the [font-sizing](#/web/font-sizing) lesson.
It is also possible to let the user set the fontsize.

## sans serif vs serif
Again it is a matter of the overall design and (maybe) personal preference. But in my opinion a sans serif font for body text looks much cleaner is easier to read on small screens.
But the decision doesn't has to be one or the other. With the use of `media queries` it is possible to **alternate fonts** for different criterias like viewport-width

`
@media (min-width:960px) { 
p {
font-family:"Droid"
} 
} 

@media (max-width:960px) { 
h1 {
font-family:"Droid", serif;
} 
} 
`



## line height and length
Here comes macro-typography ([again?](#/tDesign/macro-typo)). The horizontal and vertical rhythm.
Despite limited space on small screens it might be necessary to adjust the `line-height`. An easy adjustment and your user will benefit from it with improved reading experience.

To achieve horizontal rhythm is harder. According to an [article](http://baymard.com/blog/line-length-readability) by the [Baymard Institute](http://baymard.com/)
the optimum for line length is between 50 and 75 characters per line. A fixed contentarea would be a solution...wait! Responsive and fixed does not fit together. Setting a maximum with for the content for different device sizes works instead.
Bigger screens could use a `column-count: 2` to improve readability of bigger textareas.

