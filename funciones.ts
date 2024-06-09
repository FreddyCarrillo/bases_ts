


type dataCustomer = {
    name: string,
    age?: number
}

let customers: dataCustomer[] = [];


const createCustomer = (data:dataCustomer):void => {
    customers.push(data);
    console.log('Creación exitosa');
    console.log(customers);
}

createCustomer({
    age: 26,
    name: 'Freddy'
});


// atributos = caracteristicas 
// métodos = funciones = acciones

interface MethodsRequired {
    escribir() : void;
    cocinar(): void
}


class Person implements MethodsRequired{

    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    comer() : void {
        console.log(`${this.name} está comiendo.`);
    }

    dibujar() : void {
        console.log(`${this.name} dibuja a sus ${this.age} años`);
    }

    escribir() : void {
        console.log(`${this.name} está escribiendo`);
    }

    cocinar() : void {
        console.log(`${this.name} está cocinando`);
    }
}



class Developer extends Person {
    constructor(name: string, age: number){
        super(name, age);
    }

    codear():void {
        console.log('Codificando ........');
    }
}




let persona1:Person = new Person("Freddy", 26);

persona1.comer();
persona1.comer();

let developer1 : Developer = new Developer("Daniel", 27);
developer1.dibujar();
developer1.codear();












