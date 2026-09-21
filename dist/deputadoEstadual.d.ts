import { Politico } from "./politico";
export declare class DeputadoEstadual extends Politico {
    private estado;
    private comissoes;
    constructor(nome: string, partido: string, estado: string, comissoes: string[], enderecoAssembleia: string, remuneracao: number, projetos?: string[]);
    getEstado(): string;
    getComissoes(): string[];
    entrarEmComissao(comissao: string): void;
    imprimirMandato(): void;
    votarPPA(): string;
    votarLOA(): string;
    votarLDO(): string;
    proporEmendaConstituicaoEstadual(): string;
    criarCPIEstadual(motivo: string): string;
}
