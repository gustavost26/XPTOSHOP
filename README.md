# **XPTOSHOP**

**XPTOSHOP** é uma plataforma de fidelidade on-chain que permite aos usuários adquirirem produtos na loja com o Token Kryptonita (KPT). O aplicativo é construído com Next.js e React, utilizando contratos inteligentes na rede Polygon (Amoy Testnet) para garantir transparência e segurança em todas as transações.

# **Site Online Pelo Vercel**
- **Visite nosso site**: [XPTOSHOP](https://xptoshop.vercel.app/)
- **Veja o contrato no Polygonscan**: [Contrato XPTOSHOP](https://amoy.polygonscan.com/address/0xe519e0692ffA19ca2430A427CFcceC0b6AF5C201)

[![betcandidate_home.png](https://i.postimg.cc/9MM3xNTz/xptoshop-home.png)](https://postimg.cc/f36gyC8h)

[![betcandidate_bet.png](https://i.postimg.cc/bvLc9jZK/xptoshop-loggedin.png)](https://postimg.cc/LqqbmwBT)

[![amoy-polygonscan-contractaddress.png](https://i.postimg.cc/Vkqc5tms/xptoshop-contract.png)](https://postimg.cc/TK3s4pKB)


[![metamask_connection.png](https://i.postimg.cc/kX7vZjyv/Captura-de-ecra-2024-10-13-a-s-13-45-39.png)](https://postimg.cc/dDSCZjph) [![metamask_permission.png](https://i.postimg.cc/BQNBGxY9/Captura-de-ecra-2024-10-13-a-s-13-46-01.png)](https://postimg.cc/D8JXrb3B)


[![metamask_connection.png](https://i.postimg.cc/FFyxTt0K/Captura-de-ecra-2024-10-13-a-s-13-46-50.png)](https://postimg.cc/3WwpwcSM) [![metamask_permission.png](https://i.postimg.cc/rmND7RxZ/Captura-de-ecra-2024-10-13-a-s-18-45-18.png)](https://postimg.cc/phyVFT0K)

[![metamask_connection.png](https://i.postimg.cc/Dz4rsR2n/Captura-de-ecra-2024-10-13-a-s-13-47-09.png)](https://postimg.cc/JymHC6D2)

[![metamask_permission.png](https://i.postimg.cc/76vgNX67/Captura-de-ecra-2024-10-13-a-s-13-47-20.png)](https://postimg.cc/JyqDrNj4)



---


# Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contrato Inteligente](#contrato-inteligente)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)


---


# Visão Geral

O **XPTOSHOP** oferece aos usuários a oportunidade de participar de um programa de fidelidade descentralizado. Ao se conectarem à plataforma via carteira MetaMask, os usuários podem selecionar o produto desejado e realizar o pagamento utilizando o token Kryptonita (KPT).


---


# Funcionalidades

- **Conexão com MetaMask**: Os usuários podem conectar suas carteiras MetaMask para interagir com a plataforma.

- **Verificação de Rede**: O aplicativo verifica se o usuário está conectado à rede Amoy e solicita a mudança de rede, se necessário.

- **Compra de Produtos**: Os usuários podem adquirir qualquer produto que esteja listado na plataforma.

- **Interface Intuitiva**: Utiliza Tailwindcss para uma interface amigável e responsiva.

- **Transparência On-Chain**: Todas as transações são realizadas através do contrato inteligente na rede Polygon (Amoy Testnet).


---


# Tecnologias Utilizadas

- **Foundry**: Kit de ferramentas extremamente rápida, portátil e modular para o desenvolvimento de aplicações Ethereum.
- **Next.js 14.2.4**: Framework React para desenvolvimento web.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **ethers.js**: Biblioteca para interagir com o Ethereum blockchain.
- **MetaMask**: Extensão de navegador para interação com a blockchain Ethereum.
- **Solidity**: Linguagem de programação para contratos inteligentes na Ethereum.
- **Tailwindcss**: Framework CSS para estilização e responsividade.
- **React Context API**: Gerenciamento de estado global para autenticação.


---


# Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 14 ou superior)
- **NPM** (gerenciador de pacotes do Node.js)
- **MetaMask** (extensão instalada em seu navegador)
- **Conta na rede Amoy Testnet** com POL(MATIC) de teste (pode ser obtido em faucets)
- **Faucets recomendados**: [Chainlink Faucets](https://faucets.chain.link/) [Polygon Faucets](https://faucet.polygon.technology/)


---


# Instalação
1. Clone o repositório:

```bash
git clone https://github.com/gustavost26/XPTOSHOP.git
```

2. Navegue até o diretório do projeto:

```bash
cd XPTOSHOP
```
3. Instale as dependências:

```bash
npm install
```


---


# Uso

## Executando o Projeto Localmente

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
2. Acesse o aplicativo no navegador:

Abra `http://localhost:3000` para ver o aplicativo.

## Interagindo com a Plataforma

### 1. Conecte-se com a MetaMask:

- Certifique-se de que sua MetaMask está conectada à rede Amoy Testnet.
- Clique em **`Conectar MetaMask`** na página inicial.

### 2. Programa de Fidelidade:

- Após se conectar, o valor do produto será exibido junto com um botão para que o usuário possa interagir com a plataforma e realizar a compra do item desejado.
- Escolha um dos itens disponíveis e clique em **`Comprar`**.
- O valor do item será exibido automaticamente na MetaMask para que o usuário possa aprovar a transação.

---


## Observações
- **Taxa de Gás**: Às vezes, é necessário ajustar a taxa de gás para que a transação seja aprovada.
- **Transparência**: O código do contrato inteligente é público e pode ser verificado no Polygonscan.


---


# Contrato Inteligente
O contrato inteligente está implantado na rede Amoy Testnet.

- **Endereço do Contrato**: `0xe519e0692ffA19ca2430A427CFcceC0b6AF5C201`
- **Polygonscan**: [Ver Contrato no Polygonscan](0xe519e0692ffA19ca2430A427CFcceC0b6AF5C201)


---


# Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Passos para contribuir:

1. **Faça um fork do projeto**.

No GitHub, clique em "Fork" no canto superior direito da página do repositório.

2. **Clone o repositório forkado**:

```bash   
git clone https://github.com/seu-usuario/XPTOSHOP.git
```
3. **Crie uma nova branch**:

```bash
Copiar código
git checkout -b feature/nova-funcionalidade
```

4. **Commit suas mudanças**:

```bash
git commit -m 'Adiciona nova funcionalidade'
```

5. **Envie para o seu fork no GitHub**:

```bash
git push origin feature/nova-funcionalidade
```

6. **Abra um pull request**:
- No GitHub, vá até o seu fork e clique em "Compare & Pull Request".


---


# Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.


---


# Contato
- **Nome**: Gustavo Silva Teles
- **Email**: gustavost26@gmail.com
- **GitHub**: gustavost26

---


# Notas Adicionais
- **Segurança**: Certifique-se de nunca compartilhar suas chaves privadas. O XPTOSHOP não solicita nem armazena informações privadas dos usuários.
- **Testnet**: Este aplicativo utiliza a Amoy Testnet. Os Kryptonita(KPT) e POL(MATIC) utilizados são de teste e não possuem valor real.
- **Responsabilidade**: Este projeto é para fins educacionais e de demonstração. Não nos responsabilizamos por quaisquer perdas ou danos decorrentes do uso deste aplicativo.


---


# Troubleshooting

Se você encontrar problemas ao executar o aplicativo, tente as seguintes etapas:

- **Verifique a Conexão com a Rede Amoy**:
   - Certifique-se de que sua MetaMask está conectada à rede Amoy.
   - Se necessário, adicione a rede Amoy manualmente na MetaMask.

- **Erros ao Instalar Dependências**:
   - Certifique-se de que está utilizando a versão correta do Node.js e NPM.
   - Exclua a pasta node_modules e o arquivo package-lock.json, e execute npm install novamente.

- **Problemas com a MetaMask**:
   - Atualize a extensão MetaMask para a versão mais recente.
   - Limpe o cache do navegador ou tente em um navegador diferente.


---


# Desenvolvimento Futuro

- **Melhorias**:
   - Melhorar a responsividade em dispositivos móveis.
   - Melhorar o tratamento de erros do toast.
   - Melhorar o tratamento de erros do Typescript onde estão adicionado o: // @ts-ignore
- **Funcionalidades Avançadas**:
   - Adicionar suporte a outras criptomoedas.

---

Esperamos que você aproveite o XPTOSHOP! Se tiver alguma dúvida ou sugestão, não hesite em entrar em contato.