const fs = require('fs');
const path = require('path');

const pasta = path.join(__dirname, '..', 'dados');
const caminho = path.join(pasta, 'tarefas.json');

function lerTarefas() {
    if (!fs.existsSync(pasta)) {
        fs.mkdirSync(pasta); 
    }

    if (!fs.existsSync(caminho)) {
        fs.writeFileSync(caminho, '[]');
    }

    const dados = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(dados);
}

function escreverTarefas(tarefas) {
    fs.writeFileSync(caminho, JSON.stringify(tarefas, null, 2));
}

module.exports = { lerTarefas, escreverTarefas };