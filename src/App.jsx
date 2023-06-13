import { useEffect, useState } from "react";
import "../src/styles.css";
import { NewTodoForm } from "./Components/NewTodoForm";
import { TodoList } from "./Components/TodoList";
export default function App(){
  
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS");
    if(localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos));
  },[todos])

  const addTodo = (title)=>{ setTodos((currentTodos)=>{
    // const ide = 
    return [
      ...currentTodos,
        {
          //randomUUID no lo detecta en dispositivos moviles
          id: Math.floor((Math.random() * 999999) + 1), title, completed:false
        }
      ]
    })
  }

  const toggleTodo = (id, completed) =>{
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return{ ...todo, completed}
        }

        return todo;
      })
    })
  }

  const deleteTodo = (id) =>{
    setTodos(currentTodos =>{
      //retorna los datos que no sean iguales al id
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}