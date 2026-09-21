import { Politico, Esfera, Poder } from "./politico";

export class Senador extends Politico {
  private estado: string;
  private anoEleicao: number;

  constructor(
    nome: string,
    partido: string,
    estado: string,
    anoEleicao: number,
    remuneracao: number,
    projetos: string[] = []
  ) {
    super(
      nome,
      partido,
      Esfera.FEDERAL,
      Poder.LEGISLATIVO,
      "Senado Federal",
      "Praça dos Três Poderes, Brasília - DF",
      remuneracao,
      projetos
    );
    this.estado = estado;
    this.anoEleicao = anoEleicao;
  }

  public getEstado(): string {
    return this.estado;
  }

  public getAnoEleicao(): number {
    return this.anoEleicao;
  }

  public imprimirMandato(): void {
    console.log(
      `[Mandato de ${this.getNome()}] Como Senador(a) por ${this.estado} (eleito(a) em ${this.anoEleicao}), ` +
        `o mandato consiste em sabatinar e aprovar ministros do STF, o Procurador-Geral da República e ` +
        `presidentes do Banco Central, legislar sobre leis federais e autorizar operações financeiras externas.`
    );
  }

  public aprovarAutoridadeAltoEscalao(cargo: string, nomeIndicado: string): string {
    return `${this.getNome()} aprovou ${nomeIndicado} para o cargo de ${cargo}.`;
  }

  public julgarCrimeDeResponsabilidade(): string {
    return `${this.getNome()} participou do julgamento de um crime de responsabilidade.`;
  }

  public representarInteressesDoEstado(): string {
    return `${this.getNome()} representou os interesses do estado de ${this.estado} no Senado.`;
  }
}
