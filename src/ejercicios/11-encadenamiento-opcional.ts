//el ? es bastante flexible y dependiendo de donde lo use tiene distintos significados


interface Pasajero {
  nombre:string;
  hijos?:string[];
//aca el ? es opcional, la propiedad no se necesita si o si,es opcional
}

const pasajero1: Pasajero={
  nombre:"Fernando"
}

const pasajero2:Pasajero={
  nombre:"Fernando1",
  hijos:["Natalia","Gabriel"]
}

function imprimeHijos(pasajero:Pasajero):void{
  const cuantosHijos=pasajero.hijos?.length || 0;
  //osea si no existe hijos deveulva 0 para q no devuelva undefined
  console.log(cuantosHijos);
}
