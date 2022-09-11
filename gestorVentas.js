const customers=[];

/*const detallesVenta=[];

const Detalle={
    cantidad:cant,
    descripcion:tipo,
    total:precioTotal,
}*/


function createClient(){
    let dni=(prompt("dni del cliente")).toLowerCase();
    let nombre=prompt("nombre del cliente").toLowerCase();
    let lastname=prompt("apellido del cliente");
    let adress=prompt("direccion del cliente"); 
    let mail=prompt("mail del cliente");
    let phone=prompt("celular del cliente");


    const Client={
        id:dni,
        name:nombre,
        lastname:lastname,
        adress:adress,
        mail:mail,
        phone:phone,
   }
   
   cargarArray(customers,Client);
   alert('Nombre: '+Client.name+"\n"+'Apellido: '+Client.lastname+"\n" +'DNI: '+ Client.id+"\n"+'mail: '+Client.mail+"\n" +'Celular: '+ Client.phone+"\n");
   console.log(customers);
}


function cargarArray(arr,obj){
    arr.push(obj);
}

/*en el array sales se deben guardar objetos de venta con dni, nombre, apellido,fecha de venta, ESTO ME FALTA detalle de venta(cantidad, tipo web, monto parcial), montoFinalAPagar)*/

const sales=[];

let itemsCatalogo="";
cantLP=0;
montoLpage=0;
montoCooporativa=0;
montoEcommerce=0;
montoTotalMes=0;
cantidadVentasMes=0;

function createSales(){
    let option4;
    let presupuestoFinalCliente=0;
    
    
    var cantLP=0;
    alert('cant lp cuando entra a create sale. '+cantLP);
    
    let dni=prompt("dni del cliente"); 
    const encontrado=buscarPorNombre(customers,dni);  
    console.log(encontrado);
    if(encontrado.id==dni){
        alert("encontrado");
        let presupuestoParcialCliente=0;
        
        let fecha=prompt("fecha de venta");
        servicios();

        presupuestoParcialCliente=parseFloat(presupuesto(itemsCatalogo));
        presupuestoFinalCliente=((presupuestoParcialCliente)+(presupuestoFinalCliente));
        cantidadVentasMes=contar();
        
        
        while(option4!==0){
            option4=Number(prompt("ingrese una de las siguientes opciones:\n1.Ingresar venta \n  0.Salir\n"));
            
            switch(option4){
                case 1:
                    servicios();
                    presupuestoParcialCliente=parseFloat(presupuesto(itemsCatalogo)); 
                    presupuestoFinalCliente=((presupuestoParcialCliente)+(presupuestoFinalCliente)); 
                    montoTotalMes=montoLpage+montoCooporativa+montoEcommerce;
                    cantidadVentasMes=contar(); 
                break;
                
                case 0:
                    alert("Total a pagar cliente $: " +presupuestoFinalCliente+ "cantidad web LP compradas: "+cantLP);
                    /*alert(cantLP+" lp "+"montoTotalclienteLP"+ montoParciaLp+"+total. "+presupuestoFinalCliente);*/
                    
                    option4=0;
                break;
            }
        }
        const Sale={
        fecha:fecha,
        dataCliente:encontrado,
       
        }
        sales.push(Sale);
        alert("Fecha de Venta: "+Sale.fecha+"\n" +"Cliente:\n"+"DNI: "+Sale.dataCliente.id +"\n"+"Nombre: "+Sale.dataCliente.name +"\n"+"Apellido: "+Sale.dataCliente.lastname+"\n" +"Direccion: "+Sale.dataCliente.adress+"\n"+"mail: "+Sale.dataCliente.mail+"\n"    +"Celular: "+Sale.dataCliente.phone +"\n");
        console.log(sales);

        
        alert("venta total del mes $: " + montoTotalMes);
        alert("cantidad de web vendidas: " + cantidadVentasMes + " webs");
    }   
    else {
        alert("Debe registar al cliente");

    }
     

    
}


function buscarPorNombre(arr,valor){
    let encontrado=arr.find((el)=>{
        return el.id===valor;
    })
    return encontrado;
}
function servicios(){
    itemsCatalogo=catalogo();    
}
function catalogo(){
    let option3=parseInt(prompt("Escriba el numero de la opcion seleccionada:\n 1. LandingPage\n 2.Cooportiva\n 3.Ecomercce\n "));
    if(option3==1){
        alert("Usted eligio una Landing Page");
        return "LandingPage";
    }
    else if(option3==2){
        alert("Usted eligio una Corporativa");
        return "Coorporativa";
    }
    else if(option3==3){
        alert("Usted eligio una Ecomercce");
        return "Ecomercce";
    }
    else 
        alert("no eligio ninguna opcion, vuelva  a intentarlo");
        return " ";
}

function presupuesto(itemsCatalogo){
    if(itemsCatalogo==="LandingPage"){
        /*QUIERO SUMAR LANDIG PAGE POR SEPARADO, PERO ESA VARIABLE ACA SUMA BIEN PERO LUEGO SALE CON CERO, LA IDEA ES EN EL OBJETO CLIENT , AGREGARLE EL DETALLE DE LA COMPRA EJEMPLO> 3 LP 5000, 2 COORP 1000, TOTALfACTURA 12000*/

        cantLP=cantLP+1;
        
       
        
        let montoLp=0;
        let montoParcialLp=0;
        montoLp=parseFloat(prompt("ingrese el valor de la landing page"));
        alert("EL monto de Landing  Page elegida es $: "+ montoLp);
        montoLpage=montoLp+montoLpage;
        montoParcialLp=montoLp+montoParcialLp;
        alert("EL monto de Landing  Page es que estoy calculando $: "+ montoParcialLp);
        return montoParcialLp;
    }
    else if(itemsCatalogo==="Coorporativa"){
        let montoC=0;
        let montoParcialC=0;
        montoC=parseFloat(prompt("ingrese el valor de la WEb cooporativa"));
        montoCooporativa=montoC+montoCooporativa;
        montoParcialC=montoC+montoParcialC;
        alert("EL monto de la Web Cooportiva es $: " +montoParcialC);
        return montoParcialC;
    }
    else if(itemsCatalogo==="Ecomercce"){
        let montoE=0;
        let montoParcialE=0;
        montoE=parseFloat(prompt("ingrese el valor de la ecomercce"));
        montoEcommerce=montoE+montoEcommerce;
        montoParcialE=montoE+montoParcialE;
        alert("EL monto de la Web Ecomercce es $: " +montoParcialE  );
        return montoParcialE;
    }
    else
        return 0;
} 

function contar(){
    cantidadVentasMes++
    return cantidadVentasMes;
}


let option;
while(option!==0){
    option=Number(prompt("ingrese una de las siguientes opciones:\n 1. Gestionar Cliente: \n 2. Gestionar Ventas\n 0. Salir\n"));

    switch(option){
        case 1:
            let option1;
            while(option1!==0){
                option1=Number(prompt("ingrese una de las siguientes opciones:\n 1. Agregar Cliente: \n 2. Eliminar Cliente\n 3. Buscar Cliente\n 0.Salir\n"));
                
                switch(option1){
                    case 1:
                        createClient();
                        break;
                    case 2:
                        eliminarClient();
                        break;

                    case 3:
                        buscarClient();
                        break;
                    case 0:
                        alert("continua operando si lo deseas");
                    break;
                }   
            }
                
        break;



        case 2:
            let option2;
            while(option2!==0){
                option2=Number(prompt("ingrese una de las siguientes opciones:\n 1. Agregar Ventas: \n 2. Eliminar venta\n 3. Buscar venta\n 0. Salir\n"));
                
                switch(option2){
                    case 1:
                        createSales();
                    break;
                    case 2:
                        eliminarVenta();
                    break;

                    case 3:
                        buscarVenta();
                    break;
                    case 0:
                        alert("continua operando si lo deseas");
                    break;
                }   
            }
                
        break;

        case 0:
            alert("hasta la proxima");
        break;
    }

}




    
