import type { Todo } from "./todo-list";

type TodoProps = {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }: TodoProps) {
  return (
    <li key={todo.id} className="py-3 flex justify-between items-center">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-5 w-5 text-blue-500 focus:ring-blue-400 mr-2"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : "text-white"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="btn-danger">
        Delete
      </button>
    </li>
  );
}
