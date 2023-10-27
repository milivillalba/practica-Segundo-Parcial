import { sequelize } from "../conf/db";
import { SysForm01CabEncuestaModel } from "./Encuesta";
import { Sequelize, DataTypes } from "sequelize";

export const SysFormEdadModel = sequelize.define("sys_form_edad", {
  id_SYSFORM1_EDAD: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
// Establece la relación con sys_form_01_cab_encuesta
SysFormEdadModel.belongsTo(SysForm01CabEncuestaModel, {
  foreignKey: "id_SYSFORM01", // Nombre del campo en esta tabla
});
SysForm01CabEncuestaModel.hasMany(SysFormEdadModel, {
  foreignKey: "id_SYSFORM01", // Nombre del campo en la otra tabla
});
