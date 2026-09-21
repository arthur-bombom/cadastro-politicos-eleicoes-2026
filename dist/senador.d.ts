import { Politico } from "./politico";
export declare class Senador extends Politico {
    private estado;
    private anoEleicao;
    constructor(nome: string, partido: string, estado: string, anoEleicao: number, remuneracao: number, projetos?: string[]);
    getEstado(): string;
    getAnoEleicao(): number;
    imprimirMandato(): void;
    aprovarAutoridadeAltoEscalao(cargo: string, nomeIndicado: string): string;
    julgarCrimeDeResponsabilidade(): string;
    representarInteressesDoEstado(): string;
}
