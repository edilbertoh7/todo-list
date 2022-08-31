import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListaTareas from "./components/ListaTareas"

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <div className="container mx-auto mt-20">
     <Header />
     <div className="mt-12 md:flex" >
     <Form tareas = {tareas} setTareas={setTareas} />
     <ListaTareas tareas = {tareas} />
     </div>
    </div>
  )
}

export default App
