const ObjectID = require('mongodb').ObjectID
const { User } = require('./model')
// get timezone of user's browser for correctly saving "created at" time
const moment = require('moment-timezone')
const timezn = Intl.DateTimeFormat().resolvedOptions().timeZone
moment.tz.setDefault(timezn).locale('id')

    // pass user details for user creation
    async function createUser(name, email, pass) {
        let obj = {name: name, email: email, password: pass, todo: []}
        await User.create(obj)
    }
    module.exports.createUser = createUser

    // is email in database?
    async function checkEmail(email) {
        let users = await User.findOne({email: email})
        if(users !== null) {
            console.log(users.email)
            return users.email 
        } else {
            return false
        }
    }
    module.exports.checkEmail = checkEmail

    // is user entering the right email/password combo?
    async function checkAuth(email, pass) {
        let users = await User.findOne({email: email})
        if (email === users.email && pass === users.password) {
            return true
        } else {
            return false
        }
    }
    module.exports.checkAuth = checkAuth

    // delete user based on their ID
    async function deleteUser(id) {
        User.deleteOne({_id: id}, function(err, obj) {
            if (err) throw err;
        })
    }
    module.exports.deleteUser = deleteUser

    // search and find all user's tasks based on their id
    async function getTodoAll(id) {
        let users = await User.findOne({_id: id}).lean()
        let db = users.todo
        if (users !== null) {
            return db
        } else {
            return false
        }
    }
    module.exports.getTodoAll = getTodoAll

    // create new todo item
    async function createTodo(id, title, description) {
        const time = moment(Date.now()).format('DD/MM HH:mm:ss')
        let users = await User.findOne({_id: id})
        let todos = users.todo
        let obj = {_id: new ObjectID(), title: title, description: description, time: time}
        todos.push(obj)
        User.updateOne({_id: id}, {todo: todos}, function(err, obj) {
            if (err) throw err;
        })
    }
    module.exports.createTodo = createTodo

    // mark existing todo item as complete (i.e. delete said item)
    async function deleteTodo(id, idTodo) {
        let users = await User.findOne({_id: id})
        let arr = users.todo
        arr = arr.filter(item => item._id != idTodo)
        User.updateOne({_id: id}, { todo: arr }, function(err, obj) {
            if (err) throw err;
        })
    }
    module.exports.deleteTodo = deleteTodo


    // edit existing todo item
    async function editTodo(id, idTodo, title, description) {
        let users = await User.findOne({_id: id})
        let arr = users.todo
        let index = arr.findIndex(x => x._id == idTodo)
        arr[index].title = title
        arr[index].description = description
        User.updateOne({_id: id}, { todo: arr }, function(err, obj) {
            if (err) throw err;
        })
    }
    module.exports.editTodo = editTodo