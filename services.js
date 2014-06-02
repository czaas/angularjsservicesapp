function myServices($scope){
	$scope.services = [
		{title: 'Web development', price: 500},
		{title: 'Web design', price: 300},
		{title: 'Consultant', price: 150}
	];
	$scope.total = function(){
		var t = 0;
		angular.forEach($scope.services, function(s){
			if(s.selected)
				t += s.price;
		});
		return t;
	};
}