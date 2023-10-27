import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../conf/db.js";
import { SysForm01CabEncuestaModel } from "./Encuesta.js";

export const SysForm04CabGeneroModel = sequelize.define(
  "sys_form_04_cab_genero",
  {
    id_SYSFORM04: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  }
);

// Establece la relación con sys_form_01_cab_encuesta
SysForm04CabGeneroModel.belongsTo(SysForm01CabEncuestaModel, {
  foreignKey: "id_SYSFORM01", // Nombre del campo en esta tabla
});
SysForm01CabEncuestaModel.hasMany(SysForm04CabGeneroModel, {
  foreignKey: "id_SYSFORM01", // Nombre del campo en la otra tabla
});
