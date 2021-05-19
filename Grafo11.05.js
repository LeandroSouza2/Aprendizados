//precisa utilizar em conjunto as classes Dictionary e Queue (fila)
function Dictionary() {
    var items = {}

    this.set = function(key, value) {
        items[key] = value
    }

    this.delete = function(key) {
        if(this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }

    this.has = function(key) {
        return items.hasOwnProperty(key)
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined
    }

    this.clear = function() {
        items = {}
    }

    this.size = function() {
        return Object.keys(items).length
    }

    this.keys = function() {
        return Object.keys(items)
    }

    this.values = function() {
        var values = [],
        keys = Object.keys(items)

        for(var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.getItems = function() {
        return items
    }
}

function Queue() {
    var items = []

    this.enqueue = function(element) {
        items.push(element)
    }

    this.dequeue = function() {
        return items.shift()
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

function Graph() {
    var vertices = [] //vetor que armazena os vertices
    var adjList = new Dictionary() //Dicionário que armazena a lista de adjacencias (Dicionário armazena tuplas - Chave x Valor)

    this.addVertex = function(v) { //Esta função adiciona vértices(São as bolinhas); (Parametro A,B,C)
        vertices.push(v) // =[] ---> [A,B,C]
        adjList.set(v, []) //C, []
    }

    this.addEdge = function(v, w) { //Esta função adiciona Arestas (São as retas que ligam as bolinhas);
        adjList.get(v).push(w) 
        adjList.get(w).push(v) 
    }

    this.toString = function() {
        var s = ''
        for(var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> '
            var neighbors = adjList.get(vertices[i])
            for(var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' '
            }
            s += '\n'
        }
        return s
    }

    var initializeColor = function() { //Pinta todos os vertices de branco (vcs ainda vao entender pq)
        var color = []
        for(var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white'
        }
        return color
    }

    this.bfs = function(v, callback) { 
        var color = initializeColor(), //pinta tudo de branco
        queue = new Queue(); //cria uma fila
        queue.enqueue(v) //pega o primeiro elemento e começa a brincadeira

        while(!queue.isEmpty()) { //B,C,D
            var u = queue.dequeue(), //U->A
            neighbors = adjList.get(u) //pegar os vizinhos de A -> B,C,D
            color[u] = 'grey' //A é pintado de cinza.
            for(var i = 0; i < neighbors.length; i++) { //Percorrer o vetor de vizinhos  ->,D
                var w = neighbors[i]
                if(color[w] === 'white') {
                    color[w] = 'grey'
                    queue.enqueue(w) 
                }
            }
            color[u] = 'black'
            callback(u)
        }
    }

    this.dfs = function(callback) {
        var color = initializeColor()
        for(var i = 0; i < vertices.length; i++) {
            if(color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback)
            }
        }
    }

    var dfsVisit = function(u, color, callback) {
        color[u] = 'grey'
        callback(u)

        var neighbors = adjList.get(u)
        for(var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i]
            if(color[w] === 'white') {
                dfsVisit(w, color, callback)
            }
        }
        color[u] = 'black'
    }
}

function printNode(value) {
    console.log('Visited vertex: ' + value)
}



//TESTANDO O CODIGO:

var graph = new Graph()

var myVertices = ['A','B','C','D','E','F','G','H','I']
for(var i = 0; i < myVertices.length; i++){
    graph.addVertex(myVertices[i])
}

graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
graph.addEdge('C','D')
graph.addEdge('C','G')
graph.addEdge('D','G')
graph.addEdge('D','H')
graph.addEdge('B','E')
graph.addEdge('B','F')
graph.addEdge('E','I')

console.log(graph.toString())

graph.bfs(myVertices[0],graph.printNode)