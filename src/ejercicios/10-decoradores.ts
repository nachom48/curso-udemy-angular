
//ver documentacion oficial para ver los tipos de decoradores
//  y cada uno tiene una estructura distinctUntilChanged,
// los decoradores sirven para cambiar las clases en momentos en q son definidas
// en el momento en q este compilado extiende internamente esas funcionalidades que le estamos queriendo implementar
// usa bastante los decoradores para cambiar las cosas


//hay muchos tipos de decoradores,algunos reciben cosas,miDecorador({})


function classDecorator<T extends { new (...args:any[]):{}}>(
  constructor: T
){
  return class extends constructor {
    newProperty= "new property";
    hello="override";
  }
}
//un decorador no es mas q una funcion


@classDecorator
class MiSuperClase{

  public miPropiedad:string='ABC123';

  imprimir(){
    console.log('Hola Mundo');
  }
}


const miClase = new MiSuperClase
()
;
