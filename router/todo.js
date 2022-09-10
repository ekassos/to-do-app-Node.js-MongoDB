const express = require('express')
const router = express.Router();

const { isAuthenticated } = require('../controllers/auth')
const { getTodoAll } = require('../mongodb/db')
const { addTodoUser, deleteTodoUser, editTodoUser } = require('../controllers/user')

// where should the user be redirected when accessing the main page
router.get('/', isAuthenticated, async(req, res) => {
    let db = await getTodoAll(req.user.id)
    if (db) {
        res.render('todo/index', {
            todos: db
        })
    } else {
        res.send('Internal Server Error')
    } 
})
router.post('/', isAuthenticated, addTodoUser)

// Add page redirect
router.get('/add', isAuthenticated, (req,res) => {
    res.render('todo/add'); 
});

// Delete page redirect
router.post('/delete', isAuthenticated, deleteTodoUser)

// Edit page redirect
// Improvement (2)
router.get('/edit/:id/:title/:description', isAuthenticated, (req,res) => {
    res.render('todo/edit', {
        _id: req.params.id,
        title: req.params.title,
        description: req.params.description
    }); 
});

router.post('/edit', isAuthenticated, editTodoUser)

module.exports = router