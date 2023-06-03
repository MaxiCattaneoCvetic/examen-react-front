import { useState } from "react"
import styles from "../card/card.module.css"

function Card (props) {

    function setNewNumber (){
        setNumeroAleatorio()
        let newNumber = Math.floor(Math.random() * 3);
        console.log("this is the random number: " + newNumber );
        setNumeroAleatorio(newNumber)
        setShowIMG(true)
    }


    let arry = [
        {
        img: "https://media3.giphy.com/media/vrxxqQbyRxYi6scCjT/giphy.gif?cid=ecf05e|7j6x2vytl0z391eyt17trib0l0aggpgbw3t8jiao0&ep=v1_gifs_related&rid=giphy.gif&ct=g"
        },
        {
        img: "https://media1.giphy.com/media/HLB0nLA36GCCo6JuB5/giphy.gif?cid=ecf05e47rdqcbup5k2yki15je1a0qac01y0ozj9z55z6ufc8&ep=v1_gifs_related&rid=giphy.gif&ct=g"
        },
        {
        img: "https://media0.giphy.com/media/CXnj3jCwvETngjy11B/giphy.gif?cid=ecf05e47g4ele8f4nnqiylw2l3si5sbmwlvjwalutsq4hk6g&ep=v1_gifs_related&rid=giphy.gif&ct=g"
        }
    ]
    
//-------estados----->
    const [numeroAleatorio,setNumeroAleatorio] = useState()
    const [showIMG, setShowIMG] = useState(undefined)
    

    return(
        <section style={styles}>
            <h2>{props.nombre ? "¡Hola!, " + props.nombre+".": undefined}</h2>
            <p>{props.texto ? props.texto + "  ¡¡Buena elección!!": undefined}</p>
            <h2>{props.nombre ? "¿Queres saber que gif te identifica como programador?": undefined}</h2>
            {props.nombre ?<button onClick={setNewNumber}>¡Quiero saber!</button>: undefined} <br />
            {showIMG ?<button onClick={setNewNumber}>¡Probar de nuevo!</button>: undefined} <br />
            {showIMG ? <img src={arry[numeroAleatorio].img} alt="gif-programming"/> : undefined }
            {showIMG ? <a href=""> <button>RELOAD</button></a>: undefined} 
        </section>
    )




}


export default Card