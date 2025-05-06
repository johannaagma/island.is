'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) =>
      queryInterface.createTable(
        'financial_overview_entry',
        {
          id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
          },
          financial_overview_id: {
            type: Sequelize.UUID,
            references: {
              model: 'financial_overview',
              key: 'id',
            },
            allowNull: false,
          },
          field_id: {
            type: Sequelize.UUID,
            references: {
              model: 'field',
              key: 'id',
            },
            allowNull: false,
          },
          data: {
            type: Sequelize.JSONB,
            allowNull: true,
          },
          amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          created: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          modified: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        },
        { transaction: t },
      ),
    )
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) =>
      queryInterface.dropTable('section', { transaction: t }),
    )
  },
}
