const { DataTypes } = require('sequelize');
const { defaultValueSchemable } = require('sequelize/types/utils');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
/*    ID (Código de 3 letras) *
Nombre *
Imagen de la bandera *
Continente *
Capital **/
id:{
  type: DataTypes.CHAR(3),  //unico que no se va a repetir

allowNull: false,
primaryKey: true,
},
nombre: {
  type: DataTypes.STRING,
  allowNull: false,
},
capital: {
  type: DataTypes.STRING,
  allowNull: false,
},
continente: {
  type: DataTypes.STRING,
  allowNull: false,
},
imagenBandera: {
type: DataTypes.STRING,
allowNull: false,
},

/*

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },*/
  });
};
