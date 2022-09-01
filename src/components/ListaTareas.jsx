import Tareas from "./Tareas"
//className={`md:w-1/2 lg:w-2/5 mx-5  ${tareas.length >=3 && 'h-screen overflow-scroll'}` 

const ListaTareas = ({ tareas, setTarea, eliminarTarea }) => {


    return (
        <div className={`md:w-1/2 lg:w-2/5 mx-5  ${tareas.length >= 3 && 'h-screen overflow-scroll'}`} >
            {/* si hay tareas se muestra lista de tareas*/}
            {tareas && tareas.length ? (
                <>
                    <h2 className="font-black text-3xl text-center mb-6" >
                        Listado de tareas por hacer
                    </h2>
                    {tareas.map((tarea) => {
                        return (

                            <Tareas key={tarea.id} tarea={tarea} setTarea={setTarea} eliminarTarea={eliminarTarea} />

                        )
                    })}
                </>
            ) : (
                <h2 className="font-black text-3xl text-center mb-10" >
                    No hay tareas pendientes
                </h2>
            )
            }




        </div>
    )
}

export default ListaTareas