import { calculaISV, Producto } from "./desestructuracion-funcion";



const carritoCompras:Producto[]=[{
  desc:'telefono 1 ',
  precio:100
},
{
  desc:'telefono 2 ',
  precio:250
},

]


const [total,isv] = calculaISV(carritoCompras);

console.log('Total',total);
console.log('ISV',isv)
