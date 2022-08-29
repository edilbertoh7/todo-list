const Form = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center mb-10" >Creación de tareas</h2>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5" >
                    <label htmlFor="titulo" className="block text-gray-700 uppercase font-bold" >Titulo</label>
                    <input id="titulo"
                        className="border-4 w-full p-2 rounded-md placeholder-slate-500"
                        type="text"
                        placeholder="Titulo de la tarea" />
                </div>

                <div className="mb-5" >
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold" >
                        Fecha
                        </label>
                    <input id="fecha"
                        className="border-4 w-full p-2 rounded-md placeholder-slate-500"
                        type="date"
                        placeholder="Titulo de la tarea" />
                </div>

                <div className="mb-5" >
                    <label htmlFor="descripcion" className="block text-gray-700 uppercase font-bold" >
                        Descripción
                        </label>
                    <textarea id="descripcion" 
                    className="border-4 w-full p-2 rounded-md placeholder-slate-500">

                    </textarea>
                </div>

                <input className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-300 hover:text-blue-900  cursor-pointer" type="submit" value="Enviar" />

            </form>
        </div>
    )
}

export default Form