function HashTable() {
    var table = [] // Qual posição do vetor vou inserir aquele elemento.
    // No trabalho, esse vetor sera uma lista encadeada

    var ValuePair = function(key, value) {
        this.key = key
        this.value = value // só pode receber 1 cara por vez --> [astolfo,livia]
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key)
        console.log(position + ' ' + key)
        table[position] = value // transformar esse table em uma lista encadeada, substituindo table pelas funções da LinkedList.
    }

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined // remove com base na chave;
    }

    this.get = function(key) {
        return table[loseloseHashCode(key)] // usar a função de hashing para achar o valor e retornar;
    }

    // algoritimo de hash.

    var loseloseHashCode = function(key) { // Função de nashng fraca baseada em caracteres ASCII
        var hash = 0
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37

        // LE -> 
    }

    this.print = function() { // pego o table.length (tamanho da tabela) e vai imprimindo os itens
        for(var i = 0; i < table.length; i++) {
            if(table[i] !== undefined) {
                console.log(i + ' : ' + table[i])
            }
        }
    }

    this.size = function() { // impreme o tamanho do vetor -> usando table.length
        return table.length
    }
}

var hashtable  = new HashTable()

hashtable.put("leandro")
hashtable.put("astolfo")
hashtable.put("Livia")

hashtable.print();
//a