import { Link } from "react-router-dom";
import Buscador from './Buscador'
import '../css/header.css'

function Header(props) {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listado">Premiers</Link>
          </li> 
          <li>
            <Link to="/favoritos">Favourites</Link>
          </li>
          <li>
          <span className="text-white d-flex align-items-center">
          {props.favorites.length > 0 && <>Movies in favourites : {props.favorites.length}</>}
          </span>            
          </li>
          <li>
          <Buscador></Buscador>
          </li>
        </ul>      
      </nav>    
    </header>
//     <nav class="navbar navbar-expand-lg bg-black">
//   <div class="container-fluid">
//     <Link to class="navbar-brand" href="/">Navbar</Link>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <Link to="/" class="nav-link active text-primary" aria-current="page" >Home</Link>
//         </li>
//         <li class="nav-item">
//           <Link to="/listado" class="nav-link text-primary" >Cartelera</Link>
//         </li>
//         <li class="nav-item">
//           <Link to ="/favoritos" class="nav-link text-primary">Favoritos</Link>
//         </li>
//         <li class="nav-item">
//         <span className="text-white d-flex align-items-center">
//           {props.favorites.length > 0 && <>Peliculas en favoritos : {props.favorites.length}</>}
//         </span> 
//         </li>
//         <li class="nav-item">
//         <Buscador></Buscador>
//         </li>
//       </ul>     
//     </div>
//   </div>
// </nav>
  );
}


export default Header;
