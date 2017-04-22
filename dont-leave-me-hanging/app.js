document.body.addEventListener('keydown', createLetters); 
var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var words = ["STRONG", "SUCC"];

var random = "";

var contents = []; 

var wordToGuess = "";

function startGame() {
	var randomnumber = Math.floor((Math.random() * 2) + 0);
	console.log(words[random]);  
	console.log(words[randomnumber]); 		
	wordToGuess = words[randomnumber];
	document.getElementById('letters-container').innerHTML = letter;
	for (var i = 0; i < wordToGuess.length; i++){ 
		document.getElementById('word-container').innerHTML += "-";
	} 
	contents.push(document.getElementById('word-container').innerHTML);
	console.log(contents);
}
function createLetters(e){
	console.log(e); 	
	var index = 0;
	for (var i = 0; i < letter.length; i++){
		checkForWord(letter) 
		if (letter[i] === e.key){
		document.getElementById('guesses-container').innerHTML += letter[i];
		index = i;
		letter.splice(index, 1);
		console.log("they match");
		document.getElementById('letters-container').innerHTML = letter;
			} 
		}
}
function checkForWord(letter){
	for (var i = 0; i < wordToGuess.length; i++){
	if (wordToGuess[i] === letter) {
	changeInnerHTML[i] = letter; 
	console.log("this letter is in the word"); 
	document.getElementById('word-container').innerHTML = changeInnerHTML; 
			}
		}
}
startGame()