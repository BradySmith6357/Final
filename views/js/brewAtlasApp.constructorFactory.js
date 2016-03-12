angular.module("mainModule")
	.factory("constructorFactory", [function(){

		var brewery = function(image, name, city, state, totalBrews){
			this.image = image;
			this.name = name;
			this.city = city;
			this.state = state
			this.totalBrews = totalBrews
		}

		var hops = function(name, type){
			this.name = name;
			this.type = type
		}

		var malt = function(name, nation){
			this.name = name;
			this.nation = nation
		}

	// $(".dropdown-menu".click(function()){
	// 	$("#selected").text($(this).text());
	// });

	return {

		brewery: brewery,
		hops: hops,
		malt: malt
	}

}])