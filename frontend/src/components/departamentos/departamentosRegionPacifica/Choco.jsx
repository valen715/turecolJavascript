import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Choco = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Choco</h1>
        <img className="imagenes" src={imagen.img59} width="150" height="100" />
        <p className="text">
          {" "}
          El Choco es un departamento perteneciente de la región Pacífica, El
          Chocó es un departamento de Colombia con una riqueza natural
          incomparable, se destacan la minería, la explotación de maderas, la
          pesca.{" "}
        </p>
        <p className="text">
          El Choco tiene una superficie de 46.530 Km2, tiene una población
          aproximadamente de 505.046 habitantes, este departamento fue creado en
          el año 1947, a sus habitantes se les llama Chocoanos, la capital del
          Choco es Quibdó y cuenta con 113.473 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img60} width="150" height="100" />
        <p className="text">
          {" "}
          Cuando visitemos este departamento debemos de conocer los siguientes
          parques: El Parque Nacional Natural de Utría, La combinación de la
          selva tropical y el mar hacen de este parque natural una réplica
          exacta del paraíso; El Parque Nacional Natural los Katíos, El parque
          tiene una extensión de 72.000 hectáreas; El Parque Nacional Tatamá,
          Tiene un alto grado de conservación y una gran belleza, ya que está
          cubierto de selva andina. El clima es templado y hay una gran variedad
          de especies vegetales, algunas de las cuales son muy raras.{" "}
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
export default Choco;
