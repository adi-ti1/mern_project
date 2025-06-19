const jwt = require('jsonwebtoken');

//https://www.uuidgenerator.net/
const secret="57ac6e05-c091-4495-999a-e85d5026feb6"

const authController = {
    login: (req, res) => {
        const { username, password } = req.body;
        if(username === 'admin' && password ==='admin'){
            const user={
                name: 'Aditi',
                email: 'aditi@gmail.com'
            };

            const token = jwt.sign({ user }, secret, { expiresIn: '1h' });
            res.cookie('jwToken', token, {
                httpOnly: true,
                secure: true,
                domain: 'localhost',
                path: '/',
            });
            res.json({ user: user, message: 'User authenticated'});
        }else{
            res.status(401).json({ message: 'Invalid credentials' });
        }
    },

    logout: (req, res)=>{
        res.clearCookie('jwToken');
        res.json({message: 'Logout successful'});
    },

    isUserLoggedIn: (req, res)=>{
        const token = req.cookies.jwToken;
        if(!token){
            return res.status(401).json({ message: 'User not authenticated' });
        }

        jwt.verify(token, secret, (error, user) => {
            if(error){
                return res.status(401).json({ message: 'unauthorized access' });
            }else{
                res.json({message:'User is logged in', user: user});
            }
        });
    },
};

module.exports = authController;