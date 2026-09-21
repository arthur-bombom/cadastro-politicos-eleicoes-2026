"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoFederal = void 0;
const politico_1 = require("./politico");
class DeputadoFederal extends politico_1.Politico {
    constructor(nome, partido, estado, bancada, remuneracao, projetos = []) {
        super(nome, partido, politico_1.Esfera.FEDERAL, politico_1.Poder.LEGISLATIVO, "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", remuneracao, projetos);
        this.estado = estado;
        this.bancada = bancada;
    }
    getEstado() {
        return this.estado;
    }
    getBancada() {
        return this.bancada;
    }
  
    imprimirMandato() {
        console.log(`[Mandato de ${this.getNome()}] Como Deputado(a) Federal por ${this.estado}, o mandato ` +
            `consiste em legislar sobre o código penal, o código tributário e as leis trabalhistas, ` +
            `além de fiscalizar o Presidente da República.`);
    }
    votarPEC() {
        return `${this.getNome()} votou uma PEC (Proposta de Emenda à Constituição Federal).`;
    }
    criarCPINacional(motivo) {
        return `${this.getNome()} criou uma CPI nacional para investigar "${motivo}".`;
    }
    votarPPA() {
        return `${this.getNome()} votou o PPA nacional.`;
    }
    votarLDO() {
        return `${this.getNome()} votou a LDO nacional.`;
    }
    votarLOA() {
        return `${this.getNome()} votou a LOA nacional.`;
    }
    proporLeiComplementar(tema) {
        return `${this.getNome()} propôs uma lei complementar sobre "${tema}".`;
    }
}
exports.DeputadoFederal = DeputadoFederal;