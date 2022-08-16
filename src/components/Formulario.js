import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "Business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  //Utilizamos custom hook
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  //Submit al form, pásar categoría a app.js
  const buscarNoticias = (e) => {
    e.preventDefault();

    guardarCategoria(categoria);
  };

  return (
    //  Con esta forma de css, para acceder a la clase del framework de css y a la vez la de nuestro modulo se escribe con ``
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form
            onSubmit={buscarNoticias}
        >
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              //   Con esta forma de dar estilos no es posible utilizar el guión medio y se debe acceder de esta forma
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired,
  };

export default Formulario;
