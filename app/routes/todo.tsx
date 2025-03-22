import { TodoApp } from "../components/Todo";

export default function Todo() {
  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoApp />
    </div>
  );
}
