var http = require("http");//core inbuilt module
var fs = require("fs");//core inbuilt module
var path = require("path");//core inbuilt module
var url=require("url");//core inbuilt module
var qs=require("querystring");//core inbuilt module

const port=3000;
// var postsArr=[{"postsName":"AssignmentsCompleted","status":"pending"},
// {"postsName":"AssignmentsPending","status":"pending"}];

var postsArr=[];

var server=http.createServer((request,response)=>{
    var urlObject = url.parse(request.url);
    if (request.method == 'GET' && urlObject.pathname=="/posts"){
            console.log(urlObject.query);
            var qsObject = qs.parse(urlObject.query);
            for(item of Object.keys(qsObject))
            {
                console.log(` ${item} : ${qsObject[item]}` );
            }
            // response.end(JSON.stringify(qsObject));
            var pos=postsArr.findIndex(item => item.postsName == qsObject.postsName);
            if (pos >= 0) {
                response.end(JSON.stringify(postsArr[pos]));
            } else {
                response.statusCode = 402;
                response.end("Data does not exist");
            }
                // select query
                // response.end(JSON.stringify(postsArr));
            return;
    }
    if(request.url=="/posts")
    {
        if(request.method == "DELETE"){
            // delete an existing record
            //data as part of body section
            var postsToBeDeleted="";
            request.on("data",(chunks)=>{
                postsToBeDeleted+=chunks;
            })
            request.on("end",()=>{
                var postsToBeDeletedObj=JSON.parse(postsToBeDeleted);
                var pos=postsArr.findIndex(item => item.postsName == postsToBeDeletedObj.postsName)
                if(pos >= 0)
                {
                    var deletedObj = postsArr.splice(pos,1);
                    response.end(JSON.stringify({msg:"Data deleted successfully",deletedObj}));
                }
                else
                {
                    response.statusCode=401;
                    response.end(JSON.stringify({err:"Posts does not exists to delete"}));
                }
            })
            request.on("errors",(err)=>{
                response.statusCode=500;
                response.end(JSON.stringify({err:err}));
            })
            return;
        }
        //get /post?postsName=completeassignments
        if(request.method =="PATCH")
        {
            // update an existing record
            //data as part of body section
            var postsToBeUpdated="";
            request.on("data",(chunks)=>{
                postsToBeUpdated+=chunks;
            })
            request.on("end",()=>{
                var postsToBeUpdatedObj=JSON.parse(postsToBeUpdated);
                var pos=postsArr.findIndex(item => item.postsName == postsToBeUpdatedObj.postsName)
                if(pos >= 0)
                {
                    postsArr[pos].status=postsToBeUpdatedObj.status;
                    response.end(JSON.stringify({msg:"Data updated successfully",updatedData:postsArr[pos]}));
                }
                else
                {
                    response.statusCode=401;
                    response.end(JSON.stringify({err:"Posts does not exists to update"}));
                }
            })
            request.on("errors",(err)=>{
                response.statusCode=500;
                response.end(JSON.stringify({err:err}));
            })
            return;
        }
        // if(request.method == "GET")
        // {   
            // console.log(urlObject.query);
            // var qsObject = qs.parse(urlObject.query);
            // for(item of Object.keys(qsObject))
            // {
            //     console.log(` ${item} : ${qsObject[item]}` );
            // }
            // // response.end(JSON.stringify(qsObject));
            // var pos=postsArr.findIndex(item => item.postsName == qsObject.postsName);
            // if (pos >= 0) {
            //     response.end(JSON.stringify(postsArr[pos]));
            // }
                // // select query
                // response.end(JSON.stringify(postsArr));
                // return;
        // }
        if(request.method == "POST")
        {
            // data is coming in the body section of request
            //insert a new record
            var newPosts="";
            request.on("data",(chunks)=>{
                newPosts+=chunks;
            })
            request.on("end",()=>{
                var newPostsObj=JSON.parse(newPosts);
                var pos=postsArr.findIndex(item => item.postsName == newPostsObj.postsName);
                // pos =-1 if not found or post-0 or positive number if exists
                if(pos ==-1)
                {
                    postsArr.push(newPostsObj);// sync method
                    response.end(JSON.stringify({msg:"New Posts created "}));

                }
                else
                {
                    response.statusCode=401;
                    response.end(JSON.stringify({err:"Posts already exists with the given name"}));
                }
                
              
            })
            request.on("errors",(err)=>{
                // Insertion has failed
                console.log("Error in post request to /posts",err);
                response.statusCode=401;
                response.end(JSON.stringify({err:"Insertion failed"}));
                
            })
            return;

        }
        
    }
    response.end("Response from the server for undeveloped paths");
})

server.listen(port,()=>{
    console.log(`Server has started at port ${port}`);
})



