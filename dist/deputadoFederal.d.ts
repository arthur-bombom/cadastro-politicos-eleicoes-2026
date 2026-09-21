import { Politico } from "./politico";
export declare class DeputadoFederal extends Politico {
    private bancada;
    private estado;
    constructor(nome: string, partido: string, estado: string, bancada: string, remuneracao: number, projetos?: string[]);
    getEstado(): string;
    getBancada(): string;
    imprimirMandato(): void;
    votarPEC(): string;
    criarCPINacional(motivo: string): string;
    votarPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporLeiComplementar(tema: string): string;
}
