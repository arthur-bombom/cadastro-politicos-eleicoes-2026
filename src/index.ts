import { Presidente } from "./presidente";
import { Governador } from "./governador";
import { DeputadoEstadual } from "./deputadoEstadual";
import { DeputadoFederal } from "./deputadoFederal";
import { Senador } from "./senador";

const presidente = new Presidente(
  "Luiz Inácio Lula da Silva",
  "PT",
  37,
  41650.92,
  ["Plano Safra 2025/2026", "Novo PAC", "Desenrola Brasil"]
);
const governadorPE = new Governador(
  "Raquel Lyra",
  "PSD",
  "Pernambuco",
  22,
  "Palácio do Campo das Princesas",
  "Praça da República, s/n - Santo Antônio, Recife - PE",
  33763.0,
  ["Pacto pela Vida 2.0", "Educa+PE"]
);
const governadorSP = new Governador(
  "Tarcísio de Freitas",
  "Republicanos",
  "São Paulo",
  30,
  "Palácio dos Bandeirantes",
  "Av. Morumbi, 4500 - Morumbi, São Paulo - SP",
  33763.0,
  ["Litoral 90", "Move São Paulo"]
);
const depFederalPE1 = new DeputadoFederal(
  "André Ferreira",
  "PL",
  "Pernambuco",
  "Governista",
  46366.19,
  ["Projeto de Lei da Saúde Suplementar"]
);
const depFederalPE2 = new DeputadoFederal(
  "Clarissa Tércio",
  "PP",
  "Pernambuco",
  "Ruralista",
  46366.19,
  ["Marco Legal do Turismo Rural"]
);
const depFederalPE3 = new DeputadoFederal(
  "Pedro Campos",
  "PSB",
  "Pernambuco",
  "Governista",
  46366.19,
  ["Projeto de Lei da Juventude Trabalhadora"]
);
const depFederalSP1 = new DeputadoFederal(
  "Guilherme Boulos",
  "PSOL",
  "São Paulo",
  "Ambientalista",
  46366.19,
  ["Projeto Minha Casa Minha Vida Urbano"]
);
const depFederalSP2 = new DeputadoFederal(
  "Eduardo Bolsonaro",
  "PL",
  "São Paulo",
  "Conservadora",
  46366.19,
  ["Projeto de Lei do Excludente de Ilicitude"]
);
const depEstadualPE1 = new DeputadoEstadual(
  "Pastor Junior Tercio",
  "PP",
  "Pernambuco",
  ["Comissão de Educação", "Comissão de Ética"],
  "Praça Dezessete, s/n - Santo Antônio, Recife - PE",
  27743.29,
  ["Lei da Merenda Escolar Regional"]
);
const depEstadualPE2 = new DeputadoEstadual(
  "Coronel Alberto Feitosa",
  "PL",
  "Pernambuco",
  ["Comissão de Segurança Pública"],
  "Praça Dezessete, s/n - Santo Antônio, Recife - PE",
  27743.29,
  ["Lei do Policiamento Comunitário"]
);
const depEstadualPE3 = new DeputadoEstadual(
  "Delegada Gleide Angelo",
  "PSB",
  "Pernambuco",
  ["Comissão de Segurança Pública", "Comissão de Direitos Humanos"],
  "Praça Dezessete, s/n - Santo Antônio, Recife - PE",
  27743.29,
  ["Lei de Combate à Violência Doméstica"]
);

const depEstadualSP1 = new DeputadoEstadual(
  "Eduardo Suplicy",
  "PT",
  "São Paulo",
  ["Comissão de Direitos Humanos"],
  "Av. Pedro Álvares Cabral, 201 - Vila Mariana, São Paulo - SP",
  27743.29,
  ["Renda Básica Estadual"]
);
const depEstadualSP2 = new DeputadoEstadual(
  "Carlos Giannazi",
  "PSOL",
  "São Paulo",
  ["Comissão de Educação"],
  "Av. Pedro Álvares Cabral, 201 - Vila Mariana, São Paulo - SP",
  27743.29,
  ["Lei de Valorização do Magistério Estadual"]
);

const senadorPE1 = new Senador(
  "Humberto Costa",
  "PT",
  "Pernambuco",
  2018,
  46366.19,
  ["Projeto de Lei do SUS Digital"]
);
const senadorPE2 = new Senador(
  "Teresa Leitão",
  "PSB",
  "Pernambuco",
  2022,
  46366.19,
  ["Projeto de Lei da Primeira Infância"]
);

const senadorSP1 = new Senador(
  "Astronauta Marcos Pontes",
  "PL",
  "São Paulo",
  2022,
  46366.19,
  ["Marco Legal da Exploração Espacial"]
);

const todosOsPoliticos = [
  presidente,
  governadorPE,
  governadorSP,
  depFederalPE1,
  depFederalPE2,
  depFederalPE3,
  depFederalSP1,
  depFederalSP2,
  depEstadualPE1,
  depEstadualPE2,
  depEstadualPE3,
  depEstadualSP1,
  depEstadualSP2,
  senadorPE1,
  senadorPE2,
  senadorSP1,
];

console.log("========== MANDATOS ==========");
todosOsPoliticos.forEach((politico) => politico.imprimirMandato());

console.log("\n========== EXEMPLOS DE AÇÕES ==========");
console.log(presidente.nomearMinistro("Fernando Haddad"));
console.log(presidente.elaborarLOA());

console.log(governadorPE.gerirPoliciaMilitar());
console.log(governadorSP.administrarRodoviasEstaduais());

console.log(depFederalPE1.votarPEC());
console.log(depFederalSP1.criarCPINacional("desmatamento ilegal"));

console.log(depEstadualPE1.votarPPA());
console.log(depEstadualSP1.proporEmendaConstituicaoEstadual());

console.log(senadorPE1.aprovarAutoridadeAltoEscalao("Ministro do STF", "Fulano de Tal"));
console.log(senadorSP1.representarInteressesDoEstado());

console.log("\n========== IDENTIFICAÇÃO ==========");
todosOsPoliticos.forEach((politico) => console.log(politico.identificacao()));
