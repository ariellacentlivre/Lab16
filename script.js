angular.module("myModule",[])
	.controller("myController",function($scope, $interval){
		$scope.heading="Words with Friends, Coding Friends";

		$scope.randomWords=[
		"dog ","train ",
		"iguana ","mom ","pizza ","Gotcha ","What's up ",
		"On the fly ","Close but no cigar "];
		
		$scope.randomClass=[
		"red ",
		"blue ",
		"size ",
		"newfont ",
		"underline ",
		"spin ","blank "];

		$scope.wordsOnPage=[];	

		$scope.Talk=function(){
			var functions= [addDecoratedWord];
			function rando(){
				return functions[Math.floor(Math.random()*functions.length)]();  
				}
			$interval(rando,500,10);

		};
		function addDecoratedWord(){
			var newElement = {}; 
			newElement.word= $scope.randomWords[Math.floor(Math.random()* $scope.randomWords.length)];
			newElement.decor= $scope.randomClass[Math.floor(Math.random()* $scope.randomClass.length)];
			$scope.wordsOnPage.push(newElement);

		}

		
});