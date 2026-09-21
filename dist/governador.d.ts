import { Politico } from "./politico";
export declare class Governador extends Politico {
    private quantidadeSecretarios;
    private estado;
    constructor(nome: string, partido: string, estado: string, quantidadeSecretarios: number, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, projetos?: string[]);
    getEstado(): string;
    getQuantidadeSecretarios(): number;
    imprimirMandato(): void;
    gerirPoliciaMilitar(): string;
    administrarRodoviasEstaduais(): string;
    coordenarEducacaoESaude(): string;
    elaborarPPAEstadual(): string;
    elaborarLDOEstadual(): string;
    elaborarLOAEstadual(): string;
}
