// var fs = require('fs')

// var notesText = fs.readFileSync('./node_notes.txt', 'utf-8')
// fs.writeFileSync('notes_copy.txt', notesText)
// console.log(notesText)



// write a node script that copies a text file

// example:
// node copy.js source.txt destination.txt

// '=-=-=-=-=-=-=-=-=-=-=-=-='

var fs = require('fs')
var sourceFileName = process.argv[2] 
var targetFileName = process.argv[3]
var sourceFileContents = fs.readFileSync(sourceFileName, 'utf-8')
var rowArray = sourceFileContents.split('\n')
var elementArray = []
var finalArray = []
var Element = function(name, age, city){
	this.name = name;
	this.age = age;
	this.city = city;
}
for(i=0; i<rowArray.length; i++){
	elementArray.push(rowArray[i].split(','))
}
for(i=1;i<rowArray.length;i++){
	finalArray.push(new Element(elementArray[i][0], elementArray[i][1], elementArray[i][2]))
}


console.log(finalArray)
var result = JSON.stringify(finalArray)
fs.writeFileSync(targetFileName, result)



