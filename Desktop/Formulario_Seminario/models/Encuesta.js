// Importa Sequelize
import { Sequelize, DataTypes } from "sequelize";
// Importa tu instancia de Sequelize
import { sequelize } from "../conf/db.js";

// Define el modelo
export const SysForm01CabEncuestaModel = sequelize.define(
  "sys_form_01_cab_encuesta",
  {
    id_SYSFORM01: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    edad: DataTypes.INTEGER,
    localidad: DataTypes.STRING,
    nivelEstudio: DataTypes.STRING,
    genero: DataTypes.STRING,
    momentoDia: DataTypes.STRING,
    generoMusicalPref: DataTypes.STRING,
    idiomaMusica: DataTypes.STRING,
    incluirMusicaLocal: DataTypes.BOOLEAN,
    artistaFavorito: DataTypes.STRING,
    bandaFavorita: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);
