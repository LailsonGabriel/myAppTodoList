# Meu Projeto React Native com Expo

Bem-vindo ao projeto "To-Do List" desenvolvido com React Native e Expo! Este aplicativo é uma lista de tarefas simples que permite aos usuários adicionar, visualizar e gerenciar suas tarefas diárias. 

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Comandos para Executar](#comandos-para-executar)
  - [Rodar o Expo](#rodar-o-expo)
  - [Rodar diretamente no Android](#rodar-diretamente-no-android)
  - [Rodar diretamente no iOS](#rodar-diretamente-no-ios)
  - [Rodar Testes](#rodar-testes)
- [Estrutura de Pastas](#estrutura-de-pastas)

## 🛠️ Sobre o Projeto

Este é um projeto React Native utilizando Expo, projetado para oferecer uma experiência de desenvolvimento eficiente e simplificada. O projeto inclui funcionalidades de autenticação, visualizações e uma arquitetura organizada para facilitar a manutenção e o escalonamento.

## 🚀 Comandos para Executar

### Rodar o Expo

Para iniciar o servidor Expo e abrir o aplicativo no seu dispositivo ou emulador, use:

```bash
yarn start
# ou
npm run start

### Rodar o Expo no Android

Para iniciar o servidor Expo e abrir o aplicativo no seu dispositivo ou emulador, use:

yarn android
# ou
npm run android

### Testes

Para executar os testes do projeto, use:

yarn test
# ou
npm run test
```

## 📁 Estrutura de Pastas
A estrutura do projeto está organizada da seguinte forma:

```bash
src/
│
├── __tests__/               # Testes do projeto
│
├── app/                     # Código principal do aplicativo
│   ├── components/          # Componentes reutilizáveis
│   ├── context/             # Contexto para gerenciamento de estado
│   ├── models/              # Modelos de dados
│   ├── repositories/        # Repositórios de dados
│   ├── service/             # Serviços de aplicação
│   ├── styles/              # Estilos globais
│   ├── theme/               # Temas do aplicativo
│   ├── viewmodel/           # ViewModels para gerenciamento de estado
│   ├── __layout.tsx         # Layout global do aplicativo
│   ├── home.tsx             # Tela inicial
│   ├── login.tsx            # Tela de login
│   └── index.tsx            # Ponto de entrada do aplicativo
```

## 📚 Pricipais bibliotecas utilizadas no projeto
Aqui estão as principais bibliotecas utilizadas neste projeto e suas funcionalidades:

@react-native-async-storage/async-storage (1.23.1): Fornece uma maneira simples e eficiente de armazenar dados no dispositivo do usuário de forma persistente.

axios (^1.7.3): Cliente HTTP baseado em Promises para fazer solicitações de rede. É usado para interagir com APIs e obter dados.

expo (~51.0.26): Um conjunto de ferramentas e serviços para ajudar a criar aplicativos React Native mais rapidamente e com menos configuração.

expo-constants (~16.0.2): Fornece informações sobre o ambiente do dispositivo e as configurações do aplicativo, como o nome do aplicativo e a versão.

expo-linking (~6.3.1): Permite lidar com links e URLs, facilitando a navegação entre diferentes partes do aplicativo e a integração com outros aplicativos.

expo-router (~3.5.21): Biblioteca para roteamento e navegação no aplicativo Expo, facilitando a gestão das rotas e a navegação entre telas.

styled-components (^6.1.12): Permite a criação de componentes estilizados com CSS-in-JS, oferecendo uma abordagem mais modular e reutilizável para estilização.

## 🤝 Contribuindo
Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Abra uma issue ou um pull request para começar!


