const { lerTarefas, escreverTarefas } = require('./manipuladorArq');

const statusValidos = ['Pendente', 'Em Andamento', 'Concluída'];

function adicionarTarefa(nome,descricao, prazo) {
    const tarefas = lerTarefas();
    const novaTarefa = {
        id: Date.now(),
        dataCriacao: new Date().toLocaleString('pt-BR'),
        status: 'Pendente',
        nome,
        descricao,
        prazo
    };
    tarefas.push(novaTarefa);
    escreverTarefas(tarefas);
    console.log(`Tarefa '${novaTarefa.nome}' com descrição: '${novaTarefa.descricao}' e id: ${novaTarefa.id}\nTarefa criada às ${novaTarefa.dataCriacao} com sucesso!\nStatus: ${novaTarefa.status} - Prazo esperado para Tarefa: ${novaTarefa.prazo}`);
}

function listarTarefas() {
    const tarefas = lerTarefas();
    if(tarefas.length === 0) return console.log("Nenhuma tarefa encontrada! \n");
    console.log("Tarefas:");
    tarefas.forEach((tarefas, i) => {
        console.log(`${i + 1}. id: ${tarefas.id} - ${tarefas.nome} - Criada em:${tarefas.dataCriacao}\nDescrição: ${tarefas.descricao} - Status: ${tarefas.status}\n`);
    });
}

function deletarTarefa(id) {
    let tarefas = lerTarefas();
    const tamIni = tarefas.length;
    tarefas = tarefas.filter(tarefas => tarefas.id !== parseInt(id));
    if(tarefas.length === tamIni) {
        console.log("Tarefa não encontrada! \n");
    } else {
        escreverTarefas(tarefas);
        console.log("Tarefa removida com sucesso! \n");
    }
}

function alterarStatusTarefa(id, novoStatus) {
    const tarefas = lerTarefas();
    const tarefa = tarefas.find(tarefa => tarefa.id === parseInt(id));
    
    if (tarefa) {
        if (statusValidos.includes(novoStatus)) {
            tarefa.status = novoStatus;
            escreverTarefas(tarefas);
            console.log(`Status da tarefa com id: ${id} alterado para '${novoStatus}'`);
        } else {
            console.log("Status inválido. Os status válidos são: 'Pendente', 'Em Andamento', 'Concluída'.");
        }
    } else {
        console.log("Tarefa não encontrada!");
    }
}

function pesquisarTarefas(termo) {
    const tarefas = lerTarefas();
    const termoLower = termo.toLowerCase();

    const tarefasEncontradas = tarefas.filter(tarefa =>
        tarefa.nome.toLowerCase().includes(termoLower)
    );

    if (tarefasEncontradas.length === 0) {
        console.log(`Nenhuma tarefa encontrada contendo: "${termo}"`);
    } else {
        console.log(`Tarefas encontradas contendo "${termo}":`);
        tarefasEncontradas.forEach((tarefa, i) => {
            console.log(`${i + 1}. [${tarefa.id}] ${tarefa.nome} - Status: ${tarefa.status}`);
        });
    }
}

module.exports = { adicionarTarefa, listarTarefas, deletarTarefa, alterarStatusTarefa, pesquisarTarefas };