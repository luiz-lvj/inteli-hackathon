# Inteli BlockChain Challenge 2023
# CarbonSwap
## Tecnologias Utilizadas
* Front-end: React.
* Back-end: Node.js e PostgreSQL.
* Smart contracts: Solidity e Hardhat.
## Integrantes do grupo
* Breno das Neves de Lima
* Bryan Diniz Borck
* Daniel Yuki Higa
* Luiz Vasconcelos Júnior
* Thiago Galante Pereira
## Solução
O projeto visa solucionar a dificuldade na transação dos tokens de carbono ao redor do mundo a partir da implementação da blockchain nesse mercado. Para isso, a CarbonSwap será essencial, pois ela é uma exchange focada no mercado regulado que integra os diferentes tokens de carbono existentes no mundo e baseia suas negociações na stablecoin BTG Dol. Com isso, ela garante a interoperabilidade, a segurança e a eficiência desse mercado.

Sobre as tecnologias utilizadas:

GEAP:

Interoperabilidade como requisito é atingida, afinal, os tokens da "Bolsa Verde" brasileira podem ser negociados em um espaço com o LCFS (dos EUA) e o ETS (da Europa);
Essa negociação ocorre via stablecoin BTG Dol, o que garante rapidez e estabilidade na transação, diferente do método Swift tradicional, que pode levar alguns dias em transações no exterior;
Garantia de aposentadoria dos créditos de carbono, por meio de um mint de um token de aposentadoria intransferível por meio de um burn no token aposentado, assegurando que não seja negociado mais.
Por fim, projeto visando à melhoria da "Bolsa Verde" existe por meio desses benefícios desbloqueados com smart contracts.

Mynt:

Stablecoin do BTG Dol é usada em um mercado em muita ascensão, de Crédito de Carbono, e coin pode ser primordial dentro desse meio, sendo mais utilizada;
Projeto visa justamente à melhoria que hoje a moeda tradicional não traz, por IERC20, a stablecoin pode ser integrada em meio a garantir a estabilidade em nosso projeto.
Por fim, usamos o BTG Dol com muito êxito.

## Instruções para rodar o projeto
* Rodar "npm install" e, em seguida, o "npm start" dentro do diretório do front-end e do diretório do back-end.
* Rodar "npx hardhat run ./script/deploy/gs" nos smart contracts.
* Contratos deployados na rede da Mumbai:
	* CBIO deployed to 0x45CE6019314D4C14895875CcF0bE717589A97799
	* rCBIO deployed to 0x9691ad53747206F1f52e4AE1390FCBa028fb0A62
	* LCFS deployed to 0xd598D9417c7B23CCd3504f43CcBEc4EEC26fa10b
	* rLCFS deployed to 0xDEe14c32FB23Bd8570E44876ca9B74b79a06E2C7
	* ETS deployed to 0x191150bCacb1fe1172890bC00E6170aC152e17Ff
	* rETS deployed to 0x6B5cDDf56e8E21b42aA450Ef64367FfDFEa5f009
