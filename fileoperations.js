var fileOps = require("fs");

exports.fileCopy = function(file1, file2) {
    fileOps.copyFile(file1, file2, (err)=>{
        if (err){
            console.log("File copy failed");
        } else {
            console.log("File copy successful");
        }
    });
}

exports.isExistsOfFile = function(file1) {
    if (fileOps.existsSync(file1)) {
        console.log("Yes. file exists.");
    } else {
        console.log("No. File is not available");
    }
}


exports.copyDirectory = function(src, dest) {
    fileOps.cp(src, dest, {recursive:true}, (err)=> {
        if (err) {
            console.log("Directory copy operation failed " + err);
        } else {
            console.log("Directory copy operation successful");
        }
    });
}