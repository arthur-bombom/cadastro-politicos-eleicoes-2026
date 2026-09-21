"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presidente = void 0;
const politico_1 = require("./politico");
class Presidente extends politico_1.Politico {
    constructor(nome, partido, quantidadeMinistros, remuneracao, projetos = []) {
        super(nome, partido, politico_1.Esfera.FEDERAL, politico_1.Poder.EXECUTIVO, "Palácio do Planalto", "Praça dos Três Poderes, Brasília - DF", remuneracao, projetos);
        this.quantidadeMinistros = quantidadeMinistros;
    }
    getQuantidadeMinistros() {
        return this.quantidadeMinistros;
    }

    imprimirMandato() {
        console.log(`[Mandato de ${this.getNome()}] Como Presidente da República, o mandato ` +
            `consiste em propor, sancionar e vetar leis, além de editar medidas provisórias.`);
    }
 
    nomearMinistro(nomeMinistro) {
        return `${this.getNome()} nomeou ${nomeMinistro} como Ministro de Estado.`;
    }
    exonerarMinistro(nomeMinistro) {
        return `${this.getNome()} exonerou ${nomeMinistro} do cargo de Ministro de Estado.`;
    }
    comandarForcasArmadas() {
        return `${this.getNome()} comandou as Forças Armadas em uma operação de defesa nacional.`;
    }
    representarPaisInternacionalmente(evento) {
        return `${this.getNome()} representou o Brasil no evento internacional "${evento}".`;
    }
    elaborarPPA() {
        return `${this.getNome()} elaborou e enviou ao Congresso o Plano Plurianual (PPA) nacional.`;
    }
    elaborarLDO() {
        return `${this.getNome()} elaborou e enviou ao Congresso a Lei de Diretrizes Orçamentárias (LDO) nacional.`;
    }
    elaborarLOA() {
        return `${this.getNome()} elaborou e enviou ao Congresso a proposta de Lei Orçamentária Anual (LOA) nacional.`;
    }
}
exports.Presidente = Presidente;
