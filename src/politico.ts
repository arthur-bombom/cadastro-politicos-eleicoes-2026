export enum Esfera {
  MUNICIPAL = "Municipal",
  ESTADUAL = "Estadual",
  FEDERAL = "Federal",
}

export enum Poder {
  EXECUTIVO = "Executivo",
  LEGISLATIVO = "Legislativo",
  JUDICIARIO = "Judiciário",
}

export abstract class Politico {
  private nome: string;
  private partido: string;
  private esfera: Esfera;
  private poder: Poder;
  private nomeLocalTrabalho: string;
  private enderecoLocalTrabalho: string;
  private remuneracao: number;
  private projetos: string[];

  constructor(
    nome: string,
    partido: string,
    esfera: Esfera,
    poder: Poder,
    nomeLocalTrabalho: string,
    enderecoLocalTrabalho: string,
    remuneracao: number,
    projetos: string[] = []
  ) {
    this.nome = nome;
    this.partido = partido;
    this.esfera = esfera;
    this.poder = poder;
    this.nomeLocalTrabalho = nomeLocalTrabalho;
    this.enderecoLocalTrabalho = enderecoLocalTrabalho;
    this.remuneracao = remuneracao;
    this.projetos = [...projetos];
  }

  public getNome(): string {
    return this.nome;
  }

  public getPartido(): string {
    return this.partido;
  }

  public getEsfera(): Esfera {
    return this.esfera;
  }

  public getPoder(): Poder {
    return this.poder;
  }

  public getNomeLocalTrabalho(): string {
    return this.nomeLocalTrabalho;
  }

  public getEnderecoLocalTrabalho(): string {
    return this.enderecoLocalTrabalho;
  }

  public getRemuneracao(): number {
    return this.remuneracao;
  }

  public getProjetos(): string[] {
    return [...this.projetos];
  }

  public adicionarProjeto(tituloProjeto: string): void {
    this.projetos.push(tituloProjeto);
  }

  public abstract imprimirMandato(): void;

  public identificacao(): string {
    return `${this.nome} (${this.partido}) - ${this.esfera}/${this.poder}`;
  }
}
