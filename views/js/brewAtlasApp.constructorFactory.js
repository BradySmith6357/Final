angular.module("mainModule")
	.factory("constructorFactory", ["$resource", function($resource){

		var cloneRecipe = function(image, name, brewery, city, state, style, malt, hops, extra, yeast, abv, rating, notes){
			this.image = image
			this.name = name;
			this.brewery = brewery;
			this.city = city;
			this.state = state;
			this.style = style;
			this.malt = malt;
			this.hops = hops;
			this.extra = extra
			this.yeast = yeast;
			this.abv = abv;
			this.rating = rating;
			this.notes = notes

		}

		var user = function(image, firstname, lastname, brewed, badges, email, username, password) {
			this.image = image;
			this.firstname = firstname;
			this.lastname = lastname;
			this.brewed = brewed;
			this.badges = badges;
			this.email = email;
			this.username = username
		}

		var brewery = function(image, name, city, state, totalBrews){
			this.image = image;
			this.name = name;
			this.city = city;
			this.state = state
			this.totalBrews = totalBrews
		}

		var beerStyle = function(name, type){
			this.name = name;
			this.type = type
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

		cloneRecipe: cloneRecipe,
		user: user,
		brewery: brewery,
		beerStyle: beerStyle,
		hops: hops,
		malt: malt
	}

	}])