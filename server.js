var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1, 
	description: 'Meet friends for lunch',
	completed: false
},
	{
		id:2,
		description: 'Go to market',
		completed: false
	}
];

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
	res.json(todos);
});

app.listen(PORT, function () {
	console.log('Working!');
});

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
	todos.forEach(function(todo) {
		if(todo.id === todoId){
			matchedTodo = todo;
		}
	});
	if(matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
	// res.send('Asking for todo with Id of ' + req.params.id);
});