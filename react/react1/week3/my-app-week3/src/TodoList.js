import React from 'react'
import  {useState, useEffect} from "react";
import TodoItem from './TodoItem';

function TodoList({ fetchUrl }) {
    const [todoList, setTodosState] = useState([]);
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");  
    useEffect(()=> {
        fetch(fetchUrl)
        .then(r => r.json())
        .then(data => setTodosState(data))
    },[])

    const delItem = (idItem) => {
    setTodosState((prev) => prev.filter((todo) => todo.id !== idItem))
  }

  const updateDescription = (id, description) => {
      const updatedDescription = [...todoList].map((todo)=>{
        if (todo.id === id) {
            todo.description = description;
        }
        return todo;
      })
      setTodosState(updatedDescription)
  }

    const handelAddTodo = (event) => {
    event.preventDefault();
    const newId = todoList.length=== 0 ? 1 : todoList[todoList.length -1].id + 1;
    const newTodo ={ id: newId, description, deadline}
    setTodosState((prev) => {
      
        return [...prev, newTodo]
      })
      setDescription("")
      setDeadline("")
}

const todoItem = todoList.length === 0 ? "No items" : (
<ul>
{todoList.map((todo) => (
  <TodoItem description={todo.description} 
  key ={todo.id} 
  id={todo.id} 
  deadline={todo.deadline} 
  delItem = {delItem}   
  updateDescription={updateDescription}>
  </TodoItem>
    ))}
</ul>)

  return (
    <div onSubmit={handelAddTodo}>
        <form >
          <label>Todo description
            <input type="text" placeholder='Description' name='description' value={description} onChange={(e)=> setDescription(e.target.value)}/>
          </label>
          <br/>
            <label>deadline<input type="date"  name='deadline' value={deadline} onChange={(e)=> setDeadline(e.target.value)}/>
          </label>
          <br/>
            <button>Add todo</button>
            {todoItem} 
        </form>
    </div>
  )
}
export default TodoList;