import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Boyaca = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Boyaca</h1>
        <img className="imagenes" src={imagen.img15} width="150" height="100" />
        <p className="text">
          {" "}
          Boyacá es un departamento perteneciente a la región Andina, es un
          departamento de arquitectura muy coloquial, fuera de ser un lugar
          hermoso y que tiene unos hermosos paisajes.{" "}
        </p>
        <p className="text">
          Boyacá tiene una superficie de 23.189 Km2, tiene una población
          aproximadamente de 1.278.061 habitantes, este departamento fue creado
          en el año 1886, a sus habitantes se les llama Boyacense, la capital de
          Boyacá es Tunja y cuenta con 123.625 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img16} width="150" height="100" />
        <p className="text">
          {" "}
          En Boyacá tiene sitios ecoturísticos muy buenos los cuales debemos
          visitar al ir a este departamento algunos de ellos son: la Laguna de
          Tota, ya que es la laguna mas grande de toda Colombia y nos regala un
          paisaje Hermoso; Santuario de Fauna y Flora Iguaque, esta fue
          establecida en 1977, y cuenta con 46 áreas naturales del país, una
          caminata ecológica dura aproximadamente 2 horas por los senderos que
          conducen a la Laguna de Iguaque, una de las ocho lagunas que se
          encuentran en esta reserva; entre otros.{" "}
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
export default Boyaca;
