import { sequelize } from "../conf/db.js";
import { SysForm01CabEncuestaModel } from "./Encuesta.js";
import { Sequelize, DataTypes } from "sequelize";

export const SysForm02CabLocalidadModel = sequelize.define("Localidad", {
  // Define tus campos aquí
  id_SYSFORM02: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

// Establece la relación con sys_form_01_cab_encuesta
SysForm02CabLocalidadModel.belongsTo(SysForm01CabEncuestaModel, {
  foreignKey: "id_SYSFORM01", // Nombre del campo en esta tabla
});
SysForm01CabEncuestaModel.hasMany(SysForm02CabLocalidadModel, {
  foreignKey: "id_SYSFORM01", // Nombre del campo en la otra tabla
});
