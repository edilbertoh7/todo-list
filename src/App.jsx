import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListaTareas from "./components/ListaTareas"

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});// se envia setTarea a listaTareas y este a su vez lo envia a su hijo tareas 
  return (
    <div className="container mx-auto mt-20">
     <Header />
     <div className="mt-12 md:flex" >
      {/*la tarea recibida desde el componente tareas se envia hacia el formulario */}
     <Form 
     tarea = {tarea} 
     tareas = {tareas} 
     setTareas={setTareas} 
     />
     <ListaTareas 
     tareas = {tareas} 
     setTarea = {setTarea} 
     />
     </div>
    </div>
  )
}

export default App
