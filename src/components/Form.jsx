import { useEffect, useState } from "react"
import '../App.css'
import Errors from "./Errors";

const Form = ({ tareas, setTareas, tarea, setTarea }) => {
    const [titulo, setTitulo] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState(false);

    // cumple la funcion de observador o escuchador del componente Tareas de cambios validando si existe alguna tarea
    useEffect(() => {
        if (Object.keys(tarea).length > 0) {

            setTitulo(tarea.titulo);
            setFecha(tarea.fecha)
            setDescripcion(tarea.descripcion)
        }


    }, [tarea])

    // se genera un identificador unico para cada tarea
    const generarid = () => {
        const id = Math.random().toString(20).substr(2);
        return id
    }

    //validacion para el formilario    
    const HandleSubmit = (e) => {
        e.preventDefault();

        if ([titulo, fecha, descripcion].includes('')) {
            setError(true);
            return
        }
        setError(false);


        //objeto para las tareas
        const objetoTareas = {
            titulo,
            fecha,
            descripcion
        }

        //se crea una nueva tarea o se edita una ya existente
        if (tarea.id) {
            //actualizar tarea
            objetoTareas.id = tarea.id;
            const tareaActualizada = tareas.map(tareaState => tareaState.id === tarea.id ? objetoTareas : tareaState);
            setTareas(tareaActualizada);
            setTarea({})
        } else {
            //tarea nueva
            objetoTareas.id = generarid()
            setTareas([...tareas, objetoTareas]);// el spred_operator guarda una copia inicial del mis tarea y luego envia las nuevas tareas creadas
        }


        //barro el formulario
        setTitulo('');
        setFecha('');
        setDescripcion('');

    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center mb-6" >Creación de tareas</h2>
            <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">


                <div className="mb-3" >
                    <label htmlFor="titulo" className="block text-gray-700 uppercase font-bold" >Titulo</label>
                    <input id="titulo"
                        className="border-4 w-full p-2 rounded-md placeholder-slate-500"
                        type="text"
                        placeholder="Titulo de la tarea" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    {error && titulo == '' && <Errors>Por favor diligencie el campo Titulo</Errors>}
                </div>

                <div className="mb-5" >
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold" >
                        Fecha
                    </label>
                    <input id="fecha"
                        className="border-4 w-full p-2 rounded-md placeholder-slate-500"
                        type="date"
                        placeholder="Titulo de la tarea"
                        value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    {error && fecha == '' && <Errors>Es necesario diligenciar la fecha</Errors>}
                </div>

                <div className="mb-5" >
                    <label htmlFor="descripcion" className="block text-gray-700 uppercase font-bold" >
                        Descripción
                    </label>
                    <textarea id="descripcion" value={descripcion}
                        className="border-4 w-full p-2 rounded-md placeholder-slate-500"
                        onChange={(e) => setDescripcion(e.target.value)}>
                    </textarea>
                    {error && descripcion == '' && <Errors>Debe escribir una descripción para la tarea</Errors>}
                </div>

                {!tarea.id ? (
                    <input className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-300 hover:text-blue-900  cursor-pointer"
                        type="submit"
                        value="Crear Tarea" />
                ) : (

                    <input className="bg-purple-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-purple-300 hover:text-blue-900  cursor-pointer"
                        type="submit"
                        value="Actualizar TareaS" />
                )}


            </form>
        </div>
    )
}

export default Form