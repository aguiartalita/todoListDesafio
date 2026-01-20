# React + TypeScript + Vite

Este projeto utiliza React com TypeScript e Vite, oferecendo uma configuração moderna com Hot Module Replacement (HMR) e regras básicas de ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) — utiliza Babel para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) — utiliza SWC para Fast Refresh

---

## 📌 Desenvolvimento do Desafio – Prática de Conhecimento

Este projeto faz parte de um **desafio prático de desenvolvimento Front-End**, com o objetivo de consolidar conhecimentos em **React, TypeScript, componentização, gerenciamento de estado e UX**.

A aplicação consiste em uma **lista de tarefas interativa**, permitindo ao usuário:

- Adicionar novas tarefas
- Visualizar tarefas cadastradas
- Marcar e desmarcar tarefas como concluídas
- Excluir tarefas individualmente
- Visualizar data e hora de conclusão das tarefas
- Filtrar tarefas por status (todas, pendentes e concluídas)
- Acompanhar contadores de tarefas criadas e concluídas
- Manter as tarefas persistidas mesmo após recarregar a página

---

## 🛠️ Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS Modules
- Phosphor Icons
- localStorage

---

## 🚧 Status do desenvolvimento

### ✔️ Funcionalidades implementadas
- Criação de tarefas com input controlado
- Listagem dinâmica de tarefas
- Marcação e desmarcação de tarefas como concluídas
- Exclusão de tarefas
- Contadores reativos (criadas e concluídas)
- Persistência de dados via `localStorage`
- Exibição da data e hora de conclusão
- Filtro de tarefas por status:
  - Todas
  - Pendentes
  - Concluídas
- Filtros com UX aprimorada:
  - Ícones visuais
  - Seleção por radio buttons
  - Posicionados acima da listagem, centralizados
- Feedback visual de estados
- Tratamento de estado vazio
- Melhorias de acessibilidade (teclado e ARIA)
- Correção de contraste no input

### 🔜 Próximos passos (opcional)
- Versão Mobile
- Persistir filtro selecionado no `localStorage`
- Ordenação customizada por prioridade
- Botão para limpar tarefas concluídas
- Testes automatizados
- Deploy da aplicação

---

## 🎨 Referência visual

### Design proposto (Figma – Rocketseat)
![Design proposto](https://github.com/aguiartalita/todoListDesafio/assets/87323173/c2923265-269a-4b1c-a7b5-ef50c0c490b0)

### Implementação atual
<img width="1253" height="815" alt="image" src="https://github.com/user-attachments/assets/cb25782c-efc0-4eae-b469-ba2cdea88aa8" />

