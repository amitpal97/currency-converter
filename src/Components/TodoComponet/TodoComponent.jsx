import React, { useState } from "react";
import "./TodoComponent.css"
import TodoProvider from "../../Context/Todocontext/TodoContext"



const TodoComponent = () => {

    const [todos, setTodos] = useState([])
    
    return (
        <>
            <TodoProvider value={{ todos, addTodo, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            </TodoProvider>
        </>
    )


}
export default TodoComponent