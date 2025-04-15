# Avaliativa Memes

## Instruções de Instalação e Execução

1. Clone o repositório:
    ```bash
    git clone https://github.com/gabriela-fernanda14/avaliativa-memes.git
    cd atividade-avaliativaMemes
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o projeto:
    ```bash
    npm run dev
    ```

4. Acesse a aplicação:  
    Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

---

## Componentes

- **Header**: Recebe `navItems` como props para renderizar os itens de navegação.
- **Sidebar**: Recebe `upcomingEvents` como props para exibir eventos futuros e o componente EventCard.
- **EventCard**: Recebe `event` como props para exibir informações do evento (título, data, participantes).
- **Feed**: Recebe uma lista de memes como props para renderizar o feed.
- **MemeCard**: Recebe informações de um meme (imagem, título, interações) como props.
- **HeroSection**: Primeira sessão de destaque do projeto.
- **CategoriesSection**: Recebe categorias como props para exibição.
- **InteractionBar**: Recebe informações de interações (curtidas, comentários, compartilhamentos) como props.
- **Footer**: Exibe informações fixas sobre o projeto, links úteis e redes sociais.

---

## Decisões Tomadas

- A componentização foi planejada seguindo a estrutura do site, começando pelos componentes principais e, em seguida, dividindo-os em partes menores.  
- O uso de props foi adotado para tornar os componentes mais dinâmicos e reutilizáveis, o que facilita tanto a manutenção quanto a expansão do projeto.  
- A pasta de componentes foi organizada dentro de `src`, mas separada de `app`, para uma melhor organização do código.

---

```plaintext
atividade-avaliativaMemes/
├── public/                # Arquivos estáticos (imagens, ícones, etc.)
├── src/                   # Código-fonte do projeto
│   ├── app/               # Páginas principais e layout do projeto
│   │   ├── favicon.ico    # Ícone do site
│   │   ├── globals.css    # Estilos globais
│   │   ├── layout.jsx     # Layout principal do projeto
│   │   ├── page.jsx       # Página inicial
│   │   ├── page.module.css # Estilos da página inicial
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header/        # Componente Header
│   │   ├── Sidebar/       # Componente Sidebar
│   │   ├── EventCard/     # Componente EventCard
│   │   ├── FeedSection/   # Componente FeedSection
│   │   ├── MemeCard/      # Componente MemeCard
│   │   ├── HeroSection/   # Componente HeroSection
│   │   ├── NewsletterSection/ # Componente NewsletterSection
│   │   ├── CategoriesSection/ # Componente CategoriesSection
│   │   ├── InteractionBar/    # Componente InteractionBar
│   │   ├── FeaturedSection/   # Componente FeaturedSection
│   │   ├── CreatorCard/       # Componente CreatorCard
│   │   └── Footer/            # Componente Footer
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── package-lock.json      # Versões exatas das dependências instaladas
├── package.json           # Dependências e scripts do projeto
├── README.md              # Documentação do projeto
```

---

## Desafios Enfrentados e Soluções Aplicadas

- **Desafio**: Compreender e implementar a estrutura de componentes com props de forma eficiente, principalmente o da Header, onde um item do array precisava ter um style diferente.  
  **Solução**: Utilizei Exemplos de projetos similares como referência e o Github Copilot (especificamente para o desafio citado).
