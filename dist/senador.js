"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Senador = void 0;
const politico_1 = require("./politico");
class Senador extends politico_1.Politico {
    constructor(nome, partido, estado, anoEleicao, remuneracao, projetos = []) {
        super(nome, partido, politico_1.Esfera.FEDERAL, politico_1.Poder.LEGISLATIVO, "Senado Federal", "Praça dos Três Poderes, Brasília - DF", remuneracao, projetos);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
    getEstado() {
        return this.estado;
    }
    getAnoEleicao() {
        return this.anoEleicao;
    }
    imprimirMandato() {
        console.log(`[Mandato de ${this.getNome()}] Como Senador(a) por ${this.estado} (eleito(a) em ${this.anoEleicao}), ` +
            `o mandato consiste em sabatinar e aprovar ministros do STF, o Procurador-Geral da República e ` +
            `presidentes do Banco Central, legislar sobre leis federais e autorizar operações financeiras externas.`);
    }
    aprovarAutoridadeAltoEscalao(cargo, nomeIndicado) {
        return `${this.getNome()} aprovou ${nomeIndicado} para o cargo de ${cargo}.`;
    }
    julgarCrimeDeResponsabilidade() {
        return `${this.getNome()} participou do julgamento de um crime de responsabilidade.`;
    }
    representarInteressesDoEstado() {
        return `${this.getNome()} representou os interesses do estado de ${this.estado} no Senado.`;
    }
}
exports.Senador = Senador;