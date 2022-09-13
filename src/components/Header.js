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
            <Link to="/listado">Listado</Link>
          </li>
          <li>
            <Link to="contacto">Contacto</Link>
          </li>
          <li>
          <Buscador></Buscador>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
          <li>
          <span className="text-success d-flex align-items-center">
          {props.favorites.length > 0 && <>Peliculas en favoritos : {props.favorites.length}</>}
          </span>
            
          </li>
        </ul>
       
      </nav>
    </header>
  );
}

export default Header;
