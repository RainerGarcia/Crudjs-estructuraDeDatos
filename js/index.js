const form = document.querySelector('#formulario');
const listado = document.querySelector('#listado-prod');
const output = document.querySelector('#listado-prod');
const listado_productos = document.querySelector('#listado-prod');
let listaProductos = [];

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const datos = new FormData(form);
    const data = {};

    datos.forEach((value,key) => {
        data[key] = value;
    });

    listaProductos.push(data);

    output_productos();
    form.reset();
});

output_productos = () => {
    let anexar = '';
    for (let index = 0; index < listaProductos.length; index++) {
        
        anexar += `<div class="new-product" id="product" index="${index}">
                        <p id="nombre-${index}">${listaProductos[index].nombre}</p>
                        <p id="cantidad-${index}">${listaProductos[index].cantidad}</p>
                        <p id="precio-${index}">${listaProductos[index].precio} Bs</p>
                        <div class="accion">
                            <button class="actualizar" id="actualizar-${index}" title="actualizar" index="${index}">⟳</button>
                            <button class="eliminar" id="eliminar-${index}" title="eliminar" index="${index}">X</button>
                        </div>
                    </div>`
    };
    
    output.innerHTML = anexar;
};

listado_productos.addEventListener('click', (event) => {

    let i = event.target.getAttribute('index');

    if (event.target && event.target.matches(`#actualizar-${i}`)) {

        update_element(i);
        
    }else{
        if (event.target && event.target.matches(`#eliminar-${i}`)) {
            delete_element(listaProductos,event.target.getAttribute('index'));
            output_productos();
            
        };
    }
});

delete_element = (lista,i) => {
    lista.splice(i,1);
};

update_element = (i) => {

    const nombre = document.querySelector(`#nombre-${i}`);
    const cantidad = document.querySelector(`#cantidad-${i}`);
    const precio = document.querySelector(`#precio-${i}`);
    const actualizar = document.querySelector(`#actualizar-${i}`);
    const eliminar = document.querySelector(`#eliminar-${i}`);

    const input_nombre = document.createElement('input');
    input_nombre.type = 'text';
    input_nombre.classList.add('input-update');
    input_nombre.value = listaProductos[i].nombre;
    nombre.replaceWith(input_nombre);

    const input_cantidad = document.createElement('input');
    input_cantidad.type = 'number';
    input_cantidad.classList.add('input-update');
    input_cantidad.min = '1'
    input_cantidad.value = listaProductos[i].cantidad;
    cantidad.replaceWith(input_cantidad);

    const input_precio = document.createElement('input');
    input_precio.type = 'number';
    input_precio.classList.add('input-update');
    input_precio.min = '1'
    input_precio.value = listaProductos[i].precio;
    precio.replaceWith(input_precio);

    const modificar = document.createElement('button');
    modificar.classList.add('actualizar');
    modificar.title = 'modificar';
    modificar.id = `modificar-${i}`;
    modificar.textContent = '✔';
    actualizar.replaceWith(modificar);

    const cancelar = document.createElement('button');
    cancelar.classList.add('eliminar');
    cancelar.title = 'cancelar';
    cancelar.id = `cancelar-${i}`
    cancelar.textContent = '⊘';
    eliminar.replaceWith(cancelar);


    modificar.addEventListener('click', () => {

        listaProductos[i].nombre = input_nombre.value;
        listaProductos[i].cantidad = input_cantidad.value;
        listaProductos[i].precio = input_precio.value;

        nombre.textContent = listaProductos[i].nombre;
        cantidad.textContent = listaProductos[i].cantidad;
        precio.textContent = listaProductos[i].precio;

        input_nombre.replaceWith(nombre);
        input_cantidad.replaceWith(cantidad);
        input_precio.replaceWith(precio);
        modificar.replaceWith(actualizar);
        cancelar.replaceWith(eliminar);

    });

    cancelar.addEventListener('click', () => {

        input_nombre.replaceWith(nombre);
        input_cantidad.replaceWith(cantidad);
        input_precio.replaceWith(precio);
        modificar.replaceWith(actualizar);
        cancelar.replaceWith(eliminar);

    });
    


};
