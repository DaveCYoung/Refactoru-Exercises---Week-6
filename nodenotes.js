// console.log("Hello Node!")
// console.log(process.argv)  // first argument is node itself, second argument is script itself.  
// console.log(process.argv[2].toUpperCase())


// module.exports = 'exported data'  //module is globally defined object, whatever is assigned to 'module.exports' is what is accessible in other files. 
// console.log('this file is running')


// var fs = require('fs')

// var notesText = fs.readFileSync('./nodenotes.txt', 'utf-8')//second argument is character encoding
// //readfilesnc will return value of text in file.
// fs.writeFileSync('newfile.txt', notesText)  //second argument is content.  

// console.log(notesText)

var fs = require('fs')
fs.writeFileSync(process.argv[3], fs.readFileSync(process.argv[2], 'utf-8'))