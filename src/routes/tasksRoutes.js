import express from 'express';
import TasksController from '../controller/tasksController.js';

const routes = express.Router();

routes.get('/tarefas', TasksController.listarTarefas);
routes.get('/tarefas/:id', TasksController.listarTarefaPorId);
routes.post('/tarefas', TasksController.cadastraTarefa);
routes.put('/tarefas/:id', TasksController.atualizaTarefa);
routes.delete('/tarefas/:id', TasksController.deletaTarefa);

export default routes;