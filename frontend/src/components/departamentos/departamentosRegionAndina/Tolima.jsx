import React from "react";
import imagen from "../../../images/imagen";

const Tolima = () => {
    return (
    <header>
      <h1 class="Tolima">Tolima</h1>
      <div>
        <img class="imagenes" src={imagen.img31} width="150" height="100" />
        <p class="text">
          {" "}
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden -Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.{" "}
        </p>
        <p class="text">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden -Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img32} width="150" height="100" />
        <p class="text">
          {" "}
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden -Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.{" "}
        </p>
        <p class="text">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden -Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>

      <div className="columna">                
                <a href="/crearOpiniones" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas">Crear opinión</button>
                </a>
              </div>
    </header>
    );
    };
export default Tolima;