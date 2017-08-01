angular.module('mainapp', ['infinite-scroll', 'ui.router'])
    .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {
    	$urlRouterProvider.otherwise('/');
    	$stateProvider
    		.state('home',{
    			url:'/',
    			templateUrl:'src/app/livescreen.html',
    			controller: 'mainController'
    			}

    		)
    }])
    .controller('mainController', ['$scope', function($scope) {
        $scope.comment = '';
        $scope.comments = [{ 'author': 'Jack', 'text': '6666666' }, { 'author': 'Jessica', 'text': '楼主666' }, { 'author': 'Jack', 'gift': '香槟' }, { 'author': 'Jasper', 'text': '我再也不骂宝贝了' }];
        $scope.sendComment = function(comment, author = 'author') {

            $scope.comments.push({ 'author': 'Jack', 'text': comment });
            $scope.comment = '';
        }
        $scope.refreshComments=function(){
        	console.log('log');
        }

    }]);