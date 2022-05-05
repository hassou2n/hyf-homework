import React, {useState} from "react";
import TodoList from './TodoList'
import './Style.css';

function TodoItem(props) {
    const [isSelected, setisSelected] = useState(props);
    const handleChange = () => {
        setisSelected(propsIs => {
            return !propsIs
        })
    }

    return (
        <li>
                <span style={isSelected ? {} : { textDecorationLine: 'line-through'}}>
                    {props.description}
                </span>
                <input type="checkbox" id="is"  onChange={handleChange}></input>
                <label for="is"></label>
                <button onClick={() => {
                    props.setTodoState((propsIs) => {
                        return propsIs.filter(paramete => paramete.id !== props.id)
                    })
                }}>
                    Delete
                </button>
        </li>
    )
}

function ToDo() {
    const [todoState, setTodoState] = useState(TodoList)
    const addTodo = () => {
        const newId = todoState.length === 0 ? 1 : todoState[todoState.length-1].id + 1
        const newTodo = { id: newId, description: "random text", isSelected: false}
        setTodoState(prevTodos => {
            return [...prevTodos, newTodo]
        })
    }

    return (
        <div className="Pleft">
            <button onClick={addTodo}>Add Todo</button>
            {todoState.length === 0 ? "No items..." : (
                <ul>
                    {todoState.map(todo => {
                        return <TodoItem
                            id={todo.id}
                            description={todo.description}
                            isSelected={todo.isSelected}
                            setTodoState={setTodoState} />
                    })}
                </ul>)}
        </div>
    ) 
    }


export default ToDo;