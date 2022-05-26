interface Reproductor {
  volumen:number;
  segundo:number;
  cancion:string;
  detalles:Detalles;
}

interface Detalles{
  autor:string;
  anio:number;
}

const reproductor : Reproductor = {
  volumen : 90,
  segundo:36,
  cancion:"Mess",
  detalles:{
    autor:"Ed sheeran",
    anio:2015
  }
}
const autor ='Fulano'
//Para destructurar un objeto es con las llaves

const {volumen,segundo,cancion ,detalles:{autor:autorDetalle}}=reproductor;
// const {autor} =detalles;
//haciendole autor:autorDetalle me deja darle otro nombre si tnego esa variable
//declarada
// console.log('El volumen actual es de :' ,volumen)
// console.log('El segundo actual es :',segundo)
// console.log('La cancion actual es :',cancion)
// console.log('El autor es ',autor)

//Para destructurar un objeto array es con los corchetes

const dbz:string[]=['Goku','Vegeta','Trunks']
// const [ p1,p2,p3 ]= dbz;
//Si solo quiero el tercero pongo las comas y no pongo nada adentro
const [ , ,p3 ]= dbz;


//en la destructuracion de arreglos no importa el nombre,importa la posicion
//hay q ponerle nombre segun su posicion

console.log('Personaje 1 : ',dbz[1])
console.log('Personaje 1 : ' ,dbz[0])
