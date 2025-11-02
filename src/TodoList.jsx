// a list of todos, each todo object has a task and an id
const todos = [
    { task: "clean the shower", id: crypto.randomUUID() },
    { task: "Work on Odin Projects", id: crypto.randomUUID() },
    { task: "cook stew", id: crypto.randomUUID() },
];

export default function TodoList() {
    return (
        <ul>
            {todos.map((todo) => (
                // here we are using the already generated id as the key
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    );
}