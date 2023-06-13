import { useState } from "react";
export const NewTodoForm = ({onSubmit}) =>{
    const [vacio, setVacio] = useState(false);

    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(newItem === "") return setVacio(true);

        onSubmit(newItem);
        setVacio(false);
      setNewItem("");
    }

    return (
        <>
        <h2 className="tituloPrincipal">Administrador de tareas</h2>
          <form className="" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="item">Nueva tarea</label>
              <input type="text" id="item" value={newItem} onChange={e=>setNewItem(e.target.value)} placeholder="Ej. Estudiar para el examen." />
              {vacio && <><p className="errorMsg">El campo no puede estar vacío.</p></>}
            </div>
            <button>Agregar</button>
    
          </form>
          
        </>
      )
}