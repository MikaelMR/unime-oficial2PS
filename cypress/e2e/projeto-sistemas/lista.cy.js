describe("Testando site TODO List da Oficial 2 de Projeto de Sistemas", () => {

    beforeEach(() => {
        cy.visit("https://phpauloreis.github.io/todo-list-alpine-js/")
    })
    
    it("Deve criar tarefa nomeada 1", () => {
        cy.get('#todo_title').type("tarefa exemplo a")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("include.text", "tarefa exemplo a")
    })
    it("Deve criar tarefa nomeada 2", () => {
        cy.get('#todo_title').type("tarefa exemplo a{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "tarefa exemplo a")
    })

    it("Deve criar tarefa não nomeada 1", () => {
        const alerta = cy.stub()
        cy.on('window:alert', alerta)
        cy.get('.bg-white > .col-auto > .btn').click().then(() => {
            expect(alerta.getCall(0)).to.be.calledWith("Digite um título para a tarefa!")
        })
    })
    it("Deve criar tarefa não nomeada 2", () => {
        const alerta = cy.stub()
        cy.on('window:alert', alerta)
        cy.get('#todo_title').click().type("{enter}").then(() => {
            expect(alerta.getCall(0)).to.be.calledWith("Digite um título para a tarefa!")
        })
    })

    it("Deve criar tarefa com nome repetido 1", () => {
        cy.get('#todo_title').type("tarefa exemplo duplo")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('#todo_title').type("tarefa exemplo duplo")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("include.text", "tarefa exemplo duplo")
    })
    it("Deve criar tarefa com nome repetido 2", () => {
        cy.get('#todo_title').type("tarefa exemplo duplo{enter}")
        cy.get('#todo_title').type("tarefa exemplo duplo{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "tarefa exemplo duplo")
    })

    it("Deve criar tarefa com nome de um dígito 1", () => {
        cy.get('#todo_title').type("a")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("include.text", "a")
    })
    it("Deve criar tarefa com nome de um dígito 2", () => {
        cy.get('#todo_title').type("a{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "a")
    })

    it("Deve criar tarefa com título de texto 1", () => {
        cy.get('#todo_title').type("cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("include.text", "cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
    })
    it("Deve criar tarefa com título de texto 2", () => {
        cy.get('#todo_title').type("eethvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvt{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "eethvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvt")

    })
    it("Deve criar tarefa com título de texto 3", () => {
        cy.get('#todo_title').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere sagittis commodo. Donec eget pulvinar neque, ut commodo metus. Suspendisse ac dui justo. Integer facilisis erat a tincidunt pharetra. Quisque viverra turpis vitae risus dapibus pulvinar. Praesent sit amet iaculis nisl. Nam eu libero vitae augue tincidunt dapibus in a nulla. Etiam a cursus velit, at facilisis arcu. Aenean interdum tincidunt lectus, eu rhoncus sem scelerisque a. In lobortis lacus eget malesuada ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("include.text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere sagittis commodo. Donec eget pulvinar neque, ut commodo metus. Suspendisse ac dui justo. Integer facilisis erat a tincidunt pharetra. Quisque viverra turpis vitae risus dapibus pulvinar. Praesent sit amet iaculis nisl. Nam eu libero vitae augue tincidunt dapibus in a nulla. Etiam a cursus velit, at facilisis arcu. Aenean interdum tincidunt lectus, eu rhoncus sem scelerisque a. In lobortis lacus eget malesuada ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae")
    })
    it("Deve criar tarefa com título de texto 4", () => {
        cy.get('#todo_title').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere sagittis commodo. Donec eget pulvinar neque, ut commodo metus. Suspendisse ac dui justo. Integer facilisis erat a tincidunt pharetra. Quisque viverra turpis vitae risus dapibus pulvinar. Praesent sit amet iaculis nisl. Nam eu libero vitae augue tincidunt dapibus in a nulla. Etiam a cursus velit, at facilisis arcu. Aenean interdum tincidunt lectus, eu rhoncus sem scelerisque a. In lobortis lacus eget malesuada ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere sagittis commodo. Donec eget pulvinar neque, ut commodo metus. Suspendisse ac dui justo. Integer facilisis erat a tincidunt pharetra. Quisque viverra turpis vitae risus dapibus pulvinar. Praesent sit amet iaculis nisl. Nam eu libero vitae augue tincidunt dapibus in a nulla. Etiam a cursus velit, at facilisis arcu. Aenean interdum tincidunt lectus, eu rhoncus sem scelerisque a. In lobortis lacus eget malesuada ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae")
    })

    it("Deve criar tarefa com nome de caracteres especiais 1", () => {
        cy.get('#todo_title').type("☺☻♣○♪§▬♥♠ü")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("include.text", "☺☻♣○♪§▬♥♠ü")
    })
    it("Deve criar tarefa com nome de caracteres especiais 2", () => {
        cy.get('#todo_title').type("☺☻♣○♪§▬♥♠ü{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "☺☻♣○♪§▬♥♠ü")
    })

    it("Deve criar tarefa com nome de números 1", () => {
        cy.get('#todo_title').type("12345")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("include.text", "12345")
    })
    it("Deve criar tarefa com nome de números 2", () => {
        cy.get('#todo_title').type("12345{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "12345")
    })

    it("Deve concluir tarefa", () => {
        cy.get('#todo_title').type("exemplo caixa 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo caixa 1")
        cy.get('.form-check-input').click().should("be.checked")
    })
    it("Deve desfazer conclusão de tarefa", () => {
        cy.get('#todo_title').type("exemplo caixa 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo caixa 1")
        cy.get('.form-check-input').click().should("be.checked")
        cy.get('.form-check-input').click().should("not.be.checked")
    })

    it("Deve filtrar tarefas 1", () => {
        cy.get('#todo_title').type("exemplo filtro 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo filtro 1")
        cy.get('.form-check-input').click().should("be.checked")
        cy.get('#todo_title').type("exemplo filtro 2{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo filtro 2")
        cy.get('.pt-3 > .col-auto > .btn').select("incomplete").invoke("val").should("eq", "incomplete")
    })
    it("Deve filtrar tarefas 2", () => {
        cy.get('#todo_title').type("exemplo filtro 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo filtro 1")
        cy.get('.form-check-input').click().should("be.checked")
        cy.get('#todo_title').type("exemplo filtro 2{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo filtro 2")
        cy.get('.pt-3 > .col-auto > .btn').select("complete").invoke("val").should("eq", "complete")
    })
    it("Deve filtrar tarefas 3", () => {
        cy.get('#todo_title').type("exemplo filtro 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo filtro 1")
        cy.get('.form-check-input').click().should("be.checked")
        cy.get('#todo_title').type("exemplo filtro 2{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo filtro 2")
        cy.get('.pt-3 > .col-auto > .btn').select("incomplete").invoke("val").should("eq", "incomplete")
        cy.get('.pt-3 > .col-auto > .btn').select("all").invoke("val").should("eq", "all")
        cy.get('.pt-3 > .col-auto > .btn').select("complete").invoke("val").should("eq", "complete")
        cy.get('.pt-3 > .col-auto > .btn').select("all").invoke("val").should("eq", "all")
    })

    it("Deve filtrar tarefas com caixa de seleção 1", () => {
        cy.get('#todo_title').type("exemplo filtro 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo filtro 1")
        cy.get('.form-check-input').click().should("be.checked")
        cy.get('#todo_title').type("exemplo filtro 2{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo filtro 2")
        cy.get('.pt-3 > .col-auto > .btn').select("incomplete").invoke("val").should("eq", "incomplete")
        cy.get('.form-check-input').click()
        cy.get('[x-text="todo.task"]').should("not.exist")
    })
    it("Deve filtrar tarefas com caixa de seleção 2", () => {
        cy.get('#todo_title').type("exemplo filtro 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo filtro 1")
        cy.get('.form-check-input').click().should("be.checked")
        cy.get('#todo_title').type("exemplo filtro 2{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo filtro 2")
        cy.get('.pt-3 > .col-auto > .btn').select("complete").invoke("val").should("eq", "complete")
        cy.get('.form-check-input').click()
        cy.get('[x-text="todo.task"]').should("not.exist")
    })

    it("Deve excluir tarefa 1", () => {
        cy.get('#todo_title').type("exemplo excluir 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo excluir 1")
        cy.get('.text-end > .btn').click()
        cy.on('window:confirm', (alerta) => {
            expect(alerta).to.contains("Tem certeza que deseja remover?")
        })
        cy.get('[x-text="todo.task"]').should("not.exist")
    })
    it("Deve excluir tarefa 2", () => {
        cy.get('#todo_title').type("exemplo excluir 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo excluir 1")
        cy.get('.form-check-input').click().should("be.checked")
        cy.get('.text-end > .btn').click()
        cy.on('window:confirm', (alerta) => {
            expect(alerta).to.contains("Tem certeza que deseja remover?")
        })
        cy.get('[x-text="todo.task"]').should("not.exist")
    })

    it("Deve cancelar tarefa de ser excluída 1", () => {
        cy.get('#todo_title').type("exemplo cancelExcluir 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo cancelExcluir 1")
        cy.get('.text-end > .btn').click()
        cy.on('window:confirm', (alerta) => {
            return false;
        })
        cy.get('[x-text="todo.task"]').should("exist")
    })
    it("Deve cancelar tarefa de ser excluída 2", () => {
        cy.get('#todo_title').type("exemplo cancelExcluir 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo cancelExcluir 1")
        cy.get('.form-check-input').click().should("be.checked")
        cy.get('.text-end > .btn').click()
        cy.on('window:confirm', (alerta) => {
            return false;
        })
        cy.get('[x-text="todo.task"]').should("exist")
    })

    it("Deve verificar quantidade de tarefas cadastradas 1", () => {
        cy.get('.mb-3').should("include.text", "0")
        cy.get('#todo_title').type("exemplo quantTarefas 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo quantTarefas 1")
        cy.get('.mb-3').should("include.text", "1")
    })
    it("Deve verificar quantidade de tarefas cadastradas 2", () => {
        cy.get('.mb-3').should("include.text", "0")
        cy.get('#todo_title').type("exemplo quantTarefas 1{enter}")
        cy.get('[x-text="todo.task"]').should("include.text", "exemplo quantTarefas 1")
        cy.get('.mb-3').should("include.text", "1")
        cy.get('.text-end > .btn').click()
        cy.on('window:confirm', (alerta) => {
            expect(alerta).to.contains("Tem certeza que deseja remover?")
        })
        cy.get('[x-text="todo.task"]').should("not.exist")
        cy.get('.mb-3').should("include.text", "0")
    })
})

// Mikael Ramos
// Projeto de Sistemas
