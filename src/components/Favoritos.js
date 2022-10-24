import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'


function Favoritos (props) {

    // const [favorites, setFavorites] = useState([])

    // useEffect (()=>{
    //     const favsInLocal = localStorage.getItem('favs')
      
    //     if(favsInLocal != null) {
    //         const favsArray = JSON.parse(favsInLocal) 
    //         console.log(favsArray)
    //         setFavorites(favsArray)
    //     }
    // },[])

    return (
        <>
    <h2 className='text-white'>Favourites movies</h2>
    <div className="row">
    {!props.favorites.length && <div className='col-12 text-danger'>You don't have any favourites movies yet </div>}
    {/*Estrcutura base */}
    {
        props.favorites.map((oneMovie,idx)=>{
            return <div className="col-4" key={idx}>
        <div className="card my-4 text-white">
          <img src={oneMovie.imgURL} className="card-img-top" alt="..." />
          <button 
          className="favourite-btn"
          onClick={props.addOrRemoveFromFavs}
          data-movie-id={oneMovie.id}
          >🗑️</button>
          <div className="card-body bg-black">
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
        
    )
}

export default Favoritos

