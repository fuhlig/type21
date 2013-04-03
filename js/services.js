'use strict';

app.factory('dataService', function($http) {
	// Service logic

	var courses = [];
	var course = {};
	var lesson = {};
	var content = {};


	// Public API here
	return {
		getCourses: function() {
			var promise = $http.get('data/courses.json').then(function (response) {
				courses = response.data;
				return response.data;
			});
			return promise;
		},
		getCourse: function(route) {
			var promise = $http.get('data/courses/' + route + '.json').then(function (response) {
				// course = response.data;
				return response.data;
			});
			return promise;
		},
		getCourse_mograph: function() {
			var promise = $http.get('data/courses/mograph.json').then(function (response) {
				console.log('getcourse_mograph');
				console.log(response.data);
				console.log(response.data.lessons.length);
				return response.data;
			});
			return promise;
		},
		getCourse_tDesign: function() {
			var promise = $http.get('data/courses/tDesign.json').then(function (response) {
				return response.data;
			});
			return promise;
		},
		getCourse_web: function() {
			var promise = $http.get('data/courses/web.json').then(function (response) {
				return response.data;
			});
			return promise;
		},
		getCourse_textFx: function() {
			var promise = $http.get('data/courses/textFx.json').then(function (response) {
				return response.data;
			});
			return promise;
		},
		getLesson: function(route) {
			var promise = $http.get('data/lessons/' + route + '.json').then(function (response) {
				// lesson = response.data;
				return response.data;
			});
			return promise;
		},
		getContent: function(route) {
			var promise = $http.get('data/lessons/' + route + '.json').then(function (response) {
				// content = response.data.features[0].src;
				return response.data.features[0].src;
			});
			return promise;
		}
	};

});