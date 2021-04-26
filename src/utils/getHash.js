// const getHash = () => {}
// Cuando solo retornamos un elemento que estamos accediendo
// dentro de la logica de la funcion no se requieren {}
const getHash = () =>
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    // ['', '1', '']
    // slice elimina el # osea el caracter 1
    // toLocaleLowerCase convierte todo a minusculas
    // split convierte a un array y elimina los /
    export default getHash;