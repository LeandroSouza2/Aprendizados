function LinkedList() {
    var Node = function(element) {
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element) { //adiciona um novo elemento
        var node = new Node(element), // cria um novo objeto do tipo nó
        current 

        if(head === null) { //se a cabeça for nula
            head = node // cabeça recebe novo no criado
        } else { //senao
            current = head //inicia-se uma busca pelo ultimo elemento

            while(current.next) {
                current = current.next
            }

            current.next = node //ultimo elemento recebe o novo no criado
        }
        length++
    }

    this.insert = function(position, element) { //passo posição e o elemento
        if(position >= 0 && position <= length) { //checa se a posição é valida
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position === 0) { //verifica se a posição é 0
                node.next = current //incluindo na cabeça
                head = node //dicloco a lista para direita e insiro um elemento na cabeça
            } else {
                while(index++ < position) { //anda dentro da lisa até encontrar o elemento a ser incluido
                    previous = current
                    current = current.next
                }
                node.next = current //inserção do elemento no meio da lista
                previous.next = node
            }
            length++ //como ele inseriu ele incrementa o comprimento da lista encadeada
            return true
        } else {
            return false
        }
    }

    this.removeAt = function(position) {
        if(position > - 1 && position < length) { //checa se a posição é valida
            var current = head, //declara uma variaval e fala que o no atual é cabeça
            previous,
            index = 0

            if(position === 0) {
                head = current.next //cabeça recebe o elemento atual.next
            } else {
                while(index++ < position) { //anda dentro da lisa até encontrar o elemento a ser removido
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length-- //como eu removi um no ele tem que decrescero tamanho do "vetor"
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element) { // remove um elemento
        var index = this.indexOf(element) //precisa achar a posição do elemento a ser removido
        return this.removeAt(index)
    }

    this.indexOf = function(element) { //Busca onde o elemento está
        var current = head, // declara o elemento inicial da busca como sendo a cabeça
        index = 0 // declara index como 0

        while(current) { //enquanto nó atual ...
            if(element === current.element) { //elemento que é o cara que eu passei como paramertro é igual ao elemento do nó atual?
                return index // se for eu retorno a variavel index
            }
            index++ // Index é incrementada
            current = current.next // Ando para o próximo nó.
        }
        return - 1
    }

    this.isEmpty = function() {
        return length === 0 //verficica se o length é = 0
    }

    this.size = function() {
        return length //retorna o valor de length (tamanho da lista encadeada)
    }

    this.getHead = function() {
        return head //retorna a cabeca da lista encadeada
    }

    this.toString = function() {
        var current = head,
        string = ''

        while(current) {
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function() {
        console.log(this.toString())
    }
}

var lista = new LinkedList();

//objeto pedaço memoria ->


lista.append("1");  //[1 | endereço de um objeto que é o objeto 2] -> nó
lista.append("2");  //[2 | endereço de um objeto que é o objeto 2] -> nó 
lista.append("2"); 
lista.append("2"); 
lista.append("3"); //-->linked object -- garbage collector que vai remover ele da memoria.
lista.append("6"); 
lista.append("1");



lista.print();

lista.remove("3")

lista.print();
