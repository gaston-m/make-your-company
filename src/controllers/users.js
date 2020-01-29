ctrl = {}

ctrl.signin = (req, res) =>{

    res.render('users/signin');
}

ctrl.auth = (req, res) => {

    res.send('auth desde signin -> post')
}

ctrl.signup = (req, res) => {

    res.render('users/signup');
}

ctrl.postup = (req, res) =>{

    res.send('Signup desde up!');
}

module.exports = ctrl;