import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidaco extends RequisicaoIncorreta {
    constructor(error) {
        const mensagensErro = Object.values(error.errors)
            .map(error => error.message)
            .join("; ");

        super(`Foram encontrados os seguintes erros: ${mensagensErro}`);
    }
}

export default ErroValidaco;