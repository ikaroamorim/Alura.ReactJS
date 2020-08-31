export class Cliente {
    _id;
    _nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(id, nome, cpf){
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
    }
}