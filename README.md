# 🌤️ Weather App - Clima Hoje

Uma aplicação web moderna e responsiva para consulta de informações meteorológicas, desenvolvida com React, TypeScript e Tailwind CSS.

## 📋 Descrição

O **Weather App** é uma aplicação de previsão do tempo que oferece uma interface intuitiva e elegante para visualizar informações meteorológicas. O projeto apresenta:

- **Interface moderna**: Design clean e responsivo com gradientes e componentes bem estruturados
- **Informações detalhadas**: Exibe temperatura atual, previsão por horário, previsão semanal e detalhes meteorológicos
- **Componentes reutilizáveis**: Arquitetura baseada em componentes com shadcn/ui
- **Experiência visual rica**: Ícones SVG personalizados para diferentes condições climáticas
- **Busca por cidades**: Campo de pesquisa para localizar diferentes localidades

### Funcionalidades Principais

- 🌡️ **Temperatura atual** com sensação térmica
- ⏰ **Previsão por horário** (6h às 21h)
- 📅 **Previsão semanal** (7 dias)
- 🌧️ **Detalhes meteorológicos**: Chance de chuva, velocidade do vento, índice UV
- 🔍 **Busca por cidades** (interface preparada)
- 📱 **Design responsivo** para diferentes dispositivos

## 🛠️ Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Git** (para clonagem do repositório)

### Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript 5.8.3** - Superset tipado do JavaScript
- **Vite 6.3.5** - Build tool e dev server
- **Tailwind CSS 4.1.8** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes
- **Lucide React** - Ícones modernos
- **React Icons** - Biblioteca adicional de ícones

## 🚀 Instalação

Siga os passos abaixo para configurar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/weather-app.git
cd weather-app
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

### 4. Acesse a aplicação

Abra seu navegador e acesse: `http://localhost:5173`

## 💻 Uso

### Comandos Disponíveis

```bash
# Executar em modo de desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Visualizar build de produção
npm run preview

# Executar linting
npm run lint
```

### Estrutura do Projeto

```
weather-app/
├── public/                 # Assets estáticos (ícones SVG)
│   ├── clouds.svg
│   ├── sun.svg
│   ├── rain.svg
│   └── ...
├── src/
│   ├── components/
│   │   └── ui/            # Componentes UI reutilizáveis
│   │       ├── input.tsx
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts       # Utilitários (cn function)
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada
│   └── index.css          # Estilos globais
├── package.json
└── README.md
```

### Personalização

Para personalizar a aplicação:

1. **Adicionar novas cidades**: Modifique os dados mockados no `App.tsx`
2. **Alterar ícones**: Substitua os arquivos SVG na pasta `public/`
3. **Modificar estilos**: Ajuste as classes Tailwind nos componentes
4. **Integrar API**: Implemente chamadas para APIs de clima reais

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir com o projeto:

### Como Contribuir

1. **Fork** o projeto
2. **Clone** seu fork localmente
3. **Crie uma branch** para sua feature (`git checkout -b feature/nova-funcionalidade`)
4. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
5. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
6. **Abra um Pull Request**

### Diretrizes

- Mantenha o código limpo e bem documentado
- Siga os padrões de código existentes
- Teste suas alterações antes de enviar
- Descreva claramente as mudanças no PR

### Reportar Bugs

Para reportar bugs, abra uma **Issue** incluindo:

- Descrição detalhada do problema
- Passos para reproduzir
- Screenshots (se aplicável)
- Informações do ambiente (OS, navegador, versão do Node.js)

### Sugerir Melhorias

Para sugerir melhorias:

- Abra uma **Issue** com a tag `enhancement`
- Descreva a funcionalidade desejada
- Explique o benefício para os usuários

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### Resumo da Licença MIT

- ✅ Uso comercial permitido
- ✅ Modificação permitida
- ✅ Distribuição permitida
- ✅ Uso privado permitido
- ❌ Sem garantia
- ❌ Sem responsabilidade do autor

## 📞 Contato

Para dúvidas, sugestões ou colaborações:

- **Email**: [victormts.s1@gmail.com](mailto:victormts.s1@gmail.com)
- **GitHub**: [@SoulHiro](https://github.com/SoulHiro)
- **LinkedIn**: [Victor M.](https://linkedin.com/in/victormts)

---

<div align="center">

**Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS**

[⬆ Voltar ao topo](#-weather-app---clima-hoje)

</div>
