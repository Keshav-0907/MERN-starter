const RegisterUser = (req, res) =>{
    res.json({message: 'User Registered'});
}

const LoginUser = (req, res) =>{
    res.json({message: 'User Logged In'});
}

module.exports = { RegisterUser, LoginUser };