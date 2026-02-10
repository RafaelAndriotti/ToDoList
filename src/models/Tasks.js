import mongoose from "mongoose";

const taskSchema = new mongoose.Schema ({

    id: { type: mongoose.Schema.Types.ObjectId },
    nome_da_tarefa: { 
        type: String, 
        required: [true, "O nome da tarefa e obrigatorio"] },
    data_de_criacao: { type: 
        String, 
        required: [true, "Necessario informar uma data de criacao da tarefa"] },
    data_de_conclusao: { type: String }

}, { versionKey: false })

const tasks = mongoose.model('tasks', taskSchema);

export default tasks;