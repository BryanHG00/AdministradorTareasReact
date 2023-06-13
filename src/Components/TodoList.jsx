import { TodoItem } from "./TodoItem";

export const TodoList = ({todos, toggleTodo, deleteTodo}) =>{
    return(
        <>
        <h1 className="title">Lista de tareas</h1>
        <ul>
            {todos.length === 0 && "Prueba añadir nuevas tareas."}
            {todos.map(todo =>{
            return (
                //se pueden pasar uno por uno los atributos o pasar todos de golpe con el objeto
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            );
            })}
        </ul>
        </>
    )
}