import swAlert from '@sweetalert/with-react'
import {useNavigate} from 'react-router-dom'

function Buscador () {

    let navigate  = useNavigate()


    const submitHandler = e => {
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim()

        if(keyword.length === 0){
            swAlert(<h2>Tienes que escribir una palabra clave</h2>)
        } else if(keyword.length < 4){
            swAlert(<h2>Tienes que escribir una mas de 3 caracteres</h2>)
        } else {
            e.currentTarget.keyword.value = ''
            navigate(`/resultados?keyword=${keyword}`)
        }

    }
    return (
        <form className="d-flex align-items-center" onSubmit={submitHandler}>
        <label className="form-label mb-0 mx-2">
        <input type='text' name='keyword' className="form-control" placeholder="Escribe una palabra clave..."/>    
        </label>
        <button type='submit' className="btn btn-success ml-2">Buscar</button>
        </form>
    )
}

export default Buscador