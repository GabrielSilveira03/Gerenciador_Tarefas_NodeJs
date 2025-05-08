const readline = require('readline');
const { adicionarTarefa, listarTarefas, deletarTarefa, alterarStatusTarefa, pesquisarTarefas } = require('./modules/tarefasService');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menuGeral() {
    console.log('\nGerenciador de Tarefas');
    console.log('1 - Adicionar Tarefa');
    console.log('2 - Listar Tarefas');
    console.log('3 - Deletar Tarefa');
    console.log('4 - Alterar Status Tarefa');
    console.log('5 - Pesquisar Tarefa por Palavra');
    console.log('0 - Sair\n');

    rl.question('Escolha uma opção: ', (option) => {
        switch (option) {
            case '1':
                rl.question('Digite o nome da tarefa que deseja cadastrar: ', (nome) => {
                    rl.question('Digite a descrição da tarefa: ', (descricao) => {
                        rl.question('Digite o prazo esperado(em dias) para a Tarefa: ', (prazo) => {
                            console.clear();
                            adicionarTarefa(nome,descricao, prazo);
                            setTimeout(() => {
                                menuGeral();
                            }, 1000);
                        });
                    });
                });
                break;
            case '2':
                console.clear();
                listarTarefas();
                setTimeout(() => {
                    menuGeral();
                }, 1000);
                break;
            case '3':
                rl.question('Digite o ID da tarefa que deseja deletar: ', (id) => {
                    console.clear();
                    deletarTarefa(id);
                    setTimeout(() => {
                        menuGeral();
                    }, 1000);
                });
                break;
            case '4': 
                rl.question('Digite o ID da tarefa que deseja alterar o status: ', (id) => {
                    rl.question('Digite o Status(Pendente, Em Andamento ou Concluída) que deseja atribuir para a Tarefa: ', (novoStatus) => {
                        console.clear();
                        alterarStatusTarefa(id, novoStatus);
                        setTimeout(() => {
                            menuGeral();
                        }, 1000);
                    });
                });
                break;
            case '5':
                rl.question('Digite uma palavra para buscar: ', (termo) => {
                    pesquisarTarefas(termo);
                    setTimeout(() => {
                        menuGeral();
                    }, 1000);
                });
                break;
            case '0':
                console.log('Saindo...');
                rl.close();
                break;
            default:
                console.clear();
                console.log('Opção inválida.');
                setTimeout(() => {
                    menuGeral();
                }, 1000);
        }
    });
};

menuGeral();