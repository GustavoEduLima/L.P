class ContaBancaria {
    #saldo = 0;

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return true;
        } else {
            console.log("Saldo insuficiente.");
            return false;
        }
    }

    getSaldo() {
        return this.#saldo;
    }
    
    
} 
    

    // #saldo = 0;
  
    // constructor(valorInicial) {
    //   this.#saldo = valorInicial;
    // }
    
    // getSaldo() {
        //   return this.#saldo;
    // }
    // setSaldo(saldo) {
    //   this.#saldo = saldo;
    // }
    // depositar(valor) {
    //   this.#saldo += valor;
    // }
  
    // sacar(valor) {
        //   if (valor <= this.#saldo) {
    //     return this.#saldo -= valor;
    //   } else {
    //     return console.log("Saldo insuficiente.");
    //   }
    // }

module.export = ContaBancaria;
