import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const ValleCauca = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Valle del Cauca</h1>
        <img className="imagenes" src={imagen.img63} width="150" height="100" />
        <p className="text">
          {" "}
          El Valle del Cauca es un departamento perteneciente a la región
          Pacífica, El Valle del Cauca es uno de los departamentos más
          importantes en Colombia, por lo que es ideal para el turismo.{" "}
        </p>
        <p className="text">
          El Valle del Cauca tiene una superficie de 22.140 Km2, tiene una
          población aproximadamente de 4.660.438 habitantes, este departamento
          fue creado en el año 1910, a sus habitantes se les llama Vallunos o
          Vallecaucanos, la capital del Valle del Cauca es Cali y cuenta con
          1.783.546 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img64} width="150" height="100" />
        <p className="text">
          {" "}
          En el Valle del Cauca podemos visitar lugares como: El Parque
          Farallones de Cali, Siendo este lugar un de los favoritos por los
          ciudadanos para ecoturismo valle del cauca a tan solo20 minutos de la
          capital del valle; Parque Las Hermosas, Ubicado entre 1600 y 4200
          metros sobre el nivel del mar en los departamentos del Valle del Cauca
          y Tolima tiene una superficie de 125.000 hectáreas. El clima varía de
          moderado a frío, de 1 a 21 grados centígrados; entre otros.{" "}
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
export default ValleCauca;
