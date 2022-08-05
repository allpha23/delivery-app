module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('users',
        [{
          id: 1,
          name: 'Delivery App Admin',
          email: 'adm@deliveryapp.com',
          password: 'a4c86edecc5aee06eff8fdeda69e0d04',
          role: 'administrator',
        },
        {
          id: 2,
          name: 'Fulana Pereira',
          email: 'fulana@deliveryapp.com',
          password: '3c28d2b0881bf46457a853e0b07531c6',
          role: 'seller',
        },
        ], { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('users', null, {});
    },
  };
  