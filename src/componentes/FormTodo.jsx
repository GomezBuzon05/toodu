import React from "react";
import { useState } from "react";

const FormTodo = ({Tareas}) => {
    const [tareas, setTareas] = useState([{ id: 1, nombre: "tarea 1", descripcion: "descripcion 1" },]);
    const [tareaActual, setTareaActual] = useState(null);


    return (
        <>          
            <div>
                <div className='formu'>
                    <input type="text" placeholder='Nombres...' className='nombre gojo' onChange={(e) => setTareaActual({ nombre: e.target.value })} />
                    <input type="text" placeholder='Profecio...' className='descripcion gojo' onChange={(e) => setTareaActual({ ...tareaActual, descripcion: e.target.value })} />
                    <button onClick={() => setTareas(tareas.concat(tareaActual))}>agregar tarea</button>
                </div>
            </div>
        </>
    );
};
export default FormTodo;