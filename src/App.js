import {React , useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import { AddTodoAction } from './actions/TodoActions';
import { RemoveTodoAction } from './actions/TodoActions';

import './App.css';
const App = () => {
  
  
  const[todo,setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector(state => state.Todo) //Todo state ka naam

  const {todos} = Todo; //just destructing bade se ek ek nikala


  const hadleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  }

const removeHandler = (t) => {
  dispatch(RemoveTodoAction(t));
}

  return (
    <div className="App">
    <header className="App-header">

    <h2>TodoList</h2>
    <form onSubmit={hadleSubmit}>
      <input placeholder="ENter the todo" style={{
        width:350,
        padding:10,
        borderRadius:20,
        border:"none",
        fontSize:20, 
      }} 
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" style={{
        padding:12,
        borderRadius:25,
        fontSize:15,
        marginLeft:20,
      }}>Go</button>
    </form>
      <ul className="allTodos">
      {
        todos && todos.map((t) => (
          <li key={t.id } className="singleTodo">
          <span className="todoText">{t.todo}</span>
          <button style={{
            borderRadius:25,
            padding:10,
            border:"1px solid white",
            backgroundColor : "orangered",
          }} 
          onClick = {() => removeHandler(t)}>
            Delete
          </button>
        </li>
        ))
      }
      
      </ul>


    </header>
  </div>
  )
}

export default App
