let { checkEmail, createUser, editTodo, createTodo, deleteTodo, deleteUser } = require('../mongodb/db')
let { getHashedPassword } = require('./function')

// function to register user
async function registerUser(req, res) {
    try {
        let {name, email, password, confirmPassword } = req.body
        if(name == '' || email == '' || password == '' || confirmPassword == '') {
            // make sure all fields are submitted
            res.render('register', {
                message: 'Complete all fields.',
                messageClass: 'alert-danger'
            });
            return
        }
        if(password.length < 6 || confirmPassword < 6) {
            // make sure password is long enough
            res.render('register', {
                message: 'You password should be at least 6 characters long.',
                messageClass: 'alert-danger'
            });
            return
        }
        if(password === confirmPassword) {
            let checking = await checkEmail(email)
            if(checking) {
                // make sure user has not registered before
                res.render('register', {
                    message: 'The email you entered is already in use.',
                    messageClass: 'alert-danger'
                })
                return
            }
            // hash password, save user details, and redirect to login page
            let hashedPassword = getHashedPassword(password)
            createUser(name, email, hashedPassword)
            res.render('login', {
                message: 'Registration was successful! Log-in below to continue.',
                messageClass: 'alert-success'
            });
            return
        } else {
            // make sure password and confirmation match
            res.render('register', {
                message: 'The two passwords do not match.',
                messageClass: 'alert-danger'
            });
            return
        }
    } catch(err) {
        console.log(err)
    }
}

// Add a to-do item for the user
async function addTodoUser(req, res) {
    try {
        let { title, description } = req.body
        if (title == '' || title == '') {
            res.render('todo/add', {
                message: 'Input a title and a description for the to-do item!',
                messageClass: 'alert-danger'
            })
            return
        }
        createTodo(req.user.id, title, description)
        res.redirect('/todo')
    } catch(err) {
        console.log(err)
    }
}

// Delete a to-do item for the user
async function deleteTodoUser(req, res) {
    try {
        deleteTodo(req.user.id, req.body.id)
        res.redirect('/todo')
    } catch (error) {
        console.log(error)
    }
}

// Edit a to-do item for the user
async function editTodoUser(req, res) {
    try {
        let { title, description, id } = req.body
        editTodo(req.user.id, req.body.id, title, description)
        res.redirect('/todo')
    } catch (error) {
        console.log(error)
    }
}

// Delete a user account
async function deleteUserAccount(req, res) {
    try {
        let id = req.user.id
        let { resp } = req.body
        if (resp == 'yes') {
            deleteUser(id)
            res.render('login', {
                message: 'Your account was successfully deleted. We\'re sad to see you go, but you can always register for a new account.',
                messageClass: 'alert-success'
            });
        } else {
            res.redirect('/todo')
        }
    } catch(error) {
        console.log(error)
    }
}

module.exports = { registerUser, addTodoUser, deleteTodoUser, editTodoUser, deleteUserAccount }
