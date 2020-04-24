import express from 'express';
import { join } from 'path';

import getRecipes from '../routes/getRecipes';

export default (app) => {

    // static assets
    app.use(express.static('public'))

    // api routes
    app.get('/api/recipes', getRecipes);

    // views
    app.get('/', serveFile('index'))

    return app;
};


const serveFile = (view) => {
    return (req, res) => {
        res.sendFile(join(__dirname + `/../views/${view}.html`))
    }
}