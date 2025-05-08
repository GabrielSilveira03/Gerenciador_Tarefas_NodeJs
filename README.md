# 📋 Gerenciador de Tarefas - Node.js CLI

Este é um projeto simples de **Gerenciador de Tarefas** feito com **Node.js**, utilizando o terminal para interação com o usuário. Ele permite cadastrar, listar, excluir, alterar o status e pesquisar tarefas por palavras-chave.

---

## 🚀 Funcionalidades

- ✅ **Adicionar Tarefa**: Inclui nome, descrição e prazo em dias.
- 📋 **Listar Tarefas**: Exibe todas as tarefas salvas com detalhes.
- ❌ **Deletar Tarefa**: Remove uma tarefa com base no seu ID.
- 🔁 **Alterar Status**: Modifica o status da tarefa entre `Pendente`, `Em Andamento` e `Concluída`.
- 🔎 **Pesquisar Tarefa**: Filtra tarefas pelo nome, com base em qualquer palavra informada.
- 📦 **Persistência de Dados**: As tarefas são salvas em um arquivo `.json` na pasta `dados/`.

---

## 🛠 Estrutura do Projeto

📁 projeto/
├── dados/
│ └── tarefas.json # Armazena as tarefas em formato JSON
├── modules/
│ ├── manipuladorArq.js # Leitura e escrita de tarefas no arquivo
│ └── tarefasService.js # Lógica das funcionalidades
├── index.js # Interface de menu pelo terminal (CLI)

---

## 💡 Como Usar

### 1. Clone o repositório

```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale o Node.js (caso não tenha)
Download Node.js: https://nodejs.org

4. Execute o programa
```
node index.js
```
O menu interativo será exibido no terminal.

---

📌 Requisitos
Node.js (v14+ recomendado)

Terminal com suporte a readline (praticamente todos)

---

🧠 Conceitos Usados
Manipulação de arquivos com fs

Leitura e escrita de JSON

readline para interatividade

Organização modular de código em arquivos separados

---
 
📄 Exemplo de Uso

Gerenciador de Tarefas
1 - Adicionar Tarefa
2 - Listar Tarefas
3 - Deletar Tarefa
4 - Alterar Status Tarefa
5 - Pesquisar Tarefa por Palavra
0 - Sair

---

👨‍💻 Autor
Nome: Gabriel da Costa Silveira
Matrícula: 535676
Curso: Engenharia de Computação
Email: gabriel.costasilveira@alu.ufc.br

---


