// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y) {
    if (x > y) {
    	return "true";
    } else {
    	return "false";
    };
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z) {
    if (x > y > z) {
    	return "x";
    } else if (x < y > z) {
    	return "y";
    } else {
    	return "z";
    };
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
	if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
		return "true";
	} else {
		return "false";
	};
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
	var vowels = ["a", "e", "i", "o", "u"];
	var saying = ("Go get them");
function translate(phrase){
	var newSaying = saying.filter(function(currentLetter){
		if (currentLetter === vowels) {
			return []
		} else {
			return currentLetter + "o" + currentletter;
		};
	});
    
};


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str) {
    return str.split("").reverse().join("");
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
var words = ["important", "coffee", "tank", "gun"];

function findLongestWord(words){
	words.filter(function(currentWord) {
		var long = currentWord.length > 10;
		return long;
	});
};

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
var words = ["important", "coffee", "tank", "gun", "i"];
function filterLongWords(words, i){
    words.filter(function(currentWord, i) {
    	var longer = currentWord.length > "i";
    });
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var string = [aaaaabbbbcccac];
    string.split("").forEach(function(letter) {
    	count[a]; count[b]; count[c];
    	return count
    });
};