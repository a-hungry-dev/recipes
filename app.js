import express from 'express';
import config from './config/app'
import initialiseRoutes from './router'

let app = express()

app = initialiseRoutes(app)

app.listen(config.port, () => {
    console.log(`app running on ${config.port}`)
});