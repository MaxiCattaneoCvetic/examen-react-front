import {useState } from "react";
import styles from "../form/form.module.css"

function Form(props) {


    function transferData(){
        if(validator1 && validator2){
            if((name.length >= 3) && (text.length >= 6))
            props.onClick(name,text)
            seterrorGeneral("")
            setText("")
            setName("")
        }else{
            seterrorGeneral("Los datos no pueden ser validados correctamente")
        }
    }
    function handleSubmit(e){
        e.preventDefault()

    }


//-------------------Funciones del formulario + validaciones------------------->
    function handleChange(e){
        if(e.target.id === "name"){
            setName(e.target.value.trimStart())
            if(name.length < 2 ){
                setErrorInput1("Tu nombre no puede ser inferior a 3 caracteres");
                setValidator1(false);
            }else{
                setErrorInput1("");
                setValidator1(true);
            }
        }
        if(e.target.id === "text"){
            setText(e.target.value)
            if(text.length < 5  ){
                console.log(text.length);
                setErrorInput2("Este campo debe tener como minimo 6 caracteres");
                setValidator2(false);
            }else{
                setErrorInput2("");
                setValidator2(true);
                
            }
        }
    }



//------------------------Creacion de estados ------------------->
    const [name,setName] = useState("");
    const [text,setText] = useState("");
    const [errorinput1,setErrorInput1] = useState();
    const [errorinput2,setErrorInput2] = useState();
    const [errorGeneral,seterrorGeneral] = useState();

//------------------------Hooks controles de validaciones ------------------->
    const [validator1,setValidator1] = useState(false)
    const [validator2,setValidator2] = useState(false)







//-------------------Formulario  -------------------> 
return (
    <div>
        <h1>¿Que tipo de programador sos?</h1>
        <h4>--Examen Front--- </h4> <a target="_blank" href="https://maxicattaneocvetic.github.io/porfolio/" rel="noreferrer">Click form + info</a>
        <form onSubmit={handleSubmit}>
    <label htmlFor="name" style={styles}>Ingresa tu nombre: 
        <input type="text"  value={name.trimStart()} onChange={handleChange} name="name" id="name" placeholder="Ingresa tu nombre"/>
        <p>{errorinput1? errorinput1:undefined}</p>
    </label>
    <label htmlFor="text">Ingresa dos palabras que te identifiquen
        <input type="text" value={text} onChange={handleChange} name="text" id="text" placeholder="Aquí las palabras"/>
        <p>{errorinput2? errorinput2:undefined}</p>
        <button type="submit" onClick={transferData}>Enviar</button>
        <p>{errorGeneral ? errorGeneral:undefined}</p>
    </label>
    </form>
    </div>
);
}

export default Form;
