import mongoose from "mongoose";
import ErroBase from "../err/ErroBase.js";
import RequisicaoIncorreta from "../err/RequisicaoIncorreta.js";
import ErroValidaco from "../err/ErroValidacao.js";
import NaoEncontrado from "../err/NaoEncontrado.js";

function manipuladorDeErros (error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res)
    } 
    else if (error instanceof mongoose.Error.ValidationError){
        new ErroValidaco(error).enviarResposta(res);
    }
    else if (error instanceof NaoEncontrado) {
        error.enviarResposta(res);
    }
    else { 
        new ErroBase().enviarResposta(res);
    }
}

export default manipuladorDeErros;