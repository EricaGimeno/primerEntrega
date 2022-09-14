const customers=[];

function Client(numberDocument,nombre,lastname,adress,mail,phone){
            this.id=numberDocument,
            this.name=nombre,
            this.lastname=lastname,
            this.adress=adress,
            this.mail=mail,
            this.phone=phone

}
let services = [
    {
        id: 0,
        name: '-',
        category: '-',
        price: 0
    },
    {
        id: 1,
        name: 'LandingPage',
        category: 'DesingWeb',
        price: 200
    },
    {
        id: 2,
        name: 'Ecomercce',
        category: 'DesingWeb',
        price: 500
    },
    {
        id: 3,
        name: 'Branding',
        category: 'MarketingDigital',
        price: 100
    },
    {
        id: 4,
        name: 'SocialNetworks',
        category: 'MarketingDigital',
        price: 200
    }
];

services.push({id: 5, name: 'CopyWriting', category: 'MarketingDigital', price: 300},);


let cart = [];

function cargarArray(arr,obj){
    arr.push(obj);
}
function buscarObj(arr,valor){
    let encontrado=arr.find((el)=>{
        return el.id===valor;
    })
    return encontrado;
}
function deleteObj(numberDocument) {
    const index = customers.findIndex( x => x.id === numberDocument );
    customers.splice( index, 1 );
    console.log( customers );
    alert('Se elimino cliente con dni: ' + numberDocument);
    }
function listClient(){
    let Ver=customers.forEach((cliente)=>{
        console.log('Nombre: '+cliente.name+"\n"+'Apellido: '+cliente.lastname+"\n" +'DNI: '+ cliente.id+"\n"+'mail: '+cliente.mail+"\n" +'Celular: '+ cliente.phone+"\n");
        console.log(customers);
    })
}
function createShopping(numberDocument){
    const resultado=customers.findIndex(customers=>customers.id===numberDocument);
    if(resultado==-1){
        console.log("cliente no registrado");
    }else{
        const encontrado=buscarObj(customers,numberDocument);
        console.log(encontrado);  

        console.log("Hola "+encontrado.name+"\n"+" esperamos su pedido y se lo enviaremos a su mail:  "+encontrado.mail);
        products = parseInt(prompt('¿Qué servicio deseas? \n \n Menú: \n 1. LandingPage \n 2. Ecomercce \n 3. Branding \n 4. SocialNetworks \n 5. CopyWriting \n 0. Salir al Menu'));
        switch(products) {
            case 0:
                alert('Regresando al menu.');
                break;
            case 1:
                alert('Se añadio al carrito su LandingPage.');
                cart.push(services[1]);
                break;
            case 2:
                alert('Se añadio al carrito su Ecomercce.');
                cart.push(services[2]);
                break;
            case 3:
                alert('Se añadio al carrito sus Branding.');
                cart.push(services[3]);
                break;
            case 4:
                alert('Se añadio al carrito sus SocialNetwork.');
                cart.push(services[4]);
                break;
            case 5:
                alert('Se añadio al carrito su CopyWriting.');
                cart.push(services[5]);
                break;
            default:
                alert('Elige una opcion valida.');
            break;
        }
        

    }

}

function seeCart() {
    console.log('\n------------------\n Products:');
    cart.forEach((cart) => console.log('Id: ' + cart.id + '\n' + 'Name: ' + cart.name + '\n' + 'Category: ' + cart.category + '\n' + 'Price: ' + cart.price));
    console.log('\n------------------\n');
    }
    
function deleteProduct(id){
    cart = cart.filter(cart => cart.id != id);
    alert('Se elimino su producto con ID: ' + id);
}

function seeCatalog(){
    let Ver=services.forEach((prod)=>{
        console.log('Id: '+prod.id+"\n"+'Nombre: '+prod.name+"\n" +'Categoria: '+ prod.category+"\n"+'Precio: '+prod.price+"\n" );
        console.log(services);
    })
}
    
function seebudget(){
    const subtotal = cart.reduce((acc, el) => acc + el.price, 0);
    console.log('Subtotal: ' + subtotal.toFixed(2));
    function payment(){
    let iva = (subtotal.toFixed(2) * 1.21) - subtotal.toFixed(2);
    iva = Number(iva.toFixed(2));
    let total = subtotal + iva;
    total = Number(total.toFixed(2));
    const cartName = cart.map((el) => el.name);
    let pay = parseInt(prompt('Resumen: ' + '\nProducts: ' + cartName + '\n' + 'Subtotal: ' + subtotal.toFixed(2) + '\n' + 'IVA: ' + iva + '\n' + 'Total: ' + total +'\n' + 'Su total a pagar es: ' + total + 'USD \n' + '¿Con cuanto deseas abonar?'));
    let rest = total - pay;
    rest = Number(rest.toFixed(2));
        if (pay >= total){
            alert ('¡Gracias por su compra!' + '\n' + 'Pronto recibiras tu comprobante de pago en tu correo.');
        }
        else {
            alert ('¡Lo Sentimos! No pudimos procesar tu pago.' + '\n' + 'Fondos insuficientes, faltan '+ rest +' USD para poder realizar tu compra.' + '\n' + 'Vuelve a intentarlo nuevamente.');
        }
    }
payment(subtotal);
}
    
let option;       
/*AQUI empieza el programa */

while(option!==0){
    option=Number(prompt("ingrese una de las siguientes opciones:\n 1. Registrar Cliente: \n 2. Tienda Web\n 0. Salir\n"));
    let numberDocument;
    switch(option){
        case 1:
            let option1;
            while(option1!==0){
                option1=Number(prompt("ingrese una de las siguientes opciones:\n 1. Agregar Cliente: \n 2. Eliminar Cliente\n 3. Mostar Cliente\n 4. Buscar Cliente\n 0.Salir\n"));
                
                switch(option1){
                    case 1:

                        numberDocument=Number(prompt("dni del cliente"));
                        const res=customers.findIndex(customers=>customers.id===numberDocument);
                        if(res==-1){
                            console.log("Complete formulario");
                            let nombre=prompt("nombre del cliente");
                            let lastname=prompt("apellido del cliente");
                            let adress=prompt("direccion del cliente"); 
                            let mail=prompt("mail del cliente");
                            let phone=prompt("celular del cliente");
                        
                            const nuevoCli=new Client(numberDocument,nombre,lastname,adress,mail,phone);
                            alert ('¡Felcitaciones! '+ nuevoCli.name+' Gracias por registrarse!, Ahora ya formas parte de nuestra comunidad Olimpo.tech y gozara de grandiosos beneficios' + '\n' + 'Pronto recibiras tu cupon de descuento al Wsap.'+nuevoCli.phone);
                            alert("Nombre: "+nuevoCli.name +"\n"+"Apellido: "+nuevoCli.lastname+"\n" +"DNI: "+ nuevoCli.id+"\n"+'mail: '+nuevoCli.mail+"\n" +'Celular: '+ nuevoCli.phone+"\n"+'Direccion: '+ nuevoCli.adress+"\n");
                            cargarArray(customers,nuevoCli);
                            console.log(customers);
                        }else{
                            console.log("cliente registrado");
                        }    
                        break;
                    
                    case 2:
                        numberDocument=Number(prompt("ingrese en dni del cliente a eliminar"));
                        const resu=customers.findIndex(customers=>customers.id===numberDocument);
                        if(resu==-1){
                            console.log("cliente no registrado");
                            alert("Cliente no registrado");
                        }else{
                            console.log("cliente ha sido eliminado");
                            alert("Cliente ha sido eliminado");
                            deleteObj(numberDocument);
                        }    
                        break;
                    case 3:
                        console.log("Nuetros clientes \n");
                        listClient();
                        
                        break;
                    case 4:
                        numberDocument=Number(prompt("ingrese en dni del cliente a buscar"));
                        const resultado=customers.findIndex(customers=>customers.id===numberDocument);
                        if(resultado==-1){
                            console.log("El Cliente que busca no se encuentra registrado");
                        }else{
                            console.log("Informacion del Cliente:   ");
                            const busqueda=buscarObj(customers, numberDocument);
                            console.log(busqueda);
                        }
                        break;
                    case 0:
                        alert("Lo invitamos a visitar nuestra Tienda Web Olimpo.tech");
                    break;
                }   
            }     
            break;

        case 2:
            let option2;
            while(option2!==0){
                alert("Bienvenidos a Olimpo.tech!, lo invitamos a que mire nuestro catalogo, eliga su servicio y aumente sus ventas.  ");
                numberDocument=Number(prompt("ingrese el dni del cliente"));
                const resultado=customers.findIndex(customers=>customers.id===numberDocument);
                if(resultado==-1){
                    console.log("Para navegar en nuestro sitio Olimpo.tech, debe registrare y recibira un cupon de descuento. Gracias");
                }else{
                    const encontrado=buscarObj(customers,numberDocument);
                    console.log(encontrado);  
                    console.log("Hola "+encontrado.name+"\n"+" esperamos su pedido y se lo enviaremos a su mail:  "+encontrado.mail);
                    let option3;
                    while(option3!==0){
                        option2=Number(prompt("ingrese una de las siguientes opciones:\n 1. Comprar Servicio: \n 2. Eliminar Compra\n 3. Ver Catalogo\n 4. Ver Carrito\n 5. Ver Presupuesto \n 6. Volver al Menu \n 0.Cancelar Venta\n"));
                        switch(option2){
                            case 1:
                                createShopping(numberDocument);
                            break;
                            case 2:
                                numberId=Number(prompt("ingrese el Id del servicio que desea eliminar"));
                                deleteProduct(numberId);
                            break;
                            case 3:
                                seeCatalog();
                            break;
                            case 4:
                                seeCart();
                            break;
                            case 5:
                                seebudget();
                            break
                            case 6:
                                option3=0;
                            break
                            case 0:
                                alert("Su compra ha sido cancelada");
                                option3=0;
                                option2==0;
                            break;
                        } 
                    }  
                }      
        break;
        }
        case 0:
            alert("Gracias por su visita, Hasta la Proxima los saluda Olimpo.tech");
        break;
    }
}




    
