"use strict";
(() => {
    class Persona {
        constructor(nuevoNombre, nuevaEdad) {
            this.nombre = nuevoNombre;
            this.edad = nuevaEdad;
        }
        setNombre(nuevoNombre) {
            this.nombre = nuevoNombre;
        }
        getNombre() {
            return this.nombre;
        }
        setEdad(nuevaEdad) {
            this.edad = nuevaEdad;
        }
        getEdad() {
            return this.edad;
        }
        setApellido(nuevoApellido) {
            this.apellido = nuevoApellido;
        }
    }
    Persona.DNI = "72170220";
    class Developer extends Persona {
        updateAge() {
            super.setEdad(12);
        }
        codeWithPython() {
        }
        codeWithTs() {
            return '';
        }
        codeWithVisualStudioCode() {
        }
        codeWithJethBrains() {
        }
    }
    console.log(Persona.DNI);
    let persona1 = new Persona('Freddy', 26);
    console.log(persona1.getEdad());
    persona1.setApellido('Carrillo Tucto');
    console.log(persona1.apellido);
    let developer1 = new Developer('Lucas', 23);
    console.log(developer1.getEdad());
})();
(() => {
    var _a;
    let nombre = "Freddy";
    let numeroDeAlumnos = 2;
    let esMayorDeEdad = true;
    nombre = "Drider";
    esMayorDeEdad = false;
    console.log(((_a = nombre[8]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || '__');
    let edades = [
        20,
        21,
        22,
        23
    ];
    edades.push(25);
    let dataEmployee = [
        'Freddy',
        0
    ];
    let getPokemons = (page = 1, startKey, index) => {
        let total = page * (index !== null && index !== void 0 ? index : 2);
        return total;
    };
    console.log(getPokemons(1, 'A'));
    let perro = {
        nombre: 'Boby',
        edad: 5,
        color: 'negro',
        obtenerNumeroDeVacunas: () => {
            return 4;
        }
    };
    let dataCustomer = {
        "customer_id": 12345,
        "name": "Juan Pérez",
        "email": "juan.perez@example.com",
        "phone": "+34 600 123 456",
        "address": {
            "street": "Calle Falsa, 123",
            "city": "Madrid",
            "state": "Madrid",
            "zip_code": "28013",
            "country": "España"
        },
        "orders": [
            {
                "order_id": 67890,
                "date": "2024-06-09",
                "total_amount": 150.75,
                "status": "Completed",
                "products": [
                    {
                        "product_id": 111,
                        "name": "Camiseta Deportiva",
                        "quantity": 2,
                        "price_per_unit": 25.50,
                        "total_price": 51.00
                    },
                    {
                        "product_id": 222,
                        "name": "Zapatillas de Running",
                        "quantity": 1,
                        "price_per_unit": 75.75,
                        "total_price": 75.75
                    },
                    {
                        "product_id": 333,
                        "name": "Gorra",
                        "quantity": 1,
                        "price_per_unit": 24.00,
                        "total_price": 24.00
                    }
                ]
            },
            {
                "order_id": 67891,
                "date": "2024-05-15",
                "total_amount": 89.99,
                "status": "Completed",
                "products": [
                    {
                        "product_id": 444,
                        "name": "Mochila",
                        "quantity": 1,
                        "price_per_unit": 89.99,
                        "total_price": 89.99
                    }
                ]
            }
        ]
    };
    dataCustomer.orders.map((order) => {
        console.log(`**ORDEN Nº ${order.order_id}`);
        order.products.map((product) => {
            console.log(`=> ${product.name} - ${product.price_per_unit} * ${product.quantity} = ${product.total_price}`);
        });
    });
})();
(() => {
    let idCustomer = 244;
    const updateCustomer = (data) => {
        let url = `https://customer.com/${idCustomer}`;
        let newData = data;
        return 'Customer updated successfully';
    };
    console.log(updateCustomer({ name: 'Lucas', edad: 20 }));
})();
//# sourceMappingURL=main.js.map