//let options=prompt('Ingrese el punto del practico que quiera probar:');
//switch(options){
//    case '1':
        document.write('\n Punto 01');
        let edad = prompt('Ingrese su edad: ');
        if (edad > 18){
            document.write(`Puede manejar`);
        }else if (edad < 18){
            document.write(`No puede manejar`);
        }else{
            document.write('este no es un dato valido');
        }
//        break;
//    case '2':
        document.write('\n Punto 02');
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
        }
//        break;
//    case '3':
        document.write('\n Punto 03');
        
//        break;
//    case '4':
        document.write('\n Punto 04');
//        break;
//   case '5':
        document.write('\n Punto 05');
//        break;
//    case '6':
        document.write('\n Punto 06');
//        break;
//    case '7':
        document.write('\n Punto 07');
//        break;
//   case '8':
        document.write('\n Punto 08');
//        break;
//    case '9':
        document.write('\n Punto 09');
//        break;
//    case '10':
        document.write('\n Punto 10');
//        break;
//    case '11':
        document.write('\n Punto 11');
//        break;
//    case '12':
        document.write('\n Punto 12');
//        break;
//    case '13':
        document.write('\n Punto 13');
//        break;
//    case '14':
        document.write('\n Punto 14');
//        break;
//    case '15':
        document.write('\n Punto 15');
//        break;
//    case '16':
        document.write('\n Punto 16');
//        break;
//    case '17':
        document.write('\n Punto 17');
//        break;
//    default:
        alert('No es una opcion disponible');
//        break;
//}