import { useEffect, useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListaTareas from "./components/ListaTareas"

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});// se envia setTarea a listaTareas y este a su vez lo envia a su hijo tareas 

  //almacenamiento de als tareas de el localStorage
  useEffect(() => {
    const obtenerTareasLocalStorage = () => {
      const tareasLocalStorage =
        JSON.parse(localStorage.getItem("tareas")) ?? [];
      setTareas(tareasLocalStorage);
    };
    obtenerTareasLocalStorage()
  }, []);


  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])

  //eliminacion de una tarea 
  const eliminarTarea = (id, titulo) => {
    const eliminarLaTarea = tareas.filter(tarea => tarea.id !== id)
    if (confirm(`Esta seguro de eliminar la tarea ${titulo} ?`)) {
      setTareas(eliminarLaTarea)
    }
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex" >
        {/*la tarea recibida desde el componente tareas se envia hacia el formulario */}
        <Form
          tarea={tarea}
          setTarea={setTarea}
          tareas={tareas}
          setTareas={setTareas}
        />
        <ListaTareas
          tareas={tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
        />
      </div>
    </div>
  )
}

export default App
