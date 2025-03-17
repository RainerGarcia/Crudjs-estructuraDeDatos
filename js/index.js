const form = document.querySelector('#formulario');
const listado = document.querySelector('#listado-prod');
const output = document.querySelector('#listado-prod');
let listaProductos = [];

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const datos = new FormData(form);
    const data = {};

    datos.forEach((value,key)=>{
        data[key] = value;
    });

    listaProductos.push(data);

    output_productos();
    console.log(listaProductos)
    form.reset();
});

function output_productos(){
    let anexar = '';
    console.log(listaProductos)
    for (let index = 0; index < listaProductos.length; index++) {
        
        anexar += `<div class=new-product>
                    <p>${listaProductos[index].nombre}</p>
                    <p>${listaProductos[index].cantidad}</p>
                    <p>${listaProductos[index].precio}</p>
                    <button class="actualizar" id="actualizar">Actualizar</button>
                    <button class="eliminar" id="eliminar">X</button>
                    </div>`
    };
    
    output.innerHTML = anexar;
};