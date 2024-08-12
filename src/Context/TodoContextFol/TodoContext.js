import { useContext, createContext } from "react";

const TodoContext = createContext();



const TodoProvider = TodoContext.Provider

const useTodo = () => {
    return useContext(TodoContext)
}
export  { TodoContext, TodoProvider, useTodo }



