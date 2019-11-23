module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    petName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    petGender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    services: {
      type: DataTypes.STRING,
      allowNull: false
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  Pet.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Pet.belongsTo(models.Pet, {
      onDelete: "cascade"
    });
  };
  return Pet;
};
