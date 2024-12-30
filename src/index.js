
/**
 * nodemon index.js
 */

const app = require('./app')
const env = require('dotenv')

env.config({ path: './.env' }) 
app.listen(process.env.PORT, () => {
    console.log('server connected', process.env.PORT)
    console.log(`the server Running successfully http://localhost:${process.env.PORT}/`)
})
