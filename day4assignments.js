var obj = require("./fileoperations");

console.log('------------------------------');
console.log('File Copy operation ::: ');
obj.fileCopy("file1.txt", "file2.txt");

console.log('------------------------------');
obj.isExistsOfFile("file3.txt");

console.log('------------------------------');
obj.copyDirectory("folder1", "folder2");
