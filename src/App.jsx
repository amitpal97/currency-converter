import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import BackgroundChange from "./Components/BackgroundChange";
import PasswordGenerator from "./Components/PasswordGenerator";
import CurrencyConverter from "./Components/currencyConverter";
import CurrencyInput from "./Components/currencyConverter/currencyInput"
import ScreenSenctionLetterPdf from "./Components/ScreenSenctionLatterPdf/ScreenSenctionLatterPdf";
import { TodoProvider } from "./Context/TodoContextFol/TodoContext";
import TodoComponent from "./Components/TodoComponet/TodoComponent";

function App() {

    const [todos, setTodos] = useState(
        [
            // {
            //     id: 1,
            //     todo: " Todo msg",
            //     completed: false,
            // },
            // {
            //     id: 2,
            //     todo: " Todo msg2",
            //     completed: false,
            // },
            // {
            //     id: 3,
            //     todo: " Todo msg3",
            //     completed: false,
            // }
        ]
    )

    const addTodo = (todo) => {
        setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))

    }
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
    const toggleComplete = (id) => {
        setTodos((prev) => (
            prev.map((prevTodos) => prevTodos.id === id ? { ...prevTodos, completed: !prevTodos.completed } : prevTodos)
        ))
    }


    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))
        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])





    return (
        <>
            <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
                <TodoComponent />
            </TodoProvider>

        </>
    );
}

export default App;
