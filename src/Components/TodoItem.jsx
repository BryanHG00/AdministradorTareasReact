export const TodoItem=({completed, id, title, deleteTodo, toggleTodo})=> {
  return (
    <>
        <li>
            <label className="chbla" htmlFor={id}>
            <input id={id} type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} className="chbx"/>
            {title}
            </label>
            <button className="btnDelete" onClick={()=>deleteTodo(id)}>Eliminar</button>
        </li>
    </>
  )
}