import { Politico, Esfera, Poder } from "./politico";

export class Governador extends Politico {
  private quantidadeSecretarios: number;
  private estado: string;

  constructor(
    nome: string,
    partido: string,
    estado: string,
    quantidadeSecretarios: number,
    nomeLocalTrabalho: string,
    enderecoLocalTrabalho: string,
    remuneracao: number,
    projetos: string[] = []
  ) {
    super(
      nome,
      partido,
      Esfera.ESTADUAL,
      Poder.EXECUTIVO,
      nomeLocalTrabalho,
      enderecoLocalTrabalho,
      remuneracao,
      projetos
    );
    this.estado = estado;
    this.quantidadeSecretarios = quantidadeSecretarios;
  }

  public getEstado(): string {
    return this.estado;
  }

  public getQuantidadeSecretarios(): number {
    return this.quantidadeSecretarios;
  }

    public imprimirMandato(): void {
    console.log(
      `[Mandato de ${this.getNome()}] Como Governador(a) de ${this.estado}, o mandato ` +
        `consiste em sancionar e vetar leis estaduais, decretar estado de calamidade ` +
        `e enviar PEC à Assembleia Legislativa.`
    );
  }

  public gerirPoliciaMilitar(): string {
    return `${this.getNome()} geriu a Polícia Militar de ${this.estado}.`;
  }

  public administrarRodoviasEstaduais(): string {
    return `${this.getNome()} administrou as rodovias estaduais de ${this.estado}.`;
  }

  public coordenarEducacaoESaude(): string {
    return `${this.getNome()} coordenou as políticas de educação e saúde de ${this.estado}.`;
  }

  public elaborarPPAEstadual(): string {
    return `${this.getNome()} elaborou e enviou à Assembleia Legislativa o PPA estadual de ${this.estado}.`;
  }

  public elaborarLDOEstadual(): string {
    return `${this.getNome()} elaborou e enviou à Assembleia Legislativa a LDO estadual de ${this.estado}.`;
  }

  public elaborarLOAEstadual(): string {
    return `${this.getNome()} elaborou e enviou à Assembleia Legislativa a LOA estadual de ${this.estado}.`;
  }
}
