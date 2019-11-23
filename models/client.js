module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    clientGender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    petName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientLastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientFirstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Client.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Client.hasMany(models.Pet, {
      onDelete: "cascade"
    });
  };
  return Client;
};
