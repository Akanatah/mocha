// Criei uma simples class TaskManager
class TaskManager {
    // Utilizei um constructor para informar que task é igual a um array
    constructor() {
        this.tasks = []
    }

    // Criei uma nova function com o parametro "task", fazendo um push para adicionar usando o mesmo parametro
    addTask(task) {
        this.tasks.push(task)
        return task
    }

    // Apenas foi feito a busca das tarefas criadas de forma mais facil para está aplicação, com uma function onde retorna o "tasks"
    getTasks() {
        return this.tasks
    }
}

// Exportando a Class criada para poder usar no arquivo "test/test.js"
module.exports = TaskManager