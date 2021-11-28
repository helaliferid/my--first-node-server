const saveToDos = require('./persistance-in-file').saveToDos;
const loadToDos = require('./persistance-in-file').loadToDos;
const deleteToDos = require('./persistance-in-file').deleteToDos;

const todos = [
    { id: 1, label: 'email parcing', isDone: false },
    { id: 2, label: 'Write todos for the day', isDone: false },
    { id: 3, label: 'Review yesterday code', isDone: false },
    { id: 4, label: 'Implement new feature', isDone: false },
];

let st = saveToDos(todos);
console.log(st);

_data = null
loadToDos('toDos.csv', function (data) {
    _data = data.map(line => (
        {
            id: line.split(';')[0],
            label: line.split(';')[1],
            isDone: line.split(';')[2]
        })
    );
    console.table(_data);
});


