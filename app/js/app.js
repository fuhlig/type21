'use strict';

/* App Module */

angular.module('type21', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/courses', {templateUrl: 'partials/course-list.html',   controller: CourseListCtrl}).
      when('/courses/:courseId', {templateUrl: 'partials/course-detail.html',   controller: CourseDetailCtrl}).
      when('/lesson/:lessonId', {templateUrl: 'partials/lesson-list.html', controller: LessonCtrl}).
      otherwise({redirectTo: '/courses'});
}]);
