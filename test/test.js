
// Aqui eu dou nome para o que foi feito uma busca, assim tendo como usar o "assert" e o "TaskManager", arquivo com o simples sistema para teste
const assert = require('assert')
const TaskManager = require('../taskManager')


//  Agrupa conjunto de testes
describe('TaskManager', function() {
    // Definindo um caso de teste especifico
    it('Deveria adicionar uma nova tarefa', function() {
        const manager = new TaskManager()
        const task = { title: 'estudar mocha', completed: false }
        
        manager.addTask(task)
        const tasks = manager.getTasks()

        // Aqui está verificando se os valores passados são iguais
        assert.strictEqual(tasks.length, 1)
        assert.strictEqual(tasks[0].title, 'estudar mocha')
    })
})