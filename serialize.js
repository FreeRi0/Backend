const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("homework", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Authors = sequelize.define('Authors', {
  // Model attributes are defined here
  id: {
   type: DataTypes.INTEGER,
   allowNull: false,
   primaryKey: true,
   autoIncrement:true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'authors',
  timestamps: true
});


;(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();