class pessoa{
    #nome;
    #codigo;
    #automovel;
    constructor(nome, codigo){
        this.#nome = nome;
        this.#codigo = codigo;
        this.#automovel = [];
    }

    get nome(){
        return this.#nome;
    }
    set nome(nome){
        this.#nome = nome;
    }

    get codigo(){
        return this.#codigo;
    }
    set codigo(codigo){
        this.#codigo = codigo;
    }

    get automovel(){
        return this.#automovel;
    }

    set automovel(automovel){
        this.#automovel = automovel;
    }

    InsereAutomovel(automovel){
        this.#automovel.push(automovel);
    }
    removeAutomovel(automovel){
        this.#automovel = this.#automovel.filter(automovel => automovel != automovel);
    }

    automovel(codigo){
        return this.#automovel.find(automovel => automovel.codigo == codigo);
    }

    Mostrar(){
        console.log(`Nome: ${this.#nome}`);
        console.log(`Codigo: ${this.#codigo}`);
        console.log(`Automovel: ${this.#automovel}` );
    }
}
module.export = pessoa;