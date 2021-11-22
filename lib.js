class List{
    _list=[]

    // Command
    addElementToList(element){
        this._list.push(element)
    }


    removeElement(id){
       this._list.filter(element=>element.id !== id)
    }

    updateElement(element){
       for (myElement in this._list){
           if(myElement.id === element.id){
            myElement=element
           }else{
               console.log('Error: the element to update not exist in the list')
           }
       }
    }

    sortList(){
        this._list.sort();
    }
}

class TodoList extends List{
    constructor(){
        super();
    }
}

class AccountList extends List{
    constructor(){
        super();
    }
}

module.exports={
    List:List,
    TodoList:TodoList
};

