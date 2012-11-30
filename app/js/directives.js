'use strict';

/* Directives */


/* mdConverter
 * CUSTOM COMPONENT TO CONVERT MARKDOWN TO HTML VIA SHOWDOWN.JS
 * based on John Linkquist's "AngularJS Custom Components"
 */

angular.module('mdConverter', [])
    .directive('markdown', function () {
        var converter = new Showdown.converter();
        return{
            restrict:'E',
            link:function(scope, element, attrs) {
	            var htmlText = converter.makeHtml(element.text());
	            element.html(htmlText);
            }
        }
    });