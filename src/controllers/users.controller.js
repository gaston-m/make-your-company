ctrl = {}

ctrl.signin = async (req, res) =>{

    res.render('users/signin');
}

ctrl.auth = async (req, res) => {

    res.send('auth desde signin -> post')
}

ctrl.signup = async (req, res) => {

    res.render('users/signup');
}

ctrl.getUsers = async (req, res) =>{

    res.send('Lista de Users');
}

module.exports = ctrl;