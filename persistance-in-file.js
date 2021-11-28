const fs=require('fs').promises;
const path=require('path');

const saveToDos =(toDoListToSave)=>{
    let toDosData= toDoListToSave.map(todo=>`${todo.id};${todo.label};${todo.isDone}`);
    let dataToSave='';
    toDosData.map(line=>dataToSave+=line+`\n`)
    try {
        return fs.writeFile('toDos.csv',dataToSave);
    } catch (error) {
        return console.log('An Error : ',error)
    }
}

const loadToDos =(todoFile,cb)=>{
    try {
        fs.readFile(todoFile)
        .then(rowData=>rowData.toString())
        .then(lines=> lines.split('\n'))
        .then(data=>cb(data))
    } catch (error) {
        console.error('Error: ',error)   
    }
   

}

const deleteToDos = (dbTodoListAsFile)=>{

}


module.exports={
    saveToDos,
    loadToDos,
    deleteToDos
}