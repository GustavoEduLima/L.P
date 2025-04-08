class Automovell{
    #marca;
    #modelo;
    #codigo;

    constructor( marca, modelo, codigo){
        this.#marca = marca;
        this.#modelo = modelo;
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
    
    get codigo(){
        return this.#codigo;
    }
    set codigo(codigo){
        this.#codigo = codigo;
    }
    

    Mostrar(){
        console.log(`Marca: ${this.#marca}`);
        console.log(`Modelo: ${this.#modelo}`);
        console.log(`Codigo: ${this.#codigo}`);
    }
}
module.export = Automovell;