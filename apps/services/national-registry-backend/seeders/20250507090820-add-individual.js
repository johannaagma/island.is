'use strict'
const uuid = require('uuidv4').uuid

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'individual',
      [
        {
          id: uuid(),
          national_id: '1203894569',
          name: 'Jökull Þórðarson',
          address: 'Bláfjallagata 12',
          postal_code: '105',
          city: 'Reykjavík',
          email: 'jokull.thordarson@email.is',
          phone: '7728391',
          created: new Date(),
          modified: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('individual', {
      national_id: ['1203894569'],
    })
  },
}
