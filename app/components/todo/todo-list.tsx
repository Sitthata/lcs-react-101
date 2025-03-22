import { useState } from "react";
import TodoItem from "./todo-item";

// Define our Todo item type
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Define filter types
type FilterType = "all" | "active" | "completed";

export function TodoApp() {
  // State for todos and new todo input
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  // Add a new todo
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  };

  // Toggle a todo's completed status
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all" filter
  });

  // Count remaining active todos
  const activeTodoCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
      </form>

      {/* Todo List */}
      <ul className="divide-y divide-gray-200">
        {filteredTodos.length === 0 ? (
          <li className="py-4 text-center text-gray-500">
            {filter === "all"
              ? "No todos yet! Add one above."
              : `No ${filter} todos.`}
          </li>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          ))
        )}
      </ul>

      {/* Footer with filters and count */}
      {todos.length > 0 && (
        <div className="mt-4 flex justify-between items-center text-sm border-t pt-3">
          <span>{activeTodoCount} item{activeTodoCount !== 1 ? "s" : ""} left</span>
          
          <div className="flex space-x-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-2 py-1 rounded ${
                filter === "all" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`px-2 py-1 rounded ${
                filter === "active" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-2 py-1 rounded ${
                filter === "completed" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Completed
            </button>
          </div>

          {todos.some(todo => todo.completed) && (
            <button
              onClick={() => setTodos(todos.filter(todo => !todo.completed))}
              className="text-gray-500 hover:text-gray-700"
            >
              Clear completed
            </button>
          )}
        </div>
      )}
    </div>
  );
} 