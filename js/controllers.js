'use strict';

/* Controllers */

function CourseListCtrl($scope, $http) {
	$http.get("data/courses.json").success(function(data) {
		$scope.courses = data;
	});

	// $scope.startTour = function() {
	//     $("#introTour").joyride({
	//       // Options
	//       // "tipLocation": "top"
	//       // "timer": 2000
	//       "nextButton": false
	//     });
 //  	}
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

function LessonCtrl($scope, $routeParams, $http, $location) {
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
		$scope.content = data.features[0].src;

		// $scope.resources = data.features[3].resources;
		// if (data.features.id == "resources") {
		// 	$scope.resources = data.features.resources;
		// 	console.log("init resources");
		// }
	});

	// get quiz data
	$http.get("data/quizzes/web_quiz.json").success(function(quizData) {
		$scope.quiz = quizData.quiz;
	});


	// set content according to data
	$scope.setContent = function(content) {
		$scope.content = content;
		// if (data.features.id == "resources") {
		// 	console.log("resources");
		// } 
		// else {
		// 	console.log("other");
		// };
	}

	$scope.$routeParams = $routeParams;
	$scope.$location = $location;
}

// function QuizControl($scope, $http) {
// 	$http.get("data/quizzes.json").success(function(quizData) {
// 		$scope.quiz = quizData;
// 	});
// }

