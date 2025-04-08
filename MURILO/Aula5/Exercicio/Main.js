    class Main{
        constructor(){
            this.pessoa = [];
            this.automovel = [];
        }
        InserePessoa(pessoa){
            this.pessoa.push(pessoa);
        }
        InsereAutomovel(automovel){
            this.automovel.push(automovel);
            const pessoa = this.pessoa.find(pessoa => pessoa.codigo == automovel.codigo);
            if(pessoa){
                pessoa.InsereAutomovel(automovel);
            }else{
                console.log("Pessoa não encontrada...");
            }
        }
    
        TransfereAutomovel(codigoAutomovel, codigoPessoa){
            const pessoa = this.pessoa.find(pessoa => pessoa.codigo == codigoPessoa);
            const pessoaNautomovel = this.pessoa.find(pessoa => pessoa.codigo == codigoNautomovel);
            
            if(!pessoa){
                console.log("Pessoa não encontrada...");
                return;
            }
            if(!pessoaNautomovel){
                console.log("Pessoa não encontrada...");
                return;
            }
            const automovel = pessoa.automovel(codigoAutomovel);
    
            if(!automovel){
                console.log("Automovel não encontrado...");
                return;
            }
    
            pessoa.removeAutomovel(automovel);
            pessoaNautomovel.InsereAutomovel(automovel);
        }
    
        Mostrar(){
            this.pessoa.forEach(pessoa => pessoa.Mostrar());
            this.automovel.forEach(automovel => automovel.Mostrar());
        }    
    }
    
    // Teste
    let main = new Main();

    let automovel1 = new Automovel(1, "Fiat", "Uno");
    let automovel2 = new Automovel(2, "Volkswagen", "Fusca");

    const pessoa1 = new Pessoa("João", 1);
    const pessoa2 = new Pessoa("Maria", 2);

    main.InserePessoa(pessoa1);
    main.InserePessoa(pessoa2);

    main.InsereAutomovel(pessoa1.codigo, automovel1);
    main.InsereAutomovel(pessoa1.codigo, automovel2);

    main.Mostrar();

    main.TransfereAutomovel(1, 1, 2);

    main.Mostrar();

    // No meu console nao rodou, não entendi o porque não tenha dado certo. se puder me ajudar agradeço muitoo.