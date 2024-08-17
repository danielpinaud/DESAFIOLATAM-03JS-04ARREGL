const propiedadesAlquiler =
[ 
   {
      nombre: 'caulin',
      src: './assets/img/caulin.jpg',
      descripcion: 'Una hermosa casa junto a la playa con vista al océano.',
      ubicacion: 'caulin, chile',
      habitaciones: 1,
      banos: 1,
      costo: 1,
      smoke: false,
      pets: true
    },
    {
      nombre: 'caulin 2',
      src: './assets/img/caulin.jpg',
      descripcion: 'Una hermosa casa junto a la playa con vista al océano.',
      ubicacion: 'caulin, chile',
      habitaciones: 2,
      banos: 2,
      costo: 2,
      smoke: false,
      pets: true
    },
    {
      nombre: 'caulin 3',
      src: './assets/img/caulin.jpg',
      descripcion: 'Una hermosa casa junto a la playa con vista al océano.',
      ubicacion: 'caulin, chile',
      habitaciones: 3,
      banos: 3,
      costo: 3,
      smoke: false,
      pets: true
    },
    {
      nombre: 'caulin 4',
      src: './assets/img/caulin.jpg',
      descripcion: 'Una hermosa casa junto a la playa con vista al océano.',
      ubicacion: 'caulin, chile',
      habitaciones: 4,
      banos: 4,
      costo: 4,
      smoke: false,
      pets: true
    }
]



function mostrarAlquiler()
{
   let propiedad_Alquiler = document.getElementById('alquilerhtml')
   let card_html = ``
   for(const p_alquiler of propiedadesAlquiler)
   {
      card_html +=
      `
         <div class="col-md-4 mb-4">
            <div class="card">
                  <img src=                               "${p_alquiler.src}" class="card-img-top" alt="del departamento"/>
               <div class="card-body">
                  <h5 class="card-title">                  ${p_alquiler.nombre}      </h5>
                  <p class="card-text">                    ${p_alquiler.descripcion} </p>
                  <p> <i class="fas fa-map-marker-alt"></i>${p_alquiler.ubicacion}  </p>
                  <p  <i class="fas fa-bed"></i>           ${p_alquiler.habitaciones} |<i class="fas fa-bath"></i> ${p_alquiler.banos} </p>
                  <p> <i class="fas fa-dollar-sign"> </i>  ${p_alquiler.costo}</p>
               </div>
            </div>
         </div>
    `
   }

   propiedad_Alquiler.innerHTML = 
   `
      <h2>Propiedades en alquiler</h2>
      <div class="row">
   ` + card_html + `</div>`

}

mostrarAlquiler();