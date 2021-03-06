import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Bolivar = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Bolivar</h1>
        <img className="imagenes" src={imagen.img35} width="150" height="100" />
        <p className="text">
          {" "}
          Bolívar es un departamento perteneciente a la región caribeña este
          departamento esta lleno de diversidad y belleza natural, además de que
          es uno de los principales destinos turísticos de Colombia, lo que hace
          único este territorio son sus mares, su arquitectura y el clima que lo
          asociamos con unas buenas vacaciones.{" "}
        </p>
        <p className="text">
          Bolívar tiene una superficie de 25.978 Km2, tiene una población
          aproximadamente de 2.122.021 habitantes, este departamento fue creado
          en el año 1886, a sus habitantes se les llama Bolivarense, la capital
          del Bolívar es Cartagena y cuenta con 661.830 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img36} width="150" height="100" />
        <p className="text">
          {" "}
          Lo bueno de visitar este departamento es que podemos hacer ecoturismo
          por tierra y por mar, unos de los lugares que se pueden visitar
          estando en Bolívar son: Santuario de Fauna y Flora Los Colorados, en
          este podemos encontrar rutas de senderismo, miradores naturales,
          observación de la fauna y la flora; Islas del Rosario, Parque Corales
          del Rosario y de San Bernardo, también podemos visitar ciudades o
          islas las cuales son muy turísticas como: Cartagena, Barú, San
          Jacinto, entre otros.{" "}
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-10">
            <a href="/crearOpiniones" className="button-enlace">
              {" "}
              <button
                type="button"
                className="btn btn-outline button-ver-mas button-ver-mas-mensaje"
              >
                crear opinion
              </button>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-9 ">
            <a href="/opiniones" className="button-ver-opiniones">
              {" "}
              <button
                type="button"
                className="btn btn-outline button-ver-mas button-ver-mas-mensaje"
              >
                Ver opiniones
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Bolivar;
