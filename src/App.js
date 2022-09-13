// import logo from './logo.svg';
// import './App.css';
import {Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Login from "./components/Login";
import Resultados from "./components/Resultados";
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect,useState} from 'react'
import './css/app.css'
import Favoritos from './components/Favoritos';


function App() {

  const [favorites, setFavorites] = useState([])

  useEffect (()=>{
      const favsInLocal = localStorage.getItem('favs')
    
      if(favsInLocal != null) {
          const favsArray = JSON.parse(favsInLocal) 
          setFavorites(favsArray)
      }
  },[])

  const addOrRemoveFromFavs = (e) => {

  const favMovies = localStorage.getItem('favs')

  let tempMoviesinFavs

    if (favMovies === null) {
      tempMoviesinFavs = []
    } else {
      tempMoviesinFavs = JSON.parse(favMovies)
    }

    const btn = e.currentTarget
    const parent = btn.parentElement
    const imgURL = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    const movieData = {
      imgURL,title,overview,
      id: btn.dataset.movieId
    }

    let movieIsInArray = tempMoviesinFavs.find(oneMovie=>{
      return oneMovie.id === movieData.id
    })
    if(!movieIsInArray){
      tempMoviesinFavs.push(movieData)
      localStorage.setItem('favs' ,JSON.stringify(tempMoviesinFavs))
      setFavorites(tempMoviesinFavs)
      console.log('se agrego la pelicula')
    }else {
      let moviesLeft = tempMoviesinFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      })
      localStorage.setItem('favs' ,JSON.stringify(moviesLeft))
      setFavorites(moviesLeft)
      console.log('se elimino la pelicula')
    }
   
  }
  return (
    <>
    <div className='container mt-3'>

    
    <Header favorites={favorites}></Header>
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    {/* <Route exact  path='/listado' element={ (props) => <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} {...props}/>}/> */}
    <Route exact  path='/listado' element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
    <Route exact  path='/detalle' element={ <Detalle/>}/>
    <Route exact  path='/favoritos' element={ <Favoritos favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
    <Route exact  path='/resultados' element={ <Resultados/>}/>
    </Routes>
  
    {/* <Footer></Footer> */}
    
   
  
    
    </div>
   </>
  );
}

export default App;
