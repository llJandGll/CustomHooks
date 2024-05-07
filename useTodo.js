import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "../08.useReducer/todoReducer"


export const useTodo = () => {


// !Este array no se está usando en el ejercicio ya que directamente accedemos al localStorage
  const initialState = []

  // *manejando el 3er argumento del useReducer

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || []
  }

    // *Manejando useReduce
  const [todos, dispatch] = useReducer( todoReducer, null , init)

  // * Manejando contador y pendientes

  const isPending = todos.filter(( todo ) => !todo.done ).length;


    // *Manejando useEffecet

    useEffect(() => {
      localStorage.setItem("todos" , JSON.stringify(todos) );
      console.log(todos)
      
    }, [todos])
    
  


  const handleNewTodo = ( todo ) => {
    
    const action = {
      type : "[TODO] Add Todo",
      payload : todo
    }
    dispatch( action )

  };
  
  const handleDeleteTodo = ( id ) => {
    
    const action = {
      type : "[TODO] Remove Todo",
      payload : id  
    }
    dispatch(action)
  };


  const onToggleTodo = ( id ) => {
    const action = {
      type : "[TODO] Toggle Todo",
      payload : id  
    }
    dispatch( action )
    
  };



  return {
    todos,
    handleNewTodo ,
    handleDeleteTodo,
    onToggleTodo,
    todosCount  : todos.length,
    isPending ,
  }
}
  