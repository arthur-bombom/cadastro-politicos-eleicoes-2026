"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Governador = void 0;
const politico_1 = require("./politico");
class Governador extends politico_1.Politico {
    constructor(nome, partido, estado, quantidadeSecretarios, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos = []) {
        super(nome, partido, politico_1.Esfera.ESTADUAL, politico_1.Poder.EXECUTIVO, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.quantidadeSecretarios = quantidadeSecretarios;
    }
    getEstado() {
        return this.estado;
    }
    getQuantidadeSecretarios() {
        return this.quantidadeSecretarios;
    }
    imprimirMandato() {
        console.log(`[Mandato de ${this.getNome()}] Como Governador(a) de ${this.estado}, o mandato ` +
            `consiste em sancionar e vetar leis estaduais, decretar estado de calamidade ` +
            `e enviar PEC à Assembleia Legislativa.`);
    }
    gerirPoliciaMilitar() {
        return `${this.getNome()} geriu a Polícia Militar de ${this.estado}.`;
    }
    administrarRodoviasEstaduais() {
        return `${this.getNome()} administrou as rodovias estaduais de ${this.estado}.`;
    }
    coordenarEducacaoESaude() {
        return `${this.getNome()} coordenou as políticas de educação e saúde de ${this.estado}.`;
    }
    elaborarPPAEstadual() {
        return `${this.getNome()} elaborou e enviou à Assembleia Legislativa o PPA estadual de ${this.estado}.`;
    }
    elaborarLDOEstadual() {
        return `${this.getNome()} elaborou e enviou à Assembleia Legislativa a LDO estadual de ${this.estado}.`;
    }
    elaborarLOAEstadual() {
        return `${this.getNome()} elaborou e enviou à Assembleia Legislativa a LOA estadual de ${this.estado}.`;
    }
}
exports.Governador = Governador;