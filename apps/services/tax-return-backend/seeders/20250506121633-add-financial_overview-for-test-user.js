/* eslint-disable local-rules/disallow-kennitalas */
'use strict'
const uuid = require('uuidv4').uuid

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'financial_overview',
      [
        // Jökull Þórðarson
        {
          id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          national_id: '1203894569',
          year: 2025,
          created: new Date(),
          modified: new Date(),
        },
      ],
      {},
    )

    await queryInterface.bulkInsert(
      'financial_overview_entry',
      [
        // 2.1 Laun og starfstengdar greiðslur - (21)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '98db4e89-0055-4aa1-8696-5922da89acde',
          data: JSON.stringify({
            nationalId: '1111111111',
            name: 'Norðurljós Software ehf',
          }),
          amount: 9360000,
          created: new Date(),
          modified: new Date(),
        },
        // 2.1 Laun og starfstengdar greiðslur - (21)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '98db4e89-0055-4aa1-8696-5922da89acde',
          data: JSON.stringify({
            nationalId: '2222222222',
            name: 'Mús & Merki ehf.',
          }),
          amount: 900000,
          created: new Date(),
          modified: new Date(),
        },
        // 2.2 Ökutækjastyrkur, dagpeningar og hlunnindi - Dagpeningar (23)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '9207226b-ac05-483c-bbed-71270556cd92',
          data: null,
          amount: 120000,
          created: new Date(),
          modified: new Date(),
        },
        // 2.3 Lífeyrisgreiðslur. Greiðslur frá Tryggingastofnun. Aðrar bótagreiðslur, styrkir o.fl. - Íþróttastyrkur (96)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '95c87688-b581-4280-94e2-da0f0fdae3a8',
          data: JSON.stringify({
            nationalId: '1111111111',
            name: 'Norðurljós Software ehf',
            description: 'Íþróttastyrkur',
          }),
          amount: 75000,
          created: new Date(),
          modified: new Date(),
        },
        // 2.3 Lífeyrisgreiðslur. Greiðslur frá Tryggingastofnun. Aðrar bótagreiðslur, styrkir o.fl. - Starfsmenntastyrkur (131)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: 'c27cb8ef-658f-4ac0-a655-3ec07ed90b9f',
          data: JSON.stringify({
            nationalId: '2222222222',
            name: 'Mús & Merki ehf.',
            description: 'Starfsmenntastyrkur',
          }),
          amount: 130000,
          created: new Date(),
          modified: new Date(),
        },
        // 4.1 Innlendar fasteignir - (314)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '44f649f2-f6c3-4371-b4ca-bb32c0198905',
          data: JSON.stringify({
            propertyNumber: '2109876',
            address: 'Bláfjallagata 12',
          }),
          amount: 52000000,
          created: new Date(),
          modified: new Date(),
        },
        // 4.3 Bifreiðir - (6)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '7da869ec-af2f-4b16-bef3-f285389f2f82',
          data: JSON.stringify({ permno: 'KB521', purchaseYear: '2021' }),
          amount: 3100000,
          created: new Date(),
          modified: new Date(),
        },
        // 4.3 Bifreiðir - (6)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '7da869ec-af2f-4b16-bef3-f285389f2f82',
          data: JSON.stringify({ permno: 'JU329', purchaseYear: '2012' }),
          amount: 430000,
          created: new Date(),
          modified: new Date(),
        },
        // 5.2 Lán vegna kaupa eða byggingar íbúðarhúsnæðis til eigin nota. - Vaxtagjöld (87)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: 'a223facb-81c6-4e18-a8a0-1aa2536088aa',
          data: JSON.stringify({
            puchaseYear: '2021',
            address: 'Bláfjallagata 12',
            lenderName: 'Íslandsbanki hf',
            lenderNationalId: '4910080160',
            loanNumber: '56783900123',
            loanStartDate: '2021-06-15',
            loanPeriodInYears: 30,
            totalAnnualPayments: 2280000,
            principalRepayment: 1360000,
          }),
          amount: 920000,
          created: new Date(),
          modified: new Date(),
        },
        // 5.2 Lán vegna kaupa eða byggingar íbúðarhúsnæðis til eigin nota. - Eftirstöðvar skulds (45)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '3a5b95f5-8e1b-46c5-ae45-fe00ad2aa922',
          data: JSON.stringify({
            puchaseYear: '2021',
            address: 'Bláfjallagata 12',
            lenderName: 'Íslandsbanki hf',
            lenderNationalId: '4910080160',
            loanNumber: '56783900123',
            loanStartDate: '2021-06-15',
            loanPeriodInYears: 30,
            totalAnnualPayments: 2280000,
            principalRepayment: 1360000,
          }),
          amount: 28540000,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld - Vaxtagjöld (88)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '22e4ea12-f991-419c-a7d6-73bf82e2a41d',
          data: JSON.stringify({
            id: '1',
            description: 'Eftirstöðvar á korti númer: 4469 88XX XXXX 4567',
          }),
          amount: 39200,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld - Eftirstöðvar skulds (168)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '1172870d-4b01-4a22-8873-903bdcfb22d5',
          data: JSON.stringify({
            id: '1',
            description: 'Eftirstöðvar á korti númer: 4469 88XX XXXX 4567',
          }),
          amount: 217000,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld - Vaxtagjöld (88)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '22e4ea12-f991-419c-a7d6-73bf82e2a41d',
          data: JSON.stringify({ id: '2', description: 'Aukalán' }),
          amount: 86000,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld - Eftirstöðvar skulds (168)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '1172870d-4b01-4a22-8873-903bdcfb22d5',
          data: JSON.stringify({ id: '2', description: 'Aukalán' }),
          amount: 980000,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld - Vaxtagjöld (88)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '22e4ea12-f991-419c-a7d6-73bf82e2a41d',
          data: JSON.stringify({
            id: '3',
            description: '0142-26-732645 Varðan',
          }),
          amount: 14500,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld - Eftirstöðvar skulds (168)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '1172870d-4b01-4a22-8873-903bdcfb22d5',
          data: JSON.stringify({
            id: '3',
            description: '0142-26-732645 Varðan',
          }),
          amount: 62000,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld - Vaxtagjöld (88)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '22e4ea12-f991-419c-a7d6-73bf82e2a41d',
          data: JSON.stringify({
            id: '4',
            description: 'Kílómetragjald, Skatturinn',
          }),
          amount: 0,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld - Eftirstöðvar skulds (168)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '1172870d-4b01-4a22-8873-903bdcfb22d5',
          data: JSON.stringify({
            id: '4',
            description: 'Kílómetragjald, Skatturinn',
          }),
          amount: 2370,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld - Vaxtagjöld (88)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '22e4ea12-f991-419c-a7d6-73bf82e2a41d',
          data: JSON.stringify({
            id: '5',
            description: 'Þing- og sveitarsjóðsgjöld, Skatturinn',
          }),
          amount: 224,
          created: new Date(),
          modified: new Date(),
        },
        // 5.5 Aðrar skuldir og vaxtagjöld - Eftirstöðvar skulds (168)
        {
          id: uuid(),
          financial_overview_id: 'af34f1c8-b7f4-4d76-8bf5-2340ea2d48af',
          field_id: '1172870d-4b01-4a22-8873-903bdcfb22d5',
          data: JSON.stringify({
            id: '5',
            description: 'Þing- og sveitarsjóðsgjöld, Skatturinn',
          }),
          amount: 0,
          created: new Date(),
          modified: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface) {
    return Promise.all([
      queryInterface.bulkDelete('financial_overview_entry', {
        financial_overview_id: ['af34f1c8-b7f4-4d76-8bf5-2340ea2d48af'],
      }),
      queryInterface.bulkDelete('financial_overview', {
        id: ['af34f1c8-b7f4-4d76-8bf5-2340ea2d48af'],
      }),
    ])
  },
}
