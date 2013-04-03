'use strict';

/* App Module */

var app = angular.module('type21', []);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/courses', {templateUrl: 'views/course-list.html',   controller: CourseListCtrl})
      .when('/courses/:courseId', {templateUrl: 'views/course-detail.html',   controller: CourseDetailCtrl})
      .when('/:courseId/:lessonId', {templateUrl: 'views/lesson.html', controller: LessonCtrl})
      .when('/:courseId/:lessonId/:featureId')
      .when('/awards', {templateUrl: 'views/awards.html', controller: AwardCtrl})
      .when('/quiz', {templateUrl: 'views/quiz.html', controller: QuizCtrl})
      .otherwise({redirectTo: '/courses'});
  }])
  .directive('markdown', function() {
    var converter = new Showdown.converter();
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var htmlText = converter.makeHtml(element.text());
            element.html(htmlText);
        }
    }	
});
