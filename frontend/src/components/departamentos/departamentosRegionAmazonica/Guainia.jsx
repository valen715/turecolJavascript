import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Guainia = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Guainía</h1>
        <img className="imagenes" src={imagen.img5} width="150" height="100" />
        <p className="text">
          {" "}
          La Guainía es un departamento perteneciente a la región Amazónica es
          un departamento lleno de riqueza natural, este ha ido creciendo en los
          últimos años, la minería, la agricultura y la pesa son los sectores
          económicos más importantes, el turismo en este departamento todavía no
          es muy popular, pero gracias a que tiene una enorme riqueza ecológica
          se puede practicar deportes náuticos en los lagos Matevení, Pavón y
          Payara y en el río Inírida. También se puede visitar los Cerros de
          Mavecure, la laguna de Las Brujas y el raudal de Sapuara.{" "}
        </p>
        <p className="text">
          La Guainía tiene una superficie de 72.238 Km2, tiene una población
          aproximadamente de 42.123 habitantes, este departamento fue creado en
          el año 1991, a sus habitantes se les llama Guainarense o guainiano, la
          capital del Guainía es Puerto Inírida y cuenta con 14.299 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img6} width="150" height="100" />
        <p className="text">
          {" "}
          En La Guainía se encuentra como sitio turístico la Reserva Nacional
          Natural Puinawai, este parque cuenta con gran diversidad de fauna y
          flora, entre los animales que destacan en este parque hay gran
          variedad de aves, mamíferos y peces, podemos encontrarnos con animales
          como la guacamaya, el halcón, la pava amazónica, el picaflor, la guala
          cabecirroja, el corocoro, el armadillo, el mono capuchino, el tití
          amazónico, el tigrillo, el venado colorado, la danta, la nutria
          gigante, el bagre, el bocachico, la mojarra, la cachama, entre muchos
          otros.{" "}
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
export default Guainia;
