import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Vaupes = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Vaupés</h1>
        <img className="imagenes" src={imagen.img11} width="150" height="100" />
        <p className="text">
          {" "}
          El Vaupés es un departamento perteneciente a la región Amazónica, este
          departamento es un lugar ideal para visitar los ancestros, vivir y
          conocer de la cultura indígena, en Vaupés se pueden visitar lugares
          tales como Raudal del Jirijirimo, el cerro de Urania, el cerro Way
          Reriku o el Caño Cucura.{" "}
        </p>
        <p className="text">
          El Vaupés tiene una superficie de 65.268 Km2, tiene una población
          aproximadamente de 44.079 habitantes, este departamento fue creado en
          el año 1991, a sus habitantes se les llama Vaupense, la capital del
          Vaupés es Mitú y cuenta con 14.898 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img12} width="150" height="100" />
        <p className="text">
          {" "}
          Por ser un departamento selvático, es ideal para el turismo ecológico
          y de aventura. La mayoría de los habitantes son de las etnias
          indígenas y conservan su dialecto y cultura, la comida es la
          autóctona, por ello, su atractivo turístico es de gran interés para el
          turista. En Mitú, la capital, es posible encontrar alojamiento con
          relativa comodidad, existen algunos restaurantes para deleitarse con
          la cocina de la región y se ofrecen varias alternativas para recorrer
          la selva y los ríos.{" "}
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
          <div className="col-10 ">
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
export default Vaupes;
