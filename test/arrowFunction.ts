(()=>{

    let idCustomer : number = 244;

    type dataCustomer = {
        name: string;
        edad: number;
    }

    const updateCustomer = ( data : dataCustomer) : string => {
        let url = `https://customer.com/${idCustomer}`;
        let newData = data;
        return 'Customer updated successfully';
    }

    console.log(updateCustomer({name: 'Lucas', edad: 20}));
})();