(()=>{
    let nombre : string = "Freddy";
    let numeroDeAlumnos: number = 2;
    let esMayorDeEdad : boolean = true;

    nombre = "Drider";
    esMayorDeEdad = false;

    console.log(nombre[8]?.toUpperCase() || '__');

    // arrays 

    let edades : number[] = [
        20,
        21,
        22,
        23
    ];

    edades.push(25);

    // tuplas

    let dataEmployee : [string, number] = [
        'Freddy',
        0
    ];

    // functions 

    let getPokemons = (page: number = 1, startKey: string, index?: number) : number => {

        let total = page * (index ?? 2);
        return total;
    }

    console.log(getPokemons(1, 'A'));

    // objetos json 

    type Perro = {
        nombre:string; 
        edad: number; 
        color: string; 
        obtenerNumeroDeVacunas?: ()=> number;
    }

    let perro : Perro = {
        nombre: 'Boby',
        edad: 5,
        color: 'negro',
        obtenerNumeroDeVacunas: () => {
            return 4
        }
    }

    // ejemplo json 

    type DataCustomer = {
        customer_id: number;
        name:        string;
        email:       string;
        phone:       string;
        address:     Address;
        orders:      Order[];
    }

    type Address = {
        street:   string;
        city:     string;
        state:    string;
        zip_code: string;
        country:  string;
    }

    type Order = {
        order_id:     number;
        date:         string;
        total_amount: number;
        status:       string;
        products:     Product[];
    }

    type Product = {
        product_id:     number;
        name:           string;
        quantity:       number;
        price_per_unit: number;
        total_price:    number;
    }


    let dataCustomer : DataCustomer  = {
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
    

    dataCustomer.orders.map((order)=>{
        console.log(`**ORDEN Nº ${order.order_id}`);
        order.products.map((product)=>{
            console.log(`=> ${product.name} - ${product.price_per_unit} * ${product.quantity} = ${product.total_price}`);
        })
    });

})();