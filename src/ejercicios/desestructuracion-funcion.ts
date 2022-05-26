export interface Producto {
  desc:string;
  precio:number;
}
const telefono : Producto ={
  desc:'Nokia A1',
  precio:25
}

const tablet : Producto ={
  desc:'Ipad Air',
  precio:250,
}

export function calculaISV(productos:Producto[]):[number,number]{
  let total=0;

  productos.forEach(({ precio })=>{
    total += precio;
  })
  return [total,total*0.15];
}
//para acumular +=
//array.forEach(({precio})=>
// )

const articulos=[ telefono,tablet];

// const isv = calculaISV(articulos);
console.log('ISV:')


const [total,isv] = calculaISV(articulos);
