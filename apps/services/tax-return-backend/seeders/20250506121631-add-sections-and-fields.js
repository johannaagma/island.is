'use strict'

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'section',
      [
        // 2.1 Laun og starfstengdar greiðslur
        {
          id: 'b1248d39-a21e-4abf-b46f-765a7d41b7ee',
          section_number: '2.1',
          section_name: 'Laun og starfstengdar greiðslur',
          created: new Date(),
          modified: new Date(),
        },
        // 2.2 Ökutækjastyrkur, dagpeningar og hlunnindi
        {
          id: 'e5738a9b-2c12-426f-b13b-bde6c1e2ac39',
          section_number: '2.2',
          section_name: 'Ökutækjastyrkur, dagpeningar og hlunnindi',
          created: new Date(),
          modified: new Date(),
        },
        // 2.3 Lífeyrisgreiðslur. Greiðslur frá Tryggingastofnun. Aðrar bótagreiðslur, styrkir o.fl.
        {
          id: 'ee0aa581-a73b-492c-b123-5b8cdcf71eb7',
          section_number: '2.3',
          section_name:
            'Lífeyrisgreiðslur. Greiðslur frá Tryggingastofnun. Aðrar bótagreiðslur, styrkir o.fl.',
          created: new Date(),
          modified: new Date(),
        },
        // 2.6 Frádráttur frá tekjum
        {
          id: 'daab862a-e27b-4444-9591-194c3d641fbf',
          section_number: '2.6',
          section_name: 'Frádráttur frá tekjum',
          created: new Date(),
          modified: new Date(),
        },
        // 4.1 Innlendar fasteignir
        {
          id: '342078bc-e86a-42e1-98a1-d2aeb7985545',
          section_number: '4.1',
          section_name: 'Innlendar fasteignir',
          created: new Date(),
          modified: new Date(),
        },
        // 4.3 Bifreiðir
        {
          id: 'b333cb92-1c3f-497f-a44e-ce4e88696d40',
          section_number: '4.3',
          section_name: 'Bifreiðir',
          created: new Date(),
          modified: new Date(),
        },
        // 5.2 Lán vegna kaupa eða byggingar íbúðarhúsnæðis til eigin nota.
        {
          id: '9de8f2af-7507-4a38-8dbb-1e4e832906fd',
          section_number: '5.2',
          section_name:
            'Lán vegna kaupa eða byggingar íbúðarhúsnæðis til eigin nota.',
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld
        {
          id: '4e6cb55b-d3b6-4c69-9830-195a7da7a55c',
          section_number: '5.5',
          section_name: 'Aðrar skuldir og vaxtagjöld',
          created: new Date(),
          modified: new Date(),
        },
      ],
      {},
    )

    await queryInterface.bulkInsert(
      'field',
      [
        // 2.1 - (21)
        {
          id: '98db4e89-0055-4aa1-8696-5922da89acde',
          section_id: 'b1248d39-a21e-4abf-b46f-765a7d41b7ee',
          field_number: 21,
          field_name: null,
          year: '2025',
          order: 1,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
        // 2.2 - Ökutækjastyrkur (22)
        {
          id: 'faef4d44-ebaa-43e4-bb8b-183ba0258221',
          section_id: 'e5738a9b-2c12-426f-b13b-bde6c1e2ac39',
          field_number: 22,
          field_name: 'Ökutækjastyrkur',
          year: '2025',
          order: 2,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
        // 2.2 - Dagpeningar (23)
        {
          id: '9207226b-ac05-483c-bbed-71270556cd92',
          section_id: 'e5738a9b-2c12-426f-b13b-bde6c1e2ac39',
          field_number: 23,
          field_name: 'Dagpeningar',
          year: '2025',
          order: 3,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
        // 2.3 - Íþróttastyrkur (96)
        {
          id: '95c87688-b581-4280-94e2-da0f0fdae3a8',
          section_id: 'ee0aa581-a73b-492c-b123-5b8cdcf71eb7',
          field_number: 96,
          field_name: 'Íþróttastyrkur',
          year: '2025',
          order: 4,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
        // 2.3 - Starfsmenntastyrkur (131)
        {
          id: 'c27cb8ef-658f-4ac0-a655-3ec07ed90b9f',
          section_id: 'ee0aa581-a73b-492c-b123-5b8cdcf71eb7',
          field_number: 131,
          field_name: 'Starfsmenntastyrkur',
          year: '2025',
          order: 5,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
        // 4.1 - (314)
        {
          id: '44f649f2-f6c3-4371-b4ca-bb32c0198905',
          section_id: '342078bc-e86a-42e1-98a1-d2aeb7985545',
          field_number: 314,
          field_name: null,
          year: '2025',
          order: 6,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
        // 4.3 - (6)
        {
          id: '7da869ec-af2f-4b16-bef3-f285389f2f82',
          section_id: 'b333cb92-1c3f-497f-a44e-ce4e88696d40',
          field_number: 6,
          field_name: null,
          year: '2025',
          order: 7,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
        // 5.2 - Vaxtagjöld (87)
        {
          id: 'a223facb-81c6-4e18-a8a0-1aa2536088aa',
          section_id: '9de8f2af-7507-4a38-8dbb-1e4e832906fd',
          field_number: 87,
          field_name: 'Vaxtagjöld',
          year: '2025',
          order: 8,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
        // 5.2 - Eftirstöðvar skulds (45)
        {
          id: '3a5b95f5-8e1b-46c5-ae45-fe00ad2aa922',
          section_id: '9de8f2af-7507-4a38-8dbb-1e4e832906fd',
          field_number: 45,
          field_name: 'Eftirstöðvar skulds',
          year: '2025',
          order: 9,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 - Vaxtagjöld (88)
        {
          id: '22e4ea12-f991-419c-a7d6-73bf82e2a41d',
          section_id: '4e6cb55b-d3b6-4c69-9830-195a7da7a55c',
          field_number: 88,
          field_name: 'Vaxtagjöld',
          year: '2025',
          order: 10,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 - Eftirstöðvar skulds (168)
        {
          id: '1172870d-4b01-4a22-8873-903bdcfb22d5',
          section_id: '4e6cb55b-d3b6-4c69-9830-195a7da7a55c',
          field_number: 168,
          field_name: 'Eftirstöðvar skulds',
          year: '2025',
          order: 11,
          entry_data_schema: null,
          can_edit_entry: true,
          can_add_entry: true,
          created: new Date(),
          modified: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface) {
    return Promise.all([
      queryInterface.bulkDelete('field', {
        id: [
          '98db4e89-0055-4aa1-8696-5922da89acde',
          'faef4d44-ebaa-43e4-bb8b-183ba0258221',
          '9207226b-ac05-483c-bbed-71270556cd92',
          '95c87688-b581-4280-94e2-da0f0fdae3a8',
          'c27cb8ef-658f-4ac0-a655-3ec07ed90b9f',
          '44f649f2-f6c3-4371-b4ca-bb32c0198905',
          '7da869ec-af2f-4b16-bef3-f285389f2f82',
          'a223facb-81c6-4e18-a8a0-1aa2536088aa',
          '3a5b95f5-8e1b-46c5-ae45-fe00ad2aa922',
          '22e4ea12-f991-419c-a7d6-73bf82e2a41d',
          '1172870d-4b01-4a22-8873-903bdcfb22d5',
        ],
      }),
      queryInterface.bulkDelete('section', {
        id: [
          'b1248d39-a21e-4abf-b46f-765a7d41b7ee',
          'e5738a9b-2c12-426f-b13b-bde6c1e2ac39',
          'ee0aa581-a73b-492c-b123-5b8cdcf71eb7',
          'daab862a-e27b-4444-9591-194c3d641fbf',
          '342078bc-e86a-42e1-98a1-d2aeb7985545',
          'b333cb92-1c3f-497f-a44e-ce4e88696d40',
          '9de8f2af-7507-4a38-8dbb-1e4e832906fd',
          '4e6cb55b-d3b6-4c69-9830-195a7da7a55c',
        ],
      }),
    ])
  },
}
