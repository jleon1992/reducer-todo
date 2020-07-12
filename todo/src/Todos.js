import React, {useReducer} from 'react'
import {initialstate, reducer} from './reducers/reducer'


export const Todos = (props) => {
    const { todo, toggle } = props
    console.log(props.todo.completed)

    return (
        <div onClick={()=>toggle(todo.id)} className={`todo ${todo.completed? "completed": ''}`}>
            {todo.item}
        </div>
    )
}
export default Todos
