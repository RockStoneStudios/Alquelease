import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title"> Encuentra bienes raíces y viva en el lugar de sus sueños</h1>
          <p>
           Explora y reserva tu próximo alojamiento en el hermoso municipio de Sopetrán con nuestra 
           conveniente app de arriendos. Te ofrecemos una experiencia sin complicaciones para encontrar
           el lugar perfecto para tu estadía en este encantador destino.
          </p>
          <div className="categories">
            <div className="categorie">
              <div className="info">
                <h2 className="no_verificado">.</h2>
                <h3>no Verificado</h3>
              </div>
              <p>Informacion e propiedad no confirmada</p>
            </div>
            <div className="categorie">
            <div className="info">
                <h2 className="verificado">.</h2>
                <h3>Verificado</h3>
            </div>
            <p>Informacion de propiedad confirmada</p>
              
            </div>
          </div>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>1+</h1>
              <h2>Años de Experiencia</h2>
            </div>
            <div className="box">
              <h1>2</h1>
              <h2>Premio Obtenidos</h2>
            </div>
            <div className="box">
              <h1>4+</h1>
              <h2>Propiedades Arrendadas</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
