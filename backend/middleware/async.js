/*This is one way to handle errors in our application; however as of now we are using
    the express-async-errors package to check for async errors. In the feature if this
    package fails we can go back to using this method
*/
module.exports = function asyncMIddleware(handler){
    return async (req,res,next)=>{
        try{
            await handler(req,res);
         }
         catch(ex){
             next(ex);
         }
     };
}