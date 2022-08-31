import Tareas from "./Tareas"

const ListaTareas = ({tareas}) => {
    console.log(tareas);
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 h-screen overflow-scroll">
            <h2 className="font-black text-3xl text-center mb-10" >
                Lista de tareas
            </h2>
            { tareas.map( (tarea, index)=>{
                return(
                    
                    <Tareas key ={tarea.id} titulo ={tarea.titulo}  fecha={tarea.fecha}
                    descripcion = {tarea.descripcion} />
                   
                )
            } ) }
            
          
          
        </div>
    )
}

export default ListaTareas