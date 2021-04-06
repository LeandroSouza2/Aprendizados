// se mudar o put. tera de mudar o remove, o get o print
function HashTable() {
    var table = [] //qual posicao do vetor eu vou inserir aquele elemento.
    // var table = [][]  dessa forma vai alocar 100 itens (A segunda parte da matriz, não pode ser um vetor fixo)
// podemos utilizar matriz para solucionar o caso.
    var ValuePair = function(key, value) {
        this.key = key
        this.value = value //só pode receber 1 cara por vez --> [astolfo,Livia]
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function(key, value) { // se transformar em matriz, dentro dessa function tera um if, antes da insercao
        var position = loseloseHashCode(key)
        console.log(position + ' ' + key)
        // if se o lugar onde estou inserindo esta vazio, inserir
        // else andar na posicao ate acahr um elemtno vazio e inserir
        table[position] = value // vet[1] = 1
        // vet [1] [] 
    }

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined //remove com base na chave;
    }

    this.get = function(key) {
        return table[loseloseHashCode(key)] //usar a função de hashing para achar o valor e retornar;
    }

    var loseloseHashCode = function(key) { //Função de hashing fraca baseada em caracteres ASCCI
        var hash = 0
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) 
        }
        return hash % 37

        //LE -> (76+69)/37 e pega o resto
    }

    this.print = function() {
        for(var i = 0; i < table.length; i++) {
            if(table[i] !== undefined) {
                console.log(i + ' : ' + table[i])
            }
        }
    }

    this.size = function() { //imprime o tamanho da vetor -> table.length
        return table.length
    }
}


var hashtable  = new HashTable()

hashtable.put("leandro","leandro.borges@me.com")
hashtable.put("astolfo","astolfo@uol.com.br")
hashtable.put("Livia","livia@uol.com.br")
hashtable.put("Leandro","leandro.borges@me.com")



hashtable.print();




// splice serve para retirar um elemento de acordo com o parametor informado
// pop serve para remover o ultimo elemento de alguma coisa.


