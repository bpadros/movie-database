import { useNavigate, Link ,Redirect, Navigate } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from 'axios'
import swAlert from '@sweetalert/with-react'

function Listado(props) {
//   let navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log(token);
//     if (token === null) {
//       navigate("/");
//     }
//   }, [navigate]);

console.log(props)

let token = sessionStorage.getItem('token')

const [moviesList, setMoviesList] = useState([])

useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=fc3574b333081974e005569591e1ac8c&language=es-ES&page=1'
    axios.get(endPoint)
    .then(response=>{
        const apiData = response.data
        setMoviesList(apiData.results)     
    })
    .catch(error => {
       swAlert(<h2>Hubo errores,intenta mas tarde</h2>)
    })
}, [setMoviesList]);

console.log(moviesList)



  return (
    <>
    { !token && <Navigate to='/' replace/> }

    <div className="row">
    {/*Estrcutura base */}
    {
        moviesList.map((oneMovie,idx)=>{
            return <div className="col-3" key={idx}>
        <div className="card my-4">
          <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
          <button 
          className="favourite-btn"
          onClick={props.addOrRemoveFromFavs}
          data-movie-id={oneMovie.id}
          >🖤</button>
          <div className="card-body">
            <h5 className="card-title">{oneMovie.title}</h5>
            <p className="card-text">
             {oneMovie.overview.substring(0,100)}...
            </p>
            <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
           </div>
        </div>
      </div>
        })
    }
      
    </div>
    </>
  );
}

export default Listado;
