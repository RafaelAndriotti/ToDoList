import express from 'express';
import tarefas from './tasksRoutes.js';


const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Curso de Node.JS'));

    app.use(express.json(), tarefas)
};

export default routes;