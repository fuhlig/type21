'use strict';

/* App Module */

angular.module('type21', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/courses', {templateUrl: 'views/course-list.html',   controller: CourseListCtrl}).
      when('/courses/:courseId', {templateUrl: 'views/course-detail.html',   controller: CourseDetailCtrl}).
      when('/:courseId/:lessonId', {templateUrl: 'views/lesson-list.html', controller: LessonCtrl}).
      otherwise({redirectTo: '/courses'});
}]);
