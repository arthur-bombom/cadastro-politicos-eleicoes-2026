import { Politico, Esfera, Poder } from "./politico";

export class DeputadoEstadual extends Politico {
  private estado: string;
  private comissoes: string[];

  constructor(
    nome: string,
    partido: string,
    estado: string,
    comissoes: string[],
    enderecoAssembleia: string,
    remuneracao: number,
    projetos: string[] = []
  ) {
    if (comissoes.length === 0) {
      throw new Error(
        "Um deputado estadual deve participar de ao menos uma comissão."
      );
    }
    super(
      nome,
      partido,
      Esfera.ESTADUAL,
      Poder.LEGISLATIVO,
      `Assembleia Legislativa de ${estado}`,
      enderecoAssembleia,
      remuneracao,
      projetos
    );
    this.estado = estado;
    this.comissoes = [...comissoes];
  }

  public getEstado(): string {
    return this.estado;
  }

  public getComissoes(): string[] {
    return [...this.comissoes];
  }

  public entrarEmComissao(comissao: string): void {
    this.comissoes.push(comissao);
  }

  public imprimirMandato(): void {
    console.log(
      `[Mandato de ${this.getNome()}] Como Deputado(a) Estadual por ${this.estado}, o mandato ` +
        `consiste em legislar sobre assuntos de interesse do estado e fiscalizar o governador.`
    );
  }

  public votarPPA(): string {
    return `${this.getNome()} votou o PPA do estado de ${this.estado}.`;
  }

  public votarLOA(): string {
    return `${this.getNome()} votou a LOA do estado de ${this.estado}.`;
  }

  public votarLDO(): string {
    return `${this.getNome()} votou a LDO do estado de ${this.estado}.`;
  }

  public proporEmendaConstituicaoEstadual(): string {
    return `${this.getNome()} propôs uma emenda à Constituição Estadual de ${this.estado}.`;
  }

  public criarCPIEstadual(motivo: string): string {
    return `${this.getNome()} criou uma CPI estadual para investigar "${motivo}".`;
  }
}
