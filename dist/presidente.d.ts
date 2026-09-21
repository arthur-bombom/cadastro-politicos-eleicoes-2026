import { Politico } from "./politico";
export declare class Presidente extends Politico {
    private quantidadeMinistros;
    constructor(nome: string, partido: string, quantidadeMinistros: number, remuneracao: number, projetos?: string[]);
    getQuantidadeMinistros(): number;
    imprimirMandato(): void;
    nomearMinistro(nomeMinistro: string): string;
    exonerarMinistro(nomeMinistro: string): string;
    comandarForcasArmadas(): string;
    representarPaisInternacionalmente(evento: string): string;
    elaborarPPA(): string;
    elaborarLDO(): string;
    elaborarLOA(): string;
}
