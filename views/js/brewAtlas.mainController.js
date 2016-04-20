angular.module("mainModule")
	.controller("mainController", ["$scope", "$http", "constructorFactory", function($scope, $http, constructorFactory){

// Badge List
$scope.firstPoor = {
	name: "First Pour",
	description: "Congratulations! You brewed your first beer. It'll be no time until you're a brew master."
}

$scope.dreamBig = {
	name: "Dream Big",
	description: "Five beers in your wishlist. Now it's time to brew 'em! ",
}

$scope.irishMan = {
	name: "Irishman",
	description: "Like a true Irishman, you brewed a beer on St. Patrick's day",
}

$scope.craftCommit = {
	name: "Committed To The Craft",
	description: "You've brewed 10 beers. Keep up the good work!"
}

// SET SORT ARRAYS
$scope.stateSort = []
$scope.styleSort = []
$scope.hopsSort = []
$scope.maltSort = []
$scope.abvSort = []
$scope.randomBeer = {}

//GET BEERS FROM MONGODB
$http.post('api/beerLibrary')
	.then(function(returnData){
		console.log(returnData.data)
		$scope.recipeList = returnData.data
// All sorts for beer library tabs
	$scope.stateSort = _.sortBy($scope.recipeList, "state")
	$scope.styleSort = _.sortBy($scope.recipeList, "style")
	$scope.hopsSort = _.sortBy($scope.recipeList, "hops")
	$scope.maltSort = _.sortBy($scope.recipeList, "malt")
	$scope.abvSort = _.sortBy($scope.recipeList, "abv")
	$scope.ratingSort = _.sortBy($scope.recipeList, "rating")
// Assign Random Beer
	$scope.randomBeer = $scope.recipeList[Math.floor(Math.random()*$scope.recipeList.length)]
})

//Random Beer Find
$scope.showrandomBeer = function(){
	$scope.randomBeer = $scope.recipeList[Math.floor(Math.random()*$scope.recipeList.length)]
}

//GET CUSTOM BEER FROM MONGODB
$scope.addCustomBeer = function(){
	$http.post('api/customBeer')
		.then(function(returnData){
			console.log(returnData.data)
			$scope.customBeerList.push(returnData.data)
		})
}

//GET STYLES FROM BREWDB

// $scope.getInfo = function(){
	// $http.post('api/styles')
	// 	.then(function(returnData){
	// 		console.log(returnData.data)
	// 		$scope.styleList = returnData.data
	// 	})
// }

	// ************************************* Hops **********************************************

//GET HOPS FROM BREWERYDB

	// $http.post('api/hops')
	// 	.then(function(returnData){
	// 		console.log(returnData.data)
	// 		$scope.hopsList = returnData.data
	// 	})

	$scope.hopsList = [

	$scope.Cascade = new constructorFactory.hops ("Cascade","Both"),
	$scope.FirstGold = new constructorFactory.hops ("First Gold","Both"),
	$scope.Northdown = new constructorFactory.hops ("Northdown","Both"),
	$scope.NorthernBrewer = new constructorFactory.hops ("Northern Brewer","Both"),
	$scope.Orion = new constructorFactory.hops ("Orion","Both"),
	$scope.Pioneer = new constructorFactory.hops ("Pioneer","Both"),
	$scope.SouthernCross = new constructorFactory.hops ("Southern Cross","Both"),
	$scope.Sticklebract = new constructorFactory.hops ("Sticklebract","Both"),
	$scope.Warrior = new constructorFactory.hops ("Warrior","Both"),
	$scope.Admiral = new constructorFactory.hops ("Admiral","Bittering"),
	$scope.Banner = new constructorFactory.hops ("Banner","Bittering"),
	$scope.BrewersGold = new constructorFactory.hops ("Brewers Gold","Bittering"),
	$scope.Bullion = new constructorFactory.hops ("Bullion","Bittering"),
	$scope.Centennial = new constructorFactory.hops ("Centennial","Bittering"),
	$scope.Chinook = new constructorFactory.hops ("Chinook","Bittering"),
	$scope.Cluster = new constructorFactory.hops ("Cluster","Bittering"),
	$scope.Columbia = new constructorFactory.hops ("Columbia","Bittering"),
	$scope.Tomahawk = new constructorFactory.hops ("Tomahawk","Bittering"),
	$scope.Comet = new constructorFactory.hops ("Comet","Bittering"),
	$scope.Eroica = new constructorFactory.hops ("Eroica","Bittering"),
	$scope.Fuggles = new constructorFactory.hops ("Fuggles","Bittering"),
	$scope.GreenBullet = new constructorFactory.hops ("Green Bullet","Bittering"),
	$scope.Herald = new constructorFactory.hops ("Herald","Bittering"),
	$scope.Horizon = new constructorFactory.hops ("Horizon","Bittering"),
	$scope.Lublin = new constructorFactory.hops ("Lublin","Bittering"),
	$scope.Magnum = new constructorFactory.hops ("Magnum","Bittering"),
	$scope.Nugget = new constructorFactory.hops ("Nugget","Bittering"),
	$scope.PacificGem = new constructorFactory.hops ("Pacific Gem","Bittering"),
	$scope.Pearle = new constructorFactory.hops ("Pearle","Bittering"),
	$scope.Phoenix = new constructorFactory.hops ("Phoenix","Bittering"),
	$scope.Pilgrim = new constructorFactory.hops ("Pilgrim","Bittering"),
	$scope.PrideofRingwood = new constructorFactory.hops ("Pride of Ringwood","Bittering"),
	$scope.Sun = new constructorFactory.hops ("Sun","Bittering"),
	$scope.SuperAlpha = new constructorFactory.hops ("Super","Bittering"),
	$scope.Target = new constructorFactory.hops ("Target","Bittering"),
	$scope.Tradition = new constructorFactory.hops ("Tradition","Bittering"),
	$scope.Zeus = new constructorFactory.hops ("Zeus","Bittering"),
	$scope.Ahtanum = new constructorFactory.hops ("Ahtanum","Aroma"),
	$scope.AmarilloGold = new constructorFactory.hops ("Amarillo Gold","Aroma"),
	$scope.Aquila = new constructorFactory.hops ("Aquila","Aroma"),
	$scope.BramlingCross = new constructorFactory.hops ("Bramling Cross","Aroma"),
	$scope.Challenger = new constructorFactory.hops ("Challenger","Aroma"),
	$scope.Crystal = new constructorFactory.hops ("Crystal","Aroma"),
	$scope.Fuggles = new constructorFactory.hops ("Fuggles","Aroma"),
	$scope.Glacier = new constructorFactory.hops ("Glacier","Aroma"),
	$scope.Hallertauer = new constructorFactory.hops ("Hallertauer","Aroma"),
	$scope.Liberty = new constructorFactory.hops ("Liberty","Aroma"),
	$scope.MtHood = new constructorFactory.hops ("Mt. Hood","Aroma"),
	$scope.Progress = new constructorFactory.hops ("Progress","Aroma"),
	$scope.Saaz = new constructorFactory.hops ("Saaz","Aroma"),
	$scope.Santiam = new constructorFactory.hops ("Santiam","Aroma"),
	$scope.SelectSpalt = new constructorFactory.hops ("Select Spalt","Aroma"),
	$scope.Spalter = new constructorFactory.hops ("Spalter","Aroma"),
	$scope.Strisselspalt = new constructorFactory.hops ("Strisselspalt","Aroma"),
	$scope.StyrianGoldings = new constructorFactory.hops ("Styrian Goldings","Aroma"),
	$scope.Tettnang = new constructorFactory.hops ("Tettnang","Aroma"),
	$scope.Ultra = new constructorFactory.hops ("Ultra","Aroma"),
	$scope.Vanguard = new constructorFactory.hops ("Vanguard","Aroma"),
	$scope.Willamette = new constructorFactory.hops ("Willamette","Aroma")

	]
 // ********************************* Malt List ************************************

 	$scope.maltList = [

	$scope.BlackBarley = new constructorFactory.malt ("Black Barley", "American"),
	$scope.BlackPatentMalt = new constructorFactory.malt ("Black Patent Malt", "American"),
	$scope.ChocolateMalt = new constructorFactory.malt ("Chocolate Malt", "American"),
	$scope.CrystalMalt = new constructorFactory.malt ("Crystal Malt", "American"),
	$scope.Carapils = new constructorFactory.malt ("Carapils", "American"),
	$scope.MunichMalt = new constructorFactory.malt ("Munich Malt", "American"),
	$scope.Pale2row = new constructorFactory.malt ("Pale 2-row", "American"),
	$scope.Pale6row = new constructorFactory.malt ("Pale 6-row", "American"),
	$scope.RoastedBarley = new constructorFactory.malt ("Roasted Barley", "American"),
	$scope.SpecialRoast = new constructorFactory.malt ("Special Roast", "American"),
	$scope.VictoryMalt = new constructorFactory.malt ("Victory Malt", "American"),
	$scope.ViennaMalt = new constructorFactory.malt ("Vienna Malt", "American"),
	$scope.WheatMalt = new constructorFactory.malt ("Wheat Malt", "American"),
	$scope.WhiteWheatMalt = new constructorFactory.malt ("White Wheat Malt", "American"),
	$scope.AromaticMalt = new constructorFactory.malt ("Aromatic Malt", "Belgian"),
	$scope.BelgianPaleAleMalt = new constructorFactory.malt ("Belgian Pale Ale Malt", "Belgian"),
	$scope.BiscuitMalt = new constructorFactory.malt ("Biscuit Malt", "Belgian"),
	$scope.CaramunichMalt = new constructorFactory.malt ("Caramunich Malt", "Belgian"),
	$scope.CaravienneMalt = new constructorFactory.malt ("Caravienne Malt", "Belgian"),
	$scope.ChocolateMalt = new constructorFactory.malt ("Chocolate Malt", "Belgian"),
	$scope.DeBitteredBlackMalt = new constructorFactory.malt ("De-Bittered Black Malt", "Belgian"),
	$scope.PaleWheat = new constructorFactory.malt ("Pale Wheat", "Belgian"),
	$scope.PilsenMalt = new constructorFactory.malt ("Pilsen Malt", "Belgian"),
	$scope.RoastedWheat = new constructorFactory.malt ("Roasted Wheat", "Belgian"),
	$scope.SpecialMalt = new constructorFactory.malt ("Special Malt", "Belgian"),
	$scope.AmberMalt = new constructorFactory.malt ("Amber Malt", "British"),
	$scope.BlackPatentMalt = new constructorFactory.malt ("Black Patent Malt", "British"),
	$scope.BrownMalt = new constructorFactory.malt ("Brown Malt", "British"),
	$scope.Carmalt = new constructorFactory.malt ("Caramalt", "British"),
	$scope.ChocolateMalt = new constructorFactory.malt ("Chocolate Malt", "British"),
	$scope.CrystalMalt = new constructorFactory.malt ("Crystal Malt", "British"),
	$scope.DarkCrystalMalt = new constructorFactory.malt ("Dark Crystal Malt", "British"),
	$scope.LagerMalt = new constructorFactory.malt ("Lager Malt", "British"),
	$scope.MildAleMalt = new constructorFactory.malt ("Mild Ale Malt", "British"),
	$scope.OatMalt = new constructorFactory.malt ("Oat Malt", "British"),
	$scope.PaleChocolateMalt = new constructorFactory.malt ("Chocolate Malt", "British"),
	$scope.PeatSmokedMalt = new constructorFactory.malt ("Peat Smoked Malt", "British"),
	$scope.RoastedBarley = new constructorFactory.malt ("Roasted Barley", "British"),
	$scope.ToastedPaleMalt = new constructorFactory.malt ("Toasted Pale Malt", "British"),
	$scope.AcidulatedSauerMalt = new constructorFactory.malt ("Acidulated(Sauer) Malt", "German"),
	$scope.ChocolateRyeMalt = new constructorFactory.malt ("Chocolate Rye Malt", "German"),
	$scope.ChocolateWheatMalt = new constructorFactory.malt ("Chocolate Wheat Malt", "German"),
	$scope.DarkMunichMalt = new constructorFactory.malt ("Dark Munich Malt", "German"),
	$scope.KolschMalt = new constructorFactory.malt ("Kolsch Malt", "German"),
	$scope.RyeMalt = new constructorFactory.malt ("Rye Malt", "German"),
	$scope.ViennaMalt = new constructorFactory.malt ("Vienna Malt", "German")
	
	]





// For modal display
$scope.displayedBeer = {}

$scope.showBeer = function(beer, index){
	$scope.displayedBeer = beer
	$scope.displayedBeerIndex = index
		for(var i = 0; i <= $scope.user.completed.length; i++){
			if($scope.user.completed[i] == $scope.displayedBeer){
				$scope.hideProAdd = true
				$scope.showProDis = true
				$scope.hideWishAdd = true
				$scope.showWishDis = true
			} else {
				$scope.hideProAdd = false
				$scope.showProDis = false
				$scope.hideWishAdd = false
				$scope.showWishDis = false
			}		
		// }
		// for(var i = 0; i <= $scope.user.wishlist.length; i++){
			// if($scope.user.wishlist[i].name == $scope.displayedBeer.name){
			// 	$scope.hideWishAdd = true
			// 	$scope.showWishDis = true
			// } else {
			// 	$scope.hideWishAdd = false
			// 	$scope.showWishDis = false
			// }		
		}
}
	$scope.showNotes = function(beer){
		$scope.displayedBeer = beer
	}


// Add Custom Beer
	$scope.addCustomBeer = function(){
		$http.post('api/customBeers', $scope.newCustomBeer)
			.then(function(serverData){
				$scope.newCustomBeer = {}
				$scope.user = serverData.data
				$scope.customBeerList = serverData.data.custom
				alert("Looks tasty! Go to your profile to check it out!")
			})
	}

// Add badge to profile
// $scope.addBeer = function(){}
// console.log("add badge")
// $http.post('api/badges', $scope.firstPoor)
// 	.then(function(returnData){
// 		if($scope.user.completed.length === 1 && $scope.user.badges[0] === !$scope.firstPoor){
// 			$scope.user.badges.push($scope.firstPoor)
// 			alert("You've earned a badge! Go to your profile to check it out")
// 	}
// })

	
// Retrieve the user
$scope.checkLogin = function(){
    $http.get('/me')
        .then(function(returnData){
            if(!returnData.data.user){
                window.location.href = '/signup'
            }else{
            	console.log("User:",returnData.data.user)
                $scope.user = returnData.data.user
                window.location.href = '/activeuser'

            }
        })  
}

$http.get('/me')
	.then(function(returnData){
		if(!returnData.data.user){
			$scope.noUser = true
			$scope.hideProAdd = true
			$scope.hideWishAdd = true
		} else {
			$scope.user = returnData.data.user
			$scope.customBeerList = returnData.data.user.custom
			$scope.yesUser = true
		}
	})

// Function to add beer to user completed list //
		$scope.addBeer = function(){
			console.log("add beer")
			$scope.hideProAdd = true
			$scope.showProDis = true
			$http.post('api/completedBeers', $scope.displayedBeer)
				.then(function(returnData){
					$scope.user.completed.push($scope.displayedBeer)
					console.log("SERVER DATA:", returnData.data.completed)
					console.log("displayed beer", $scope.displayedBeer)
					// Delete beer from wishlist if it matches beer in profile
						$http.delete('api/wishlist', $scope.displayedBeer)
							.then(function(returnData){
								$scope.user.wishlist.splice($scope.displayedBeerIndex, 1)
								// $scope.user.wishlist = returnData.data.wishlist
								console.log("RETURN DATA:", returnData.data)
							})
						// $http.get('/me')
						// 	.then(function(returnData){
						// 		$scope.user = returnData.data.user
						// 	})
				if($scope.user.completed.length === 1){
					alert("You've earned a badge! Go to your profile to check it out")
					$http.post('api/badges', $scope.firstPoor)
						.then(function(returnData){
								$scope.user.badges.push($scope.firstPoor)
								$scope.user.badges = returnData.data.badges
						})
					}
				})
		}

		// $scope.showCompleted = function(){
			$http.get('api/completedBeers')
				.then(function(serverData){
					// console.log("Line 255:", serverData)
					$scope.user.completed = serverData.data
				})
		// }

// Function to add beer to user wishlist //
		$scope.addWish = function(beer){
			$scope.hideWishAdd = true
			$scope.showWishDis = true
			$http.post('api/wishlistBeers', $scope.displayedBeer)
				.then(function(serverData){
					$scope.user.wishlist.push($scope.displayedBeer)
				})
		}

		$http.get('/api/wishlistBeers')
			.then(function(serverData){
				$scope.user.wishlist = serverData.data
			})

// Add notes to beer in profile
	$scope.addNotes = function(beer){
		$http.post('api/notes', $scope.displayedBeer)
			.then(function(serverData){
				console.log(serverData.data)
				$scope.user.completed = serverData.data
			})
	}


// For ABV calculator.
	$scope.calcABV = function(event){
		$scope.abv = ($scope.ogtext - $scope.fgtext) * 131;
		if (isNaN($scope.abv)) {
			$scope.abv = "calculating..."
		}
		else{
			$scope.abv = parseFloat($scope.abv).toFixed(2)
			$scope.abv = $scope.abv.toString() + "%"
		}
	}
//Search funciton
// $scope.findBeer = function(){
// 	console.log($scope.beer)
// 	$http.post('api/findBeer', $scope.beer)
// 		.then(function(returnData){
// 			console.log(returnData.data)
// 			$scope.searchResults = returnData.data
// 		})
// }

// $scope.findBrewery = function(){
// 	console.log($scope.brewery)
// 	$http.post('api/findBrewery', $scope.brewery)
// 		.then(function(returnData){
// 			console.log(returnData.data)
// 			$scope.searchResults = returnData.data
// 		})
// }

$scope.beerSearch = function(){
	console.log($scope.searchInput)
	$http.post('api/findBeer', $scope.searchInput)
		.then(function(returnData){
			console.log(returnData.data)
			if(returnData.data = err){
				console.log("Oh no! Error:", err)
				$timeout(noBeer, 3000)
			} else {
				console.log(returnData.data)
			}
		})
}


}])