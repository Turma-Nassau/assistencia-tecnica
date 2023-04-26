//require('dotenv').config()

module.exports = {
    development: {
        url: 'postgres://pmldozdr:uYb38ExhyFUPTP1-npRmYavK4_hBt91n@motty.db.elephantsql.com/pmldozdr',
        dialect: 'postgres',
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}
