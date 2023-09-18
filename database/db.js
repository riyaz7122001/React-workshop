const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("test", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`connection of database successful!`);
  })
  .catch((err) => {
    console.log(`connection failed`, err);
  });

// const db = {
//   Sequelize: Sequelize,
//   sequelize: sequelize,
// };

const User = require("../models/user")(sequelize, DataTypes);

// by using sync method it will see if the table exists already then
// here we can give the second parameter for testing also like , match:/-test$/

sequelize
  .sync({ force: false })
  .then(() => console.log("syncing to database completed!"))
  .catch((error) => console.log("syncing to database failed!", error));

module.exports = { User, sequelize };
