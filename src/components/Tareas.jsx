const Tareas = ({ tarea, setTarea, eliminarTarea }) => {
   const {titulo,fecha,descripcion,id} = tarea;
    
    return (
        <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5" >
            <p className="font-bold mb-3 text-gray-700 uppercase" >Titulo:{" "}
                <span className="font-normal normal-case" > {titulo} </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase" >Fecha:{" "}
                <span className="font-normal normal-case" >{fecha} </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase" >Descripción:{" "}
                <span className="font-normal normal-case" > {descripcion} </span>
               {/* <span className="font-normal normal-case" > {tarea.id} </span>*/}
            </p>
            <div className="flex justify-between " >

            <button type="button"
            className="bg-green-300 mt-5 font-bold hover:bg-slate-400 hover:text-white px-5 py-2 ml-10 rounded-md"
            onClick={ () => setTarea(tarea) }
            
            >
                Actualizar 
                </button>
            <button type="button"
            className="bg-red-400 mt-5 text-white font-bold hover:bg-red-300 hover:text-black mr-10 px-5 py-2 rounded-md" 
            onClick={ () => eliminarTarea(id,titulo) }
            >
                Eliminar 
                </button>
            </div>

        </div>
    )
}
export default Tareas