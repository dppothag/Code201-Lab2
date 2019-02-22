var user = getUsername();
	console.log(user);
	alert('Welcome ' + user + ' to my personal blog');
var playGame = okToPlay();
	play(playGame);
	var car = findMyCar();
	favouriteCar(car);
	var bornCity = getBirthRegion();
	birthPlace(bornCity);
	var sport = getFavouriteSport();
	favouriteSport(sport);

	alert('Thank you for playing Guessing Game about Myself!!!');

function getUsername() {
	user = window.prompt('Please enter your name');
	return user;
};

function okToPlay() {
		playGame = window.prompt('Interested in Guessing things about Myself(Y/N)?');
		return playGame;
};

function findMyCar() {
	car = window.prompt('Guess my favourite car');
	return car;
};

function getBirthRegion() {
	birthPlace = window.prompt('Guess my Birth Village');
	return birthPlace;
};

function getFavouriteSport() {
	sport = window.prompt('Guess my Favourite Sport');
	return sport;
};

function play(playGame){
	playGame = this.playGame;
	playGame = playGame.toLowerCase();
	var option1 = 'y';
    var option2 = 'yes';
	if (playGame === null) {
		alert('No User Input. Please enter')
	}
	else if (playGame === option1 || playGame === option2)
  {
		alert('All the very Best!! Lets play the game');
	}
	else {
		alert('Please enter Yes or Y to play game');
	}
};

function favouriteCar(car){
	car = this.car;
	var favouriteCar = 'Porsche';
	if (car === null) {
		alert('No User Input. Please enter')
	}
	else if (car === favouriteCar) {
		alert('Congratulations!! '+ car +' is correct answer.');
	}
	else {
		alert('ooops!!'+ car +' is incorrect answer.Please Play again to guess correctly');
	}
};

function birthPlace(bornCity){
	bornCity = this.bornCity;
  	bornCity = bornCity.toLowerCase();
	var expectedAnswer = 'Ongole';

	if (bornCity === null) {
		alert('No User Input. Please enter')
	}
	else if (bornCity === expectedAnswer) {
		alert('Great and Perfect Guess!!');
	}
	else {
		alert('Oh no!!Please Play again to guess correctly');
	}
};

function favouriteSport(sport){
	sport = this.sport;
	var expectedAnswer = 'cricket';
	if (sport === null) {
		alert('No User Input. Please enter')
	}
	else if (sport === expectedAnswer) {
		alert('Great and Perfect Guess!!');
	}
	else {
		alert('Oh no!!Please Play again to guess correctly');
	}
};