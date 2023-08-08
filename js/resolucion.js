function punto1 (){
        let edad = prompt("Ingrese su edad: ");
        if (edad>18){
                alert('Puede manejar');
        }else if (edad<=18){
                alert('No puede manejar');
        }else{
                alert('Este no es un dato valido!');
        }; 
}

function punto2(){
        let nota = prompt('Ingrese una nota del 0 al 10:');
        switch(nota){
            case '0':
            case '1':
            case '2':
                alert('Muy deficiente');
                break;
            case '3':
            case '4':
                alert('Insuficiente');
                break;
            case '5':
            case '6':
                alert('Suficiente');
                break;
            case '7':
                alert('Bien');
                break;
            case '8':
            case '9':
                alert('Notable');
                break;
            case '10':
                alert('Sobresaliente');
                break;
            default:
                if(nota>10||nota<0){
                    alert('número erróneo')
                }else{
                    alert('El dato ingresado no es valido, ingrese un numero dentro del rango (del 0 al 10)');
                }
                break;
        };
};

function punto3(){
        let cadenaIngresada ="";
        let cadenaTotal = "";
        
        do{
                cadenaIngresada = "-" + " " + prompt("ingrese una cadena de texto: ") + " ";
                cadenaTotal = cadenaTotal + cadenaIngresada;

        }while(confirm('ingresar otra cadena de texto?')==true)

        document.write(cadenaTotal);
};

function punto4(){
        let sumaDeNumeros = 0;
        let numero4 = 0;
        do{
                numero4 = parseInt(prompt("ingrese un numero: "));
                if( !isNaN(numero4) ){
                        sumaDeNumeros = sumaDeNumeros+numero4;
                }else{
                        alert("No es un numero");
                }
        }while(confirm('ingresar otro numero?')==true)
        document.write(`La suma de los numeros ingresados es ${sumaDeNumeros}`);
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
                                        alert("El valor de la letra del DNI ingresado es: T");
                                        // document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: T";
                                        break;
                                case 1:
                                        alert("El valor de la letra del DNI ingresado es: R");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: R";
                                        break;
                                case 2:
                                        alert("El valor de la letra del DNI ingresado es: W");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: W";
                                        break;
                                case 3:
                                        alert("El valor de la letra del DNI ingresado es: A");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: A";
                                        break;
                                case 4:
                                        alert("El valor de la letra del DNI ingresado es: G");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: G";
                                        break;
                                case 5:
                                        alert("El valor de la letra del DNI ingresado es: M");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: M";
                                        break;
                                case 6:
                                        alert("El valor de la letra del DNI ingresado es: Y");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: Y";
                                        break;
                                case 7:
                                        alert("El valor de la letra del DNI ingresado es: F");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: F";
                                        break;
                                case 8:
                                        alert("El valor de la letra del DNI ingresado es: P");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: P";
                                        break;
                                case 9:
                                        alert("El valor de la letra del DNI ingresado es: D");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: D";
                                        break;
                                case 10:
                                        alert("El valor de la letra del DNI ingresado es: X");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: X";
                                        break;
                                case 11:
                                        alert("El valor de la letra del DNI ingresado es: B");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: B";
                                        break;
                                case 12:
                                        alert("El valor de la letra del DNI ingresado es: N");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: N";
                                        break;
                                case 13:
                                        alert("El valor de la letra del DNI ingresado es: J");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: J";
                                        break;
                                case 14:
                                        alert("El valor de la letra del DNI ingresado es: Z");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: Z";
                                        break;
                                case 15:
                                        alert("El valor de la letra del DNI ingresado es: S");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: S";
                                        break;
                                case 16:
                                        alert("El valor de la letra del DNI ingresado es: Q");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: Q";
                                        break;
                                case 17:
                                        alert("El valor de la letra del DNI ingresado es: V");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: V";
                                        break;
                                case 18:
                                        alert("El valor de la letra del DNI ingresado es: H");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: H";
                                        break;
                                case 19:
                                        alert("El valor de la letra del DNI ingresado es: L");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: L";
                                        break;
                                case 20:
                                        alert("El valor de la letra del DNI ingresado es: C");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: C";
                                        break;
                                case 21:
                                        alert("El valor de la letra del DNI ingresado es: K");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: K";
                                        break;
                                case 22:
                                        alert("El valor de la letra del DNI ingresado es: E");
                                        //document.getElementById("respuestaPunto5").innerHTML = "El valor de la letra del DNI ingresado es: E";
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
        let contador9=1;
        while(contador9<=50){
                if ((contador9 % 4) == 0){
                        document.write(`${contador9} + Multiplo de 4`);
                        document.write('<br/>');
                        contador9++;
                        break;
                }else if ((contador9 % 9) == 0){
                        document.write(`${contador9} + "Multiplo de 9"`);
                        document.write('<br/>');
                        contador9++;
                        break;
                }else if (contador9 == 5){
                        document.write(`${contador9}`);
                        document.write('<br/>');
                        document.write('<hr/>');
                        document.write('<br/>');
                        contador9++;
                        break;
                }else {
                        document.write(`${contador9}`);
                        document.write('<br/>');
                        contador9++;
                        break;
                };
        };
        // document.getElementById("respuestaPunto9").innerHTML = "Aun no esta definido...";
};

function punto10(){
        let columnas = prompt("Ingrese la cantidad de columnas: ");
        let filas = prompt("Ingrese la cantidad de filas: ");
        let total = columnas*filas;
        document.write("<table border>");
        for(let i=0;i<filas;i++){
                document.write("<tr>");
                for(let j=0;j<columnas;j++){
                        document.write("<td>");
                        document.write(total);
                        total--;
                        document.write("</td>");
                }
                document.write("</tr>");
        }
        document.write("</table>");

 //       document.getElementById("respuestaPunto10").innerHTML = "Aun no esta definido...";     
}

function punto11(){
        let nombrePer= [""];
        let edadPer= [0];
        let acumuladorPer= ["",0];

        for (let i=0; i<3; i++){
              nombrePer[i] = prompt(`Ingrese el ${i+1} nombre`);
              edadPer[i] = prompt(`Ingrese la edad del ${nombrePer[i]}`);
              if(edadPer[i]>acumuladorPer[1]){
                      acumuladorPer[0] = nombrePer[i];
                      acumuladorPer[1] = edadPer[i];
              };
        }
        alert(`${acumuladorPer[0]} es el mayor de los 3`);
}

function punto12(){
        let numeroR=Math.floor(Math.random()*(99-1)+1);
        alert(`${numeroR}`)
        // document.getElementById("respuestaPunto12").innerHTML = "Aun no esta definido...";
}

function punto13(){
        let textom = (prompt("Ingrese un texto:")).toUpperCase();
        //let textoM = textom.toUpperCase();
        alert(`${textom}`);
        //alert(`${textoM}`);

        // document.getElementById("respuestaPunto13").innerHTML = "Aun no esta definido...";
}

function punto14(){
        let textoIng=prompt("Ingrese un texto: ");
        let textoEdi= "";
        for (let letra of textoIng){
                textoEdi= textoEdi + letra + "-";
        }
        alert(`${textoEdi}`);
        //document.getElementById("respuestaPunto14").innerHTML = "Aun no esta definido...";
}

function punto15(){
        let textoOri = prompt("Ingrese un texto: ");
        let acumulador15 = [];
        //let total= 0;
        for (let letra of textoOri){
                switch(letra){
                        case 'a':
                                acumulador15.push("a");
                                break;
                        case 'e':
                                acumulador15.push("e");
                                break;
                        case 'i':
                                acumulador15.push("i");
                                break;
                        case 'o':
                                acumulador15.push("o");
                                break;
                        case 'u':
                                acumulador15.push("u");
                                break;
                        default:
                                break;
                };

                //total = acumulador15.length;
        }
        alert(`En el texto hay ${acumulador15.length} vocales.`);
        //document.getElementById("respuestaPunto15").innerHTML = "Aun no esta definido...";
}

function punto16(){
        // let oracion=prompt("Ingrese una oracion:");
        // let array=oracion.split(',');
        // let noicaro = (array.reverse()).join('');
        // alert(`${noicaro}`);

        let oracion = "Ingrese una oracion:";
        let array = [...oracion];
        let noicaron = array.reverse();
        let resultado="";
        for (let letra of noicaron){
                resultado = resultado + letra;
        }
        console.log(`${resultado}`);

       // document.getElementById("respuestaPunto16").innerHTML = "Aun no esta definido...";
}

function punto17(){
        let texto17=prompt("Ingrese un texto: ");
        let array17 = [...texto17];
        for (let i=0; i < array17.length; i++){
                if (array17[i]=='a' || array17[i]=='e' || array17[i]=='i' || array17[i]=='o' || array17[i]=='u'){
                        alert(`la primera vocal es la "${array17[i]}" y se encuentra en la posicion ${i+1}`);
                        break;
                }
        }
        // document.getElementById("respuestaPunto17").innerHTML = "Aun no esta definido...";
}