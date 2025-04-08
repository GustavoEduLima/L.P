class Main{

    constructor(){

        const ContaBancaria = require('./ContaBancaria');
        
        const conta = new ContaBancaria(100);
    
        conta.depositar(50); 
        console.log("Saldo atual:", conta.saldo);
        
        conta.sacar(35);
        console.log("Saldo atual:", conta.saldo);
    }    
}

    // constructor(){
    //     this.conta = new ContaBancaria(100);
    //     this.conta.sacar(50);
    //     this.conta.depositar(200);

    //     console.log("Saldo atual:", this.conta.getSaldo());

    // }