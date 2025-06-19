const express = require('express'); //include this express module
const cookieParser = require('cookie-parser'); //include cookie-parser module
const appp = express();  //instanciate express app
const authRoutes = require('./src/routes/authRoutes'); //import authRoutes

appp.use(express.json()); //middleware to convert json to javascript object
appp.use(cookieParser()); //middleware to parse cookies
appp.use('/auth', authRoutes); //use authRoutes for /auth path




const PORT=5001;
appp.listen(PORT,(error)=>{
    if(error){
        console.log("Error in starting server",error);
    }else{
        console.log(`Server is running on port ${PORT}`);
    }
});





