import './App.css'
import Form from './components/form/Form'
import Card from './components/card/Card'

import { useState } from 'react'


function App() {
  const [name,setName] = useState("")
  const [text,setText] = useState("")
  
  function handleClick(nombre,texto){
    console.log("::Soy App::");
    setText(texto)
    setName(nombre)
    console.log(nombre,texto);
  }

  return (
    <>
    <Form
    onClick = {(nombre,texto) => {
        handleClick(nombre,texto)
    } }
    >
    </Form>

    <Card
    nombre={name}
    texto={text}
    onClicked = {()=>{
      reset()
    }}
    >

    </Card>




    </>
  )
}

export default App
