'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) =>
      queryInterface.createTable(
        'field',
        {
          id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
          },
          section_id: {
            type: Sequelize.UUID,
            references: {
              model: 'section',
              key: 'id',
            },
            allowNull: false,
          },
          field_number: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          field_name: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          year: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          order: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          entry_data_schema: {
            type: Sequelize.JSONB,
            allowNull: true,
          },
          can_edit_entry: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
          },
          can_add_entry: {
            type: Sequelize.BOOLEAN,
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
        {
          transaction: t,
          indexes: [{ unique: true, fields: ['field_number', 'year'] }],
        },
      ),
    )
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) =>
      queryInterface.dropTable('section', { transaction: t }),
    )
  },
}
