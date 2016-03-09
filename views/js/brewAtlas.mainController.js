angular.module("mainModule")
	.controller("mainController", ["$scope", "$http", "constructorFactory", function($scope, $http, constructorFactory){

	$scope.recipeList = [

	$scope.theAbyss = new constructorFactory.cloneRecipe ("http://beerphoria.com/wp-content/uploads/2013/11/TheAbyss_Oval.png", "The Abyss", "Deschutes Brewery", "Bend", "OR", "Imperial Stout", ["Roasted Barley", "Black Barley", "Chocolate", "De-Bitter Black Malt", "Pale", "Wheat"], ["Millennium", "Northern Brewer", "Nugget", "Styrian"], ["Molasses", "Licorice", "Cherry Bark", "Vanilla Beans"], "English Ale", 10.76, 4, []),

	$scope.twilightSummerAle = new constructorFactory.cloneRecipe ("http://2.bp.blogspot.com/-NjxbaQlVDtk/T5_zGh7aJTI/AAAAAAAAJEc/RZhJNf1Rac0/s1600/twilight.png", "Twilight Summer Ale", "Deschutes Brewery", "Bend", "OR", "Blonde Ale", ["Pale", "Carastan", "Carapils", "Munich"], ["Northern Brewer", "Amarillo", "Cascade", "Tettnang"], "NA", "English Ale", 5, 3, []),

	$scope.mirrorPond = new constructorFactory.cloneRecipe ("https://41.media.tumblr.com/tumblr_m3ey0ntbIR1r2mmxjo1_250.png", "Mirror Pond", "Deschutes Brewery", "Bend", "OR", "Pale Ale", ["Pale", "Crystal", "Carapils"], "Cascade", "NA", "English Ale", 5, 3.5, []),

	$scope.chainbreaker = new constructorFactory.cloneRecipe ("http://2.bp.blogspot.com/-nwn1zRlRdjw/T4srnz-NFBI/AAAAAAAAERs/X9Rpbi5EUdk/s1600/CB_oval.png", "Chainbreaker", "Deschutes Brewery", "Bend", "OR", "White IPA", ["Pilsner", "Wheat", "Unmalted Wheat"], ["Bravo", "Citra", "Cascade", "Centennial"], ["Sweet Orange Peel", "Coriander"], "Belgian Ale", 5.5, 3.3,[]),

	$scope.inversion = new constructorFactory.cloneRecipe ("http://www.girlswholikebeer.com/wp-content/uploads/2012/08/INV_oval.png", "Inversion", "Deschutes Brewery", "Bend", "OR", "IPA", ["Crystal", "Pale", "Munich", "Caramel"], ["Millenium", "Centennial", "Northern Brewer", "Cascade", "Citra"], "NA", "English Ale", 6.8, 2.8,[]),

	$scope.obsidian = new constructorFactory.cloneRecipe ("http://savwaywines.com/Images/Products/Beer/OBS_oval.png", "Obsidian", "Deschutes Brewery", "Bend", "OR", "Stout", ["Roasted Barley", "Black Barley", "Pale", "Carapils", "Munich", "Wheat", "Crystal"], ["Nugget", "Willanette", "Northern Brewer"], "NA", "English Ale", 6.4, 3.8,[]),

	$scope.blackButte = new constructorFactory.cloneRecipe ("http://4.bp.blogspot.com/-ujLpMmmOxM4/TmhJRmZRhkI/AAAAAAAAAHE/HuRHGOiX9sk/s1600/Black_Butter_Porter2.png","Black Butte", "Deschutes Brewery", "Bend", "OR", "Porter", ["Chocolate", "Pale", "Wheat", "Crystal", "Carapils"], ["Bravo", "Cascade", "Tettnang"], "NA", "Wyeast 1187", 5.2, 4.8,[]),

	$scope.redChair = new constructorFactory.cloneRecipe ("http://www.beauchampdist.com/wp-content/uploads/2012/01/brew_label_l_redchair.png", "Red Chair NWPA", "Deschutes Brewery", "Bend", "OR", "Pale Ale", ["Pale", "Crystal", "Carastan", "Carapils", "Munich", "Pilsner"], ["Cascade", "Centennial"], "NA", "English Ale", 5.2, 4.6,[]),	

	$scope.headyTopper = new constructorFactory.cloneRecipe ("http://media.tumblr.com/a369fb0d4928fb39b38d15f3363c7601/tumblr_inline_mmnn2dNgDz1qz4rgp.gif", "Heady Topper", "The Alchemist", "Waterbury", "VT", "IPA", ["2 Row Pale", "Caravienne"], ["Simcoe", "Apollo", "Cascade", "Centennial", "Colombus", "Chinook"], "NA", "WLP001", 6.4, 4.4,[])

	]

	// ************************************ Custom Beer **********************************

	$scope.customBeerList = [
		{
			name: 'Beer1',
			style: 'Amber',
			malt: ['Biscuit', 'Carared', '2-row'],
			hops: ['Centennial', 'Cascade'],
			special: 'none',
			yeast: 'Ale Yeast'
		}
	]

	// ************************************* Style Library *********************************************

	$scope.styleList = [

	$scope.AmberAle = new constructorFactory.beerStyle ("Amber/Red  Ale", "Ale"),
	$scope.Barleywine = new constructorFactory.beerStyle ("Barleywine", "Ale"),
	$scope.BlackAle = new constructorFactory.beerStyle ("Black Ale", "Ale"),
	$scope.BlondeAle = new constructorFactory.beerStyle ("Blonde Ale", "Ale"),
	$scope.BrownAle = new constructorFactory.beerStyle ("Brown Ale", "Ale"),
	$scope.WheatAle = new constructorFactory.beerStyle ("Wheat Ale", "Ale"),
	$scope.ImperialIPA = new constructorFactory.beerStyle ("Imperial IPA", "Ale"),
	$scope.IPA = new constructorFactory.beerStyle ("IPA", "Ale"),
	$scope.PaleAle = new constructorFactory.beerStyle ("Pale Ale", "Ale"),
	$scope.Porter = new constructorFactory.beerStyle ("Porter", "Ale"),
	$scope.Stout = new constructorFactory.beerStyle ("Stout", "Ale"),
	$scope.StrongAle = new constructorFactory.beerStyle ("Strong Ale", "Ale"),
	$scope.WildAle = new constructorFactory.beerStyle ("Wild Ale", "Ale"),
	$scope.CreamAle = new constructorFactory.beerStyle ("Cream Ale", "Ale"),
	$scope.RyeAle = new constructorFactory.beerStyle ("Rye Ale", "Ale"),
	$scope.BelgianPaleAle = new constructorFactory.beerStyle ("Belgian Pale Ale", "Ale"),
	$scope.BelgianDubbel = new constructorFactory.beerStyle ("Belgian Dubbel", "Ale"),
	$scope.BelgianTripel = new constructorFactory.beerStyle ("Belgian Tripel", "Ale"), 
	$scope.BelgianQuad = new constructorFactory.beerStyle ("Belgian Quad", "Ale"),
	$scope.FarmhouseAle = new constructorFactory.beerStyle ("Saison/Farmhouse Ale", "Ale"),
	$scope.AmberLager = new constructorFactory.beerStyle ("Amber Lager","Lager"),
	$scope.DoubleImperialPilsner = new constructorFactory.beerStyle ("Double/Imperial Pilsner","Lager"),
	$scope.PaleLager = new constructorFactory.beerStyle ("Pale Lager","Lager"),
	$scope.CaliforniaCommon = new constructorFactory.beerStyle ("California Common","Lager"),
	$scope.DarkLager = new constructorFactory.beerStyle ("Dark Lager","Lager"),
	$scope.Bock = new constructorFactory.beerStyle ("Bock","Lager"),
	$scope.Doppelbock = new constructorFactory.beerStyle ("Doppelbock","Lager"),
	$scope.Eisbock = new constructorFactory.beerStyle ("Eisbock","Lager"),
	$scope.Maibock = new constructorFactory.beerStyle ("Maibock","Lager"),
	$scope.Marzen = new constructorFactory.beerStyle ("Marzen","Lager"),
	$scope.Rauchbier = new constructorFactory.beerStyle ("Rauchbier","Lager"),
	$scope.Schwarzbier = new constructorFactory.beerStyle ("Schwarzbier","Lager"),
	$scope.ViennaLager = new constructorFactory.beerStyle ("ViennaLager","Lager")

	]

	// ************************************* Hops **********************************************

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


	$scope.userList = [

	$scope.berkeley = new constructorFactory.user ("BerkeleyPicture.jpg", "Berkeley", "Smith", 4, 0, "bsmit6357@gmail.com", "bsmit6357", "Steelers11")

	]

	$scope.breweryList = [

	$scope.deschutesBrewery = new constructorFactory.brewery ("http://www.southsoundtalk.com/wp-content/uploads/2016/01/deschutes_brewery_logo.png", "Deschutes", "Bend", "OR", 8)

	]

// The below array should automatically update with the top three rated beers.
	$scope.highRating = [
		$scope.blackButte,
		$scope.headyTopper,
		$scope.redChair
		]

	$scope.brewOfTheMonth = [
	$scope.headyTopper
	]

	$scope.brewerOfTheMonth = [
	$scope.berkeley
	]

	$scope.breweryOfTheMonth = [
	$scope.deschutesBrewery
	]

// All sorts for beer library tabs
	$scope.nameSort = _.sortBy($scope.recipeList, "name")

	$scope.stateSort = _.sortBy($scope.recipeList, "state")

	$scope.styleSort = _.sortBy($scope.recipeList, "style")

	$scope.hopsSort = _.sortBy($scope.recipeList, "hops")

	$scope.maltSort = _.sortBy($scope.recipeList, "malt")

	$scope.abvSort = _.sortBy($scope.recipeList, "abv")

	$scope.ratingSort = _.sortBy($scope.recipeList, "rating")

// For modal display
	$scope.displayedBeer = ""

	$scope.showBeer = function(name){
			$scope.displayedBeer = name
	}

	$scope.showBeer = function(state){
			$scope.displayedBeer = state
	}

	$scope.showBeer = function(style){
			$scope.displayedBeer = style
	}

	$scope.showBeer = function(hops){
			$scope.displayedBeer = hops
	}

	$scope.showBeer = function(malt){
			$scope.displayedBeer = malt
	}

	$scope.showBeer = function(abv){
			$scope.displayedBeer = abv
	}

	$scope.showBeer = function(rating){
			$scope.displayedBeer = rating
	}

	$scope.showBeer = function(beer){
		$scope.displayedBeer = beer
	}
	$scope.showNotes = function(beer){
		$scope.displayedBeer = beer
	}


// *** Function to add custom beer form to your list with AJAX *** //

		$http.get('/api/customBeers')
			.then(function(serverData){
				$scope.customBeerList = serverData.data
			})

		$scope.addCustomBeer = function(){
			$http.post('api/customBeers', $scope.newCustomBeer)
				.then(function(serverData){
					$scope.customBeerList = serverData.data
					$scope.newCustomBeer = {}
				})
		}
	
// Function to add beer to user completed list //
		$http.get('/api/completedBeers')
			.then(function(serverData){
				$scope.userCompletedList = serverData.data
			})
		$scope.addBeer = function(beer){
			$http.post('api/completedBeers')
				.then(function(serverData){
					$scope.userCompletedList = beer
				})
		}


// Function to add beer to user wishlist //
		$http.get('/api/wishlistBeers')
			.then(function(serverData){
				$scope.userWishlist = serverData.data
			})
		$scope.addWish = function(beer){
			$http.post('api/wishlistBeers')
				.then(function(serverData){
					$scope.userWishlist = beer
				})
		}

// Retrieve the user
    $http.get('/me')
        .then(function(returnData){
            if(!returnData.data.user){
                // No user - Kick em out
                window.location.href = '/' //EXPRESS ROUTE
                // $location.url('/') //ANGULAR ROUTE
            }
            else{
                // rest of controller goes here
                $scope.user = returnData.data.user

            }
        })    	


$scope.selectedStyle = "Beer Style"
// Function to show selection from dropdown
	$scope.selectStyle = function(style){
		$scope.selectedStyle = style.name
	}

$scope.selectedMalt1 = "Grain #1"
$scope.selectedMalt2 = "Grain #2"
$scope.selectedMalt3 = "Specialty Grain"
$scope.selectMalt1 = function(malt){
		$scope.selectedMalt1 = malt.name
	}
$scope.selectMalt2 = function(malt){
		$scope.selectedMalt2 = malt.name
	}
$scope.selectMalt3 = function(malt){
		$scope.selectedMalt3 = malt.name
	}

$scope.selectedHops1 = "Hops #1"
$scope.selectedHops2 = "Hops #2"
$scope.selectedHops3 = "Hops #3"
$scope.selectHops1 = function(hops){
		$scope.selectedHops1 = hops.name
	}
$scope.selectHops2 = function(hops){
		$scope.selectedHops2 = hops.name
	}
$scope.selectHops3 = function(hops){
		$scope.selectedHops3 = hops.name
	}

// Add notes to beer in profile currently only adds a seperate array
	$scope.addNotes = function(beer){
		beer.notes.push(beer.notes)
		beer.notes.toString()
		console.log($scope.berkeleyCompleted)
	}

// // Calculates the brewer who has brewed the most beers in the month
// 	$scope.brewerOfTheMonthFunc = function(){
// 		for(i=0; i < $scope.userList.length; i++){
// 			if($scope.userList[i].brewed > $scope.userList[i + 1].brewed){
// 				$scope.brewerOfTheMonth = $scope.userList[i]
// 			}
// 		}
// 	}

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

$scope.findBeer = function(){
	console.log($scope.beer)
	$http.post('api/findBeer', $scope.beer)
}

// // Signup form
	$scope.signup = function(){
        $http({
            method : 'POST',
            url    : '/signup',
            data   : $scope.signupForm
        }).then(function(returnData){
            console.log(returnData)
            if ( returnData.data.success ) { window.location.href="/activeuser" }
        })
    }

// // Signin form
    $scope.login = function(){
        $http({
            method : 'POST',
            url    : '/login',
            data   : $scope.loginForm
        }).then(function(returnData){
            if ( returnData.data.success ) { window.location.href="/activeuser" } 
            else { console.log(returnData)}
        })
    }


// // Signup form
// $http.post('/signup', $scope.signupForm)
//             .then(function(returnData){
//                 if(returnData.data.success){
//                     $location.url('/activeuser') //ANGULAR ROUTE
//                     // window.location.href = '/profile' //EXPRESS ROUTE
//                 }
//                 else{
//                     $scope.errorMsg = 'You suck!'
//                     $timeout(function(){
//                         $scope.errorMsg = ''
//                     }, 4000)
//                 }
//             })

// // // Login form
// $http.post('/login', $scope.loginForm)
//             .then(function(returnData){
//                 if(returnData.data.success){
//                     $location.url('/activeuser') //ANGULAR ROUTE
//                     // window.location.href = '/profile' //EXPRESS ROUTE
//                 }
//                 else{
//                     $scope.errorMsg = 'You suck!'
//                     $timeout(function(){
//                         $scope.errorMsg = ''
//                     }, 4000)
//                 }
//             })

}])