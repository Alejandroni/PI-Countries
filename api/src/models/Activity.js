const { DataTypes } = require('sequelize');
const { defaultValueSchemable } = require('sequelize/types/utils');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
/*
ID
Nombre
Dificultad (Entre 1 y 5)
Duración
Temporada (Verano, Otoño, Invierno o Primavera)
*/
/*
id:{
  type: DataTypes.CHAR, 

allowNull: false,
primaryKey: true,
},*/
nombre: {
  type: DataTypes.STRING,
  allowNull: false,
},
dificultad: {
  type: DataTypes.ENUM({
      valores: ["1","2","3","4","5"]
  }),
  allowNull: false,
},
duracion: {
  type: DataTypes.STRING,
  allowNull: false,
},
temporada: {
type: DataTypes.ENUM({
    valores: ["Verano","Otoño","Invierno","Primavera"]
})

},


  });
};
