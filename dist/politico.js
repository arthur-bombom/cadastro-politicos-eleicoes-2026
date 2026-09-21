"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Politico = exports.Poder = exports.Esfera = void 0;
var Esfera;
(function (Esfera) {
    Esfera["MUNICIPAL"] = "Municipal";
    Esfera["ESTADUAL"] = "Estadual";
    Esfera["FEDERAL"] = "Federal";
})(Esfera || (exports.Esfera = Esfera = {}));
var Poder;
(function (Poder) {
    Poder["EXECUTIVO"] = "Executivo";
    Poder["LEGISLATIVO"] = "Legislativo";
    Poder["JUDICIARIO"] = "Judici\u00E1rio";
})(Poder || (exports.Poder = Poder = {}));

class Politico {
    constructor(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos = []) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.nomeLocalTrabalho = nomeLocalTrabalho;
        this.enderecoLocalTrabalho = enderecoLocalTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = [...projetos];
    }

    getNome() {
        return this.nome;
    }
    getPartido() {
        return this.partido;
    }
    getEsfera() {
        return this.esfera;
    }
    getPoder() {
        return this.poder;
    }
    getNomeLocalTrabalho() {
        return this.nomeLocalTrabalho;
    }
    getEnderecoLocalTrabalho() {
        return this.enderecoLocalTrabalho;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    getProjetos() {
    
        return [...this.projetos];
    }
    adicionarProjeto(tituloProjeto) {
        this.projetos.push(tituloProjeto);
    }

    identificacao() {
        return `${this.nome} (${this.partido}) - ${this.esfera}/${this.poder}`;
    }
}
exports.Politico = Politico;
