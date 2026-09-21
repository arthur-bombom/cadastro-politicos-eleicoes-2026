export declare enum Esfera {
    MUNICIPAL = "Municipal",
    ESTADUAL = "Estadual",
    FEDERAL = "Federal"
}
export declare enum Poder {
    EXECUTIVO = "Executivo",
    LEGISLATIVO = "Legislativo",
    JUDICIARIO = "Judici\u00E1rio"
}
export declare abstract class Politico {
    private nome;
    private partido;
    private esfera;
    private poder;
    private nomeLocalTrabalho;
    private enderecoLocalTrabalho;
    private remuneracao;
    private projetos;
    constructor(nome: string, partido: string, esfera: Esfera, poder: Poder, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, projetos?: string[]);
    getNome(): string;
    getPartido(): string;
    getEsfera(): Esfera;
    getPoder(): Poder;
    getNomeLocalTrabalho(): string;
    getEnderecoLocalTrabalho(): string;
    getRemuneracao(): number;
    getProjetos(): string[];
    adicionarProjeto(tituloProjeto: string): void;

    abstract imprimirMandato(): void;
    identificacao(): string;
}
