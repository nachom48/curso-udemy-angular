function queTipoSoy<T>(argumento:T){
  return argumento;
}
//si no especifico el tipo es de cualquier tipo : any


let soyString=queTipoSoy('Hola Mundo');

let soyNumero=queTipoSoy(100);

//cuando la funcion que uso quiero q pueda aceptar varios tipos de cosas, entonces uso el tipo T <T>, es para meter un generico

let soyArreglo=queTipoSoy([1,2,3,4,5]);

let soyExplicito=queTipoSoy<number>(100);
//el number puede ir como q no
