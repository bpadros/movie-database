import React , {useState,useEffect,useRef} from "react";
import "../css/tickets.css";
import {useNavigate, Navigate ,Link} from 'react-router-dom'
import swAlert from '@sweetalert/with-react'
import axios from 'axios'

import Calendario from "./calendar";

 function Tickets () {


        function handleChangeadultos (e) {
        console.log((e.target.value))
      //  var resultadoadulto = document.getElementById('total-adultos')
      //  resultadoadulto.textContent = `TOTAL: $ ${e.target.value*1000}`
      document.getElementById('total-adultos').value= (e.target.value)*1000
       document.getElementById("boton").disabled = false;;
       }
 

      let query = new URLSearchParams(window.location.search)
      let ticket = query.get('ticket')

    const [movie, setMovie] = useState("")

    useEffect(() => {

        const endPoint = `https://api.themoviedb.org/3/movie/${ticket}?api_key=fc3574b333081974e005569591e1ac8c&language=es-ES`
        axios.get(endPoint).then(response=>{
            const movieData = response.data
            console.log(movieData)
            setMovie(movieData)
        })
        .catch(error => {
           console.log(error)
        })
    }, [ticket]);
     
  return (
    <>
      <form className="form">
      
     

        <div className="container">
          <input type="text" value={movie.title}  readOnly className="input-title"/>
          <br />
          <Calendario></Calendario>
        
     <br />
      <label>
      <span>Time:</span>
      <select name="select">   
      <option value="15:10" selected>15:10</option>
      <option value="18:00">18:00</option>
      <option value="22:20" >22:20</option>
      <option value="23:40">23:40</option>
</select>
      </label>
      <br />


    <div>
        <label>
        <div className="entradas">
          <span>TICKETS:$1000</span>
          {/* <button onClick={sumar}>----</button> */}
          <input type="number" name="adultos" id="adultos" max="20" min="1" maxLength="3" required  onChange={handleChangeadultos}/>
          {/* <button onClick={sumar}>+++++</button> */}
        </div>
        </label>
        <br></br>
    </div>
    <div>
          <label>
          <span>TOTAL $</span>
        <input type="number" id='total-adultos' readOnly/>
        <br></br>
          </label>
       
        </div>   
        <Link to={`/listado`} className="btn btn-warning m-3 btn-lg">Go back</Link>
        <button type="submit" className="btn btn-primary btn-lg " disabled  id='boton'>BUY!</button>
      
        </div>
      </form>
      
    </>
  );
}

export default Tickets
