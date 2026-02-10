
import NaoEncontrado from "../err/NaoEncontrado.js";
import { tasks } from "../models/index.js";

class TasksController {

    static async listarTarefas (req, res, next) {
        
        try {
            const listaTarefas = await tasks.find({});
            res.status(200).json(listaTarefas);
        } catch (error) {
            next(error);
        }
    }

    static async listarTarefaPorId (req, res, next) {
        try {
            const id = req.params.id

            const tarefaEncontrada = await tasks.findById(id);
        
        if (tarefaEncontrada !== null) {
            res.status(200).send(tarefaEncontrada);
        }
        else {
            next(new NaoEncontrado("Id do livro nao localizado."))
        }
            
        } catch (error) {
            next(error);
            
        }
    }

    static async cadastraTarefa (req, res, next) {
        try {
            const novaTarefa = await tasks.create(req.body)

             res.status(201).json({ message: 'Criado com sucesso', tarefa: novaTarefa })
        } catch (error) {
            next(error);
        }
    }

    static async atualizaTarefa (req, res, next) {
        try {

            const id = req.params.id

            const tarefaAtualizada = await tasks.findByIdAndUpdate(id, req.body);
        if(tarefaAtualizada !== null){
            res.status(200).json({ message: 'Tarefa atualizada' });
        }
        else{
            next(new NaoEncontrado("Id nao NaoEncontrado."))
        }    

        } catch (error) {
            next(error);
        }
    }

    static async deletaTarefa (req, res, next) {
        try {

            const id = req.params.id

            const tarefaResultado = await tasks.findByIdAndDelete(id);
            
        if (tarefaResultado !== null) {
            res.status(200).json({ message: 'Tarefa deletada'});
        }else {
            next(new NaoEncontrado("Id do Livro nao localizado."));
        }
        } catch (error) {
            next(error);
        }
    }
}

export default TasksController;