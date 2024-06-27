import Swal from 'sweetalert2';
import { useState } from "react";

const Formulario = ({addTodo}) => {

    const [todo, setTodo] = useState({
        title: 'Todo #01',
        descripcion: 'Descripcion #01',
        state: 'pendiente',
        priority: true,
    })
    
    const {title, descripcion, state, priority} = todo

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim()  || !descripcion.trim()){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Titulo y Descripcion Obligatorios",
              })
              
        }
        addTodo({
            id: Date.now(),
            ...todo,
            state: state === 'completado'
        })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Todo agregado Correctamente",
            showConfirmButton: false,
            timer: 1500

        });
    };

    const handlChange = e => {

        const {name, type, checked, value} = e.target
        setTodo({
            ...todo,
            [name]: 
            type === 'checkbox' ? checked : value,
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type = "text" 
            placeholder = "Ingrese Todo"
            className = "form-control mb-2" 
            name="title"
            value={title}
            onChange={handlChange}
            />

            <textarea 
            className="form-control mb-2"
            placeholder="Ingerse descripcion"
            name="descripcion"
            value={descripcion}
            onChange={handlChange}
            />
            <div className="form-check mb-2">
                <input 
                type="checkbox" 
                name="priority" 
                className="form-check-imput" 
                id="inputCheck"
                checked={priority}
                onChange={handlChange}
                />
                
                <label htmlFor="inputCheck"> Dar prioridad </label>
            </div>
            

            <select 
            className="form-select mb-2" 
            name="state" 
            value={state} 
            onChange={handlChange}
            > 
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>     
            </select> 

            <button type="submit" className="btn btn-primary">
                Agregar todo
            </button>
           
        </form>
    );
};

export default Formulario;