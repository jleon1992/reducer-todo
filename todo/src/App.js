import React, {useReducer, useState} from 'react';
import Todo from './Todos'
import './App.css';
import {initialstate, reducer} from './reducers/reducer'
import Todos from './Todos';

function App() {
  console.log(initialstate)
  const initialNewTodo = ''
  const submitTodo = e => {
    const newTodoItem = {
      item: newTodo,
      completed: false,
      id: Date.now()
    }
    e.preventDefault()
    if(newTodo){
      dispatch({type: 'add', payload: newTodoItem})
    }
   }

  const toggle = id => {

      dispatch({type: 'toggle', payload: id})
   
  }

  const [state, dispatch] = useReducer(reducer, initialstate)
  const [newTodo, setNewTodo] = useState(initialNewTodo)
  const onChange = e => {
    setNewTodo(e.target.value)
  }

  return (
    <div className="App">
      <h1>To Do App</h1>
      <form onSubmit={submitTodo}>
      <button>Add To Do</button>
          <input
          type='text'
          name='item'
          onChange={onChange}
          value={newTodo}
          />
          
      </form>
      {
        state.map(todo => {
         return(
            <Todos todo={todo} key={todo.id} toggle={toggle} /> 
         ) 
        })
      }
      
      <button onClick={()=>dispatch({type: 'clear'})}>Clear completed</button>
    </div>
  );
}

export default App;
