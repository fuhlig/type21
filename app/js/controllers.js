'use strict';

/* Controllers */


function CourseListCtrl($scope, $http) {
	$http.get("data/courses.json").success(function(data) {
		$scope.courses = data;
	});

	$scope.startTour = function() {
	    $("#introTour").joyride({
	      // Options
	      // "tipLocation": "top"
	      // "timer": 2000
	    });
  	}
}

function CourseDetailCtrl($scope, $routeParams, $http) {
	$http.get("data/courses.json").success(function(data) {
		$scope.courses = data;
	});

	$http.get("data/courses/" + $routeParams.courseId +".json").success(function(data) {
		$scope.course = data;
	});
}

function LessonCtrl($scope, $routeParams, $http) {
	$http.get("data/courses.json").success(function(data) {
		$scope.courses = data;
	});

	$http.get("data/lessons/" + $routeParams.lessonId +".json").success(function(data) {
		$scope.lesson = data;
	});}