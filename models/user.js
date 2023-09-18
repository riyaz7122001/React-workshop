module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
    },
    { timestamps: true }
  );
  return User;
};

// we can give the createdAt: false,updatedAt:false,
// we can change the tableName with tableName:'UserData'

// }
// const User = sequelize.define("User", {
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },

//   lastName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   age: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   gender: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   address: DataTypes.STRING,
//   allowNull: false,
// });

// console.log(User === sequelize.models.User);
