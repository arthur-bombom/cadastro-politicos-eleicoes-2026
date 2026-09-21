import { Politico, Esfera, Poder } from "./politico";

export class Presidente extends Politico {
  private quantidadeMinistros: number;

  constructor(
    nome: string,
    partido: string,
    quantidadeMinistros: number,
    remuneracao: number,
    projetos: string[] = []
  ) {
    super(
      nome,
      partido,
      Esfera.FEDERAL,
      Poder.EXECUTIVO,
      "Palácio do Planalto",
      "Praça dos Três Poderes, Brasília - DF",
      remuneracao,
      projetos
    );
    this.quantidadeMinistros = quantidadeMinistros;
  }

  public getQuantidadeMinistros(): number {
    return this.quantidadeMinistros;
  }

  public imprimirMandato(): void {
    console.log(
      `[Mandato de ${this.getNome()}] Como Presidente da República, o mandato ` +
        `consiste em propor, sancionar e vetar leis, além de editar medidas provisórias.`
    );
  }

  public nomearMinistro(nomeMinistro: string): string {
    return `${this.getNome()} nomeou ${nomeMinistro} como Ministro de Estado.`;
  }

  public exonerarMinistro(nomeMinistro: string): string {
    return `${this.getNome()} exonerou ${nomeMinistro} do cargo de Ministro de Estado.`;
  }

  public comandarForcasArmadas(): string {
    return `${this.getNome()} comandou as Forças Armadas em uma operação de defesa nacional.`;
  }

  public representarPaisInternacionalmente(evento: string): string {
    return `${this.getNome()} representou o Brasil no evento internacional "${evento}".`;
  }

  public elaborarPPA(): string {
    return `${this.getNome()} elaborou e enviou ao Congresso o Plano Plurianual (PPA) nacional.`;
  }

  public elaborarLDO(): string {
    return `${this.getNome()} elaborou e enviou ao Congresso a Lei de Diretrizes Orçamentárias (LDO) nacional.`;
  }

  public elaborarLOA(): string {
    return `${this.getNome()} elaborou e enviou ao Congresso a proposta de Lei Orçamentária Anual (LOA) nacional.`;
  }
}
