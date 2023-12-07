
const htmlElement = ((name, src, description, location, bedrooms, wc, cost, smoke, pets) => {
    return (`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="${src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                    ${name}
                    </h5>
                    <p class="card-text">
                    ${description}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> ${location}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${bedrooms} Habitaciones |
                    <i class="fas fa-bath"></i> ${wc} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${cost}</p>
                    <p class="${smoke ? 'text-success' : 'text-danger'}">
                    <i class="${smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${ smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${pets ? 'text-success' : 'text-danger'}">
                    <i class="${pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
    `)
});

const newElement = ((arrNewElement) => {
    const row = document.getElementById("row");

    let html =''

    arrNewElement.forEach(element => {
        const {
            nombre, 
            src, 
            descripcion, 
            ubicacion, 
            habitaciones, 
            wc, 
            costo, 
            smoke, 
            pets
        } = element

        html += htmlElement(nombre, src, descripcion, ubicacion, habitaciones, wc, costo, smoke, pets);
    });

    row.innerHTML += html;
});

const evaluableArrElement = propiedades_venta || propiedades_alquiler;

newElement(evaluableArrElement);
