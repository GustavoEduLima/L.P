class Automovel{
    #codigo;
    #marca;
    #modelo;

    constructor(codigo, marca, modelo){
        this.#codigo = codigo;
        this.#marca = marca;
        this.#modelo = modelo;
    
    }

    get codigo(){
        return this.#codigo;
    }
    set codigo(codigo){
        this.#codigo = codigo;
    }

    get marca(){
        return this.#marca;
    }
    set marca(marca){
        this.#marca = marca;
    }

    get modelo(){
        return this.#modelo;
    }
    set modelo(modelo){
        this.#modelo = modelo;
    }

    

    Mostrar(){
        console.log(`Codigo: ${this.#codigo}`);
        console.log(`Marca: ${this.#marca}`);
        console.log(`Modelo: ${this.#modelo}`);
    }
}
module.export = Automovel;