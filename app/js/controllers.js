'use strict';

/* Controllers */

function CourseListCtrl($scope, dataService) {
	// $scope.dataService = dataService;
	$scope.courses = dataService.getCourses();
	console.log('dataService.courses');
	console.log(dataService.courses);
}

function CourseDetailCtrl($scope, $routeParams, dataService) {
	$scope.courses = dataService.getCourses();
	$scope.course = dataService.getCourse($routeParams.courseId);

	$scope.$routeParams = $routeParams;
}

function LessonCtrl($scope, $routeParams, $http, $location, dataService) {
	$scope.courses = dataService.getCourses();
	$scope.course = dataService.getCourse($routeParams.courseId);
	$scope.lesson = dataService.getLesson($routeParams.lessonId);
	$scope.content = dataService.getContent($routeParams.lessonId);

	// get quiz data
	$http.get("data/quizzes/web_quiz.json").success(function(quizData) {
		$scope.quiz = quizData.quiz;
	});


	// set content according to data
	$scope.setContent = function(content) {
		$scope.content = content;
	}

	$scope.$routeParams = $routeParams;
	$scope.$location = $location;
}

function AwardCtrl($scope, dataService) {
	$scope.courses = dataService.getCourses();
	$scope.course_mograph = dataService.getCourse_mograph();
	$scope.course_tDesign = dataService.getCourse_tDesign();
	$scope.course_web = dataService.getCourse_web();
	$scope.course_textFx = dataService.getCourse_textFx();

	$scope.countArchivements = function() {
		console.log($scope.course_mograph);
	}
}

function QuizCtrl($scope, dataService, $routeParams) {
	console.log('quiz');
}
