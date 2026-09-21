import { Politico, Esfera, Poder } from "./politico";

export class DeputadoFederal extends Politico {
  private bancada: string;
  private estado: string;

  constructor(
    nome: string,
    partido: string,
    estado: string,
    bancada: string,
    remuneracao: number,
    projetos: string[] = []
  ) {
    super(
      nome,
      partido,
      Esfera.FEDERAL,
      Poder.LEGISLATIVO,
      "Câmara dos Deputados",
      "Praça dos Três Poderes, Brasília - DF",
      remuneracao,
      projetos
    );
    this.estado = estado;
    this.bancada = bancada;
  }

  public getEstado(): string {
    return this.estado;
  }

  public getBancada(): string {
    return this.bancada;
  }

  public imprimirMandato(): void {
    console.log(
      `[Mandato de ${this.getNome()}] Como Deputado(a) Federal por ${this.estado}, o mandato ` +
        `consiste em legislar sobre o código penal, o código tributário e as leis trabalhistas, ` +
        `além de fiscalizar o Presidente da República.`
    );
  }

  public votarPEC(): string {
    return `${this.getNome()} votou uma PEC (Proposta de Emenda à Constituição Federal).`;
  }

  public criarCPINacional(motivo: string): string {
    return `${this.getNome()} criou uma CPI nacional para investigar "${motivo}".`;
  }

  public votarPPA(): string {
    return `${this.getNome()} votou o PPA nacional.`;
  }

  public votarLDO(): string {
    return `${this.getNome()} votou a LDO nacional.`;
  }

  public votarLOA(): string {
    return `${this.getNome()} votou a LOA nacional.`;
  }

  public proporLeiComplementar(tema: string): string {
    return `${this.getNome()} propôs uma lei complementar sobre "${tema}".`;
  }
}
