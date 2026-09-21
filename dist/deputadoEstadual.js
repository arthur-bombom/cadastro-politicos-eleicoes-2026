"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoEstadual = void 0;
const politico_1 = require("./politico");
class DeputadoEstadual extends politico_1.Politico {
    constructor(nome, partido, estado, comissoes, enderecoAssembleia, remuneracao, projetos = []) {
        if (comissoes.length === 0) {
            throw new Error("Um deputado estadual deve participar de ao menos uma comissão.");
        }
        super(nome, partido, politico_1.Esfera.ESTADUAL, politico_1.Poder.LEGISLATIVO, `Assembleia Legislativa de ${estado}`, enderecoAssembleia, remuneracao, projetos);
        this.estado = estado;
        this.comissoes = [...comissoes];
    }
    getEstado() {
        return this.estado;
    }
    getComissoes() {
        return [...this.comissoes];
    }
    entrarEmComissao(comissao) {
        this.comissoes.push(comissao);
    }
    imprimirMandato() {
        console.log(`[Mandato de ${this.getNome()}] Como Deputado(a) Estadual por ${this.estado}, o mandato ` +
            `consiste em legislar sobre assuntos de interesse do estado e fiscalizar o governador.`);
    }
    votarPPA() {
        return `${this.getNome()} votou o PPA do estado de ${this.estado}.`;
    }
    votarLOA() {
        return `${this.getNome()} votou a LOA do estado de ${this.estado}.`;
    }
    votarLDO() {
        return `${this.getNome()} votou a LDO do estado de ${this.estado}.`;
    }
    proporEmendaConstituicaoEstadual() {
        return `${this.getNome()} propôs uma emenda à Constituição Estadual de ${this.estado}.`;
    }
    criarCPIEstadual(motivo) {
        return `${this.getNome()} criou uma CPI estadual para investigar "${motivo}".`;
    }
}
exports.DeputadoEstadual = DeputadoEstadual;