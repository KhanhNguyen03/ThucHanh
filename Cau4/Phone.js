class Phone{
     id;
     name;
     brand;
     price;
    constructor( id, name, brand, price) {
        this.id=id;
        this.name = name;
        this.brand = brand;
        this.price = price;

    }
    get id(){
        return this.id;
    }
    set id(value){
        this.id = value;
    }
    get name(){
        return this.name;
    }
    set name(value){
        this.name = value;
    }
    get brand(){
        return this.brand;
    }
    set brand(value){
        this.brand = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this.price = value;
    }
    toString() {
        return `Phone ID: ${this.id}, Name: ${this.name}, Brand: ${this.brand}, Price: ${this.price}`;
    }



}