import React from 'react'
import TodoList from './TodoList.json'
export function Po(props) {
    return (
        <li>
                * {props.title}, {props.weekdays} {props.months} {props.day} {props.year}
        </li>
    )
}

function ToDo() {
    return (
        <div>
            <ul>
                {TodoList.map(todo => {
                    return <Po
                        title={todo.title}
                        weekdays={todo.weekdays}
                        months={todo.months}
                        day={todo.day}
                        year={todo.year} 
                        />
                })}
            </ul>
        </div>
    )
};

export default ToDo;