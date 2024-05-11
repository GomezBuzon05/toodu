import React, { useState } from "react";
import FormTodo from "./FormTodo";


const Container = () => {
    const [tareas, setTareas] = useState([{ id: 1, nombre: "tarea 1", descripcion: "descripcion 1" },]);


    return (
        <>
            <div className='superpadre'>
                <FormTodo/>
                <div className='geto'>
                    <div className="formu1">
                        {tareas.map((tareas) => (
                            <div key={tareas.id} className='tarea'>
                                <div>
                                    <p className='text1'>{tareas.nombre}</p>
                                    <p className='text2'>{tareas.descripcion} </p>
                                </div>
                                <div className='svgg'>
                                    <svg className='svgg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Container;