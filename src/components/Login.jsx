import React from 'react';
import axios from 'axios'
import {useNavigate, Navigate} from 'react-router-dom'
import swAlert from '@sweetalert/with-react'

function Login() {

    let navigate  = useNavigate()
    console.log(navigate)

    const submitHandler = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
         if(email==='' || password===''){
            swAlert(<h2>'Los campos no pueden estar vacios'</h2>)
            
            return
        }
        if(email !== '' && !regexEmail.test(email)){
            swAlert(<h2>Debes escribr una direccion de correo electronico valida</h2>)
            
            return
        }

        if(email !== 'challenge@alkemy.org' || password !=='react'){
            swAlert(<h2>credenciales invalidas</h2>)
           
            return
        }

        console.log('OK estamos listos para enviar la informacion')
        axios
        .post('http://challenge-react.alkemy.org', {email,password})
        .then(res =>{
            swAlert(<h2>Perfecto, ingreaste correctamente</h2>)
            console.log(res.data)
            const tokenRecibido = res.data.token
            sessionStorage.setItem('token',tokenRecibido);
            navigate('/listado')
            
        })

    }


    let token = sessionStorage.getItem('token')


    return (
        <>
         { token && <Navigate to='/listado' replace/> }
         {/* <Redirect to='/listado'/> */}
        <h2>Formulario de login</h2>
        <form onSubmit={submitHandler}>
        <label>
        <span>Correo electronico:</span> <br></br>
        <input type='text' name='email'/>
            
        </label>
        <br></br>
        <label>
        <span>Contraseña:</span> <br></br>
        <input type='password' name='password'/>
            <br></br>
        </label>
        <br></br>
        <button type='submit'>INGRESAR</button>
        </form>
        </>
    );
};

export default Login;