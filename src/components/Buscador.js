import swAlert from '@sweetalert/with-react'
import {useNavigate} from 'react-router-dom'
import '../css/header.css'

function Buscador () {

    let navigate  = useNavigate()


    const submitHandler = e => {
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim()

        if(keyword.length === 0){
            swAlert(<h2>Write a word...</h2>)
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
        <input type='text' name='keyword' className="form-control" placeholder="Write a keyword..."/>    
        </label>
        <button type='submit' className="btn btn-primary ml-2">Search</button>
        </form>
    )
}

export default Buscador