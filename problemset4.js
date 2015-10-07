addNumbers = function(input){
	var numbersArray=[]
	var numbersArray2=[]
	for(i=0; i<input.length; i++){
		for (j=0; j<10;j++){
			if(input[i]==j){
				numbersArray.push(i)
			}
		}
	}
	var counter = 1
	for(i=0;i<numbersArray.length;i++){
		if((numbersArray[i]+1) === numbersArray[i+1]){
			counter++
		}
		else{numbersArray2.push(input.slice(numbersArray[i-(counter-1)],(numbersArray[i]+1)));
			counter = 1}
	}
	var number = 0;
	for(i=0; i<numbersArray2.length; i++){
		number = (number + Number(numbersArray2[i]));
	}
	console.log(number)

}

addNumbers("88Hello 3World!")
addNumbers("5Hello 5")


longestWord = function(word){
	var myArray = word.split(' ');
	var newArray= []
	for(var i=0;i<myArray.length;i++){
		var lastChar = myArray[i][myArray[i].length-1].toUpperCase();
		if(lastChar.toLowerCase() != lastChar){ newArray.push(myArray[i])}
		else{
			var newChar = myArray[i].slice(0, (myArray[i].length-1));
			myArray.push(newChar)
			}
	}
	var counter = 0
	var longestWord = ''
	for(var i = 0; i<newArray.length; i++){
		if(newArray[i].length>counter){
			counter = newArray[i].length;
			longestWord= newArray[i];
		}
	}
	console.log("The longest word is "+ longestWord + ".  It has "+ counter+" characters.")
}

longestWord("Write a function longestWord that takes a single string parameter and returns the largest word in the string. If there are two or more words that are the same length, it returns the first word from the string with that length.")
