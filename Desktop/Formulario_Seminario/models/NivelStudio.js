import { sequelize } from "../conf/db.js";
import { SysForm01CabEncuestaModel } from "./Encuesta.js";
import { Sequelize, DataTypes } from "sequelize";

export const SysForm03CabNivelEstudioModel = sequelize.define(
  "sys_form_03_cab_nivel_estudio",
  {
    id_SYSFORM03: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  }
);
SysForm03CabNivelEstudioModel.belongsTo(SysForm01CabEncuestaModel, {
  foreignKey: "id_SYSFORM01",
});

SysForm01CabEncuestaModel.hasMany(SysForm03CabNivelEstudioModel, {
  foreignKey: "id_SYSFORM01", // Nombre del campo en la otra tabla
});
