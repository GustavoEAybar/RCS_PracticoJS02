function punto1 (){

        let edad = document.getElementsByName("edad")[0].value;
        let texto = "si ves esto es por que no esta tomando el if o su condicion";

        if (edad>18){
                texto = 'Puede manejar';
                document.getElementById("respuestaPunto1").innerHTML = texto;
        }else if (edad<18){
                texto = 'No puede manejar';
                document.getElementById("respuestaPunto1").innerHTML = texto;
        }else{
                texto = 'Este no es un dato valido!';
                document.getElementById("respuestaPunto1").innerHTML = texto;
        }; 
}

function punto2(){
        //let nota = prompt('Ingrese una nota del 0 al 10:');
        let nota = document.getElementsByName("nota")[0].value;
        switch(nota){
            case '0':
            case '1':
            case '2':
                //alert('Muy deficiente');
                document.getElementById("respuestaPunto2").innerHTML = 'Muy deficiente';
                break;
            case '3':
            case '4':
                //alert('Insuficiente');
                document.getElementById("respuestaPunto2").innerHTML = 'Insuficiente';
                break;
            case '5':
            case '6':
                //alert('Suficiente');
                document.getElementsById("respuestaPunto2").innerHTML = 'Suficiente';
                break;
            case '7':
                //alert('Bien');
                document.getElementsById("respuestaPunto2").innerHTML = 'Bien';
                break;
            case '8':
            case '9':
                //alert('Notable');
                document.getElementsById("respuestaPunto2").innerHTML = 'Notable';
                break;
            case '10':
                //alert('Sobresaliente');
                document.getElementsById("respuestaPunto2").innerHTML = 'Sobresaliente';
                break;
            default:
                if(nota>10||nota<0){
                    //alert('número erróneo')
                    document.getElementsById("respuestaPunto2").innerHTML = 'nùmero erroneo';
                }else{
                    //alert('El dato ingresado no es valido, ingrese un numero dentro del rango (del 0 al 10)');
                    document.getElementsById("respuestaPunto2").innerHTML = 'El dato ingresado no es valido, ingrese un numero dentro del rango (del 0 al 10)';
                }
                break;
        }        
}

function punto3(){
        let cadenaIngresada ="";
        let cadenaTotal = "";
        
        do{
                cadenaIngresada = "-" + prompt("ingrese una cadena de texto: ");
                cadenaTotal = cadenaTotal + cadenaIngresada;

        }while(confirm('ingresar otra cadena de texto?')==true)

        document.getElementsById("respuestaPunto3").innerHTML = cadenaTotal;

}

function punto4(){
        let sumaDeNumeros = 0;
        let numero4 = 0;
        do{
                numero4 = prompt("ingrese un numero: ");
                if(Number.isNaN(numero4)){
                        sumaDeNumeros = sumaDeNumeros + numero4;
                }else{
                        alert("No es un numero");
                }
        }while(confirm('ingresar otro numero?')==true)
        document.getElementById("respuestaPunto4").innerHTML = `La suma de los numeros ingresados es ${sumaDeNumeros}`;
}

function punto5(){
        let DNI = 0;
        //let resultado = 0;
        do {
                DNI=prompt("Ingrese un numero de DNI:");
                if(DNI>=0 && DNI<=99999999){
                        //resultado = (DNI%23);
                        switch(DNI%23){
                                case 0:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: T";
                                        break;
                                case 1:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: R";
                                        break;
                                case 2:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: W";
                                        break;
                                case 3:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: A";
                                        break;
                                case 4:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: G";
                                        break;
                                case 5:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: M";
                                        break;
                                case 6:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: Y";
                                        break;
                                case 7:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: F";
                                        break;
                                case 8:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: P";
                                        break;
                                case 9:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: D";
                                        break;
                                case 10:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: X";
                                        break;
                                case 11:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: B";
                                        break;
                                case 12:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: N";
                                        break;
                                case 13:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: J";
                                        break;
                                case 14:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: Z";
                                        break;
                                case 15:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: S";
                                        break;
                                case 16:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: Q";
                                        break;
                                case 17:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: V";
                                        break;
                                case 18:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: H";
                                        break;
                                case 19:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: L";
                                        break;
                                case 20:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: C";
                                        break;
                                case 21:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: K";
                                        break;
                                case 22:
                                        document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: E";
                                        break;
                                default:
                                        break;
                        }
                }else{
                        alert("El dato ingresado no es valido, deve ingresar un DNI entre el 0 y el 99.999.999");
                }
        }while(confirm('ingresar otro DNI?')==true);
}

function punto6(){
        let priIndice=0;
        for(let segIndice=1; segIndice<31;segIndice++){
                while(priIndice<segIndice){ 
                document.getElementById("respuestaPunto6").innerHTML= segIndice;
                priIndice++;
                }
                priIndice=1;
                //document.getElementById("respuestaPunto6").innerHTML = '<br>';
        };
}

function punto7(){
        let tope = prompt("Ingrese un numero:");
        let acumulador=0;
        for(let i=0; i<tope;i++){
                while(acumulador<tope){
                        document.getElementById("respuestaPunto7").innerHTML = tope - i;
                        acumulador++;
                }
        };        
}

function punto8(){
        let numero8 = prompt("Ingrese un numero no mayor a 50:");
        let acumulador8 = 1;
        if(numero8 <= 50){
                for(let i=1; i<=numero8;i++){
                        while(acumulador8<=i){
                                document.write(acumulador8);
                                acumulador8++;
                        }
                        acumulador8=1;
                        document.write('<br>');
                }
        }else{
                alert('El dato ingresado es invalido, intente nuevamente.')
        }
}

function punto9(){
        document.getElementById("respuestaPunto9").innerHTML = "Aun no esta definido dos...";
}

function punto10(){
        document.getElementById("respuestaPunto10").innerHTML = "Aun no esta definido...";
}

function punto11(){
        document.getElementById("respuestaPunto11").innerHTML = "Aun no esta definido...";
}

function punto12(){
        document.getElementById("respuestaPunto12").innerHTML = "Aun no esta definido...";
}

function punto13(){
        document.getElementById("respuestaPunto13").innerHTML = "Aun no esta definido...";
}

function punto14(){
        document.getElementById("respuestaPunto14").innerHTML = "Aun no esta definido...";
}

function punto15(){
        document.getElementById("respuestaPunto15").innerHTML = "Aun no esta definido...";
}

function punto16(){
        document.getElementById("respuestaPunto16").innerHTML = "Aun no esta definido...";
}

function punto17(){
        document.getElementById("respuestaPunto17").innerHTML = "Aun no esta definido...";
}