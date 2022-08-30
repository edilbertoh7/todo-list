import { useState } from "react"
import '../App.css'

const Form = () => {
    const [titulo, setTitulo] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState(false);

    const HandleSubmit = (e) => {
        e.preventDefault();

        if ([titulo, fecha, descripcion].includes('')) {
            setError(true);
            return
        }
        setError(false);

    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center mb-10" >Creación de tareas</h2>
            <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">


                <div className="mb-5" >
                    <label htmlFor="titulo" className="block text-gray-700 uppercase font-bold" >Titulo</label>
                    <input id="titulo"
                        className="border-4 w-full p-2 rounded-md placeholder-slate-500"
                        type="text"
                        placeholder="Titulo de la tarea" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    {error && titulo == '' &&
                        (<span className=" text-red-600 text-1x  alert-p " >
                            Por favor diligencie el campo Titulo
                        </span>)}
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
                        {error && fecha == '' &&
                        (<span className=" text-red-600 text-1x  alert-p " >
                            Es necesario diligenciar la fecha 
                        </span>)}
                </div>

                <div className="mb-5" >
                    <label htmlFor="descripcion" className="block text-gray-700 uppercase font-bold" >
                        Descripción
                    </label>
                    <textarea id="descripcion" value={descripcion}
                        className="border-4 w-full p-2 rounded-md placeholder-slate-500"
                        onChange={(e) => setDescripcion(e.target.value)}>
                    </textarea>
                    {error && descripcion == '' &&
                        (<span className=" text-red-600 text-1x  alert-p " >
                           Debe escribir una descripción para la tarea 
                        </span>)}
                </div>

                <input className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-300 hover:text-blue-900  cursor-pointer" type="submit" value="Enviar" />

            </form>
        </div>
    )
}

export default Form