const Tareas = ({titulo,fecha,descripcion}) =>{
    return(
        <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5" >
        <p className="font-bold mb-3 text-gray-700 uppercase" >Titulo:{" "}
            <span className="font-normal normal-case" > {titulo} </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase" >Fecha:{" "}
            <span className="font-normal normal-case" >{fecha} </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase" >Descripción:{" "}
            <span className="font-normal normal-case" > {descripcion} </span>
        </p>

    </div>
    )  
}
export default Tareas