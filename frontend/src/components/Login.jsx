import React from "react";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import LoginUtils from "../utils/login.util";
import imagen from "../images/imagen";
import "./Estilos/login.css"

const Login = () => {
  const { addToast } = useToasts();
  const history = useHistory();

  function login() {
    const usuario = {
      correo: document.getElementById("correo").value,
      clave: document.getElementById("clave").value,
    }; 
      //comentario
    axios
      .post("http://localhost:3000/usuarios/login-sencillo", usuario)
      .then(function ({ data, status }) {
        // Se ejecuta siempre que el servidor ejecute todo correctamente
        if (status === 200) {
          console.log(data);
          LoginUtils.setUsuario(data);
          addToast("Usuario logueado exitosamente", { appearance: "success" });
          history.push("/");
        } else {
            addToast("Usuario invalido", { appearance: "warning" });
        }
      })
      .catch(function (error) {
        // Se ejecuta siempre que ocurra algún error
        console.log(error);
        addToast("oh no, un error a ocurrido", { appearance: "error" });
      });
  }
  return (
    
    <div className="login-box">
      {/* <h1 >login</h1> */}
      <img src={imagen.img65} className="logo" />
      <from>
        <label for="correo">Correo:</label>
        <input id="correo" name="correo" />
        <br />
        <label for="clave">Contraseña:</label>
        <input type="password" id="clave" name="clave" />

        <input type="submit" value="Login" onClick={login} />
      </from>
    </div>
    
  );
};

export default Login;
