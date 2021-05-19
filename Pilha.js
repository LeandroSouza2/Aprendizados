function pilha() {
    var items = []

    this.empilha = function(element) {
        items.push(element)
    }

    this.desempilha = function() {
        return items.pop()
    }

    this.front = function() {
        return items[0]
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.size = function() {
        return items.length
    }

    this.print = function() {
        console.log(items.toString())
    }
}

var pilha  = new Queue()

pilha.enqueue(1)
pilha.enqueue(2)
pilha.enqueue(3)

pilha.print()

pilha.desempilha()

pilha.print()

pilha.desempilha()

console.log(pilha.front())
console.log(pilha.size())
console.log(pilha.isEmpty())
//a