import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

/**
 * The main App component
 * @returns {JSX.Element} The App component
 */
function App() {
  // State to hold the todos
  const [todos, setTodos] = useState([]);

  /**
   * Function to add a new todo
   * @param {Object} todo - The new todo to be added
   */
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  /**
   * Function to update a todo
   * @param {number} id - The id of the todo to be updated
   * @param {Object} todo - The updated todo
   */
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  /**
   * Function to delete a todo
   * @param {number} id - The id of the todo to be deleted
   */
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  /**
   * Function to toggle the completion status of a todo
   * @param {number} id - The id of the todo to be toggled
   */
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // Effect to load todos from localStorage on component mount
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // Effect to save todos to localStorage on todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    // Provide the todos and functions to the TodoProvider
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            TaskMaster
          </h1>
          <div className="mb-4">
            {/* Render the TodoForm component */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Render the TodoItem component for each todo */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
