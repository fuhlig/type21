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
	    console.log("tour start!");
  	}
}

function CourseDetailCtrl($scope, $routeParams, $http) {
	$http.get("data/courses.json").success(function(data) {
		$scope.courses = data;
	});

	$http.get("data/courses/" + $routeParams.courseId +".json").success(function(data) {
		$scope.course = data;
	});
	$scope.$routeParams = $routeParams;
}

function LessonCtrl($scope, $routeParams, $http) {
	// get course list	
	$http.get("data/courses.json").success(function(data) {
		$scope.courses = data;
	});

	// get course details
	$http.get("data/courses/" + $routeParams.courseId +".json").success(function(data) {
		$scope.course = data;
	});

	// get lesson details
	$http.get("data/lessons/" + $routeParams.lessonId +".json").success(function(data) {
		$scope.lesson = data;
		$scope.content = data.features[0].content;
	});

	$scope.setContent = function(content) {
		$scope.content = content;
	}

	$scope.$routeParams = $routeParams;

}
