const propiedadesVenta =
[ 
   {
      nombre: 'ancud',
      src: './assets/img/urco.jpg',
      descripcion: 'Una hermosa casa junto a la playa con vista al océano.',
      ubicacion: 'ancud, chile',
      habitaciones: 1,
      banos: 1,
      costo: 1,
      smoke: true,
      pets: true
    },
    {
      nombre: 'ancud 2',
      src: './assets/img/urco.jpg',
      descripcion: 'Una hermosa casa junto a la playa con vista al océano.',
      ubicacion: 'ancud, chile',
      habitaciones: 2,
      banos: 2,
      costo: 2,
      smoke: false,
      pets: false
    },
    {
      nombre: 'ancud 3',
      src: './assets/img/urco.jpg',
      descripcion: 'Una hermosa casa junto a la playa con vista al océano.',
      ubicacion: 'ancud, chile',
      habitaciones: 3,
      banos: 3,
      costo: 3,
      smoke: false,
      pets: true
    },
    {
      nombre: 'ancud 4',
      src: './assets/img/urco.jpg',
      descripcion: 'Una hermosa casa junto a la playa con vista al océano.',
      ubicacion: 'ancud, chile',
      habitaciones: 4,
      banos: 4,
      costo: 4,
      smoke: false,
      pets: true
    }
]



function mostrarVenta()
{
   let propiedad_Venta = document.getElementById('ventahtml')
   let card_html = ``
   for(const p_venta of propiedadesVenta)
   {
      card_html +=
      `
         <div class="col-md-4 mb-4">
            <div class="card">
                  <img src=                               "${p_venta.src}" class="card-img-top" alt="del departamento"/>
               <div class="card-body">
                  <h5 class="card-title">                  ${p_venta.nombre}      </h5>
                  <p class="card-text">                    ${p_venta.descripcion} </p>
                  <p> <i class="fas fa-map-marker-alt"></i>${p_venta.ubicacion}  </p>
                  <p  <i class="fas fa-bed"></i>           ${p_venta.habitaciones} |<i class="fas fa-bath"></i> ${p_venta.banos} </p>
                  <p> <i class="fas fa-dollar-sign"> </i>  ${p_venta.costo}</p>
       `
                  if (p_venta.smoke)
                     {
                        card_html +=
                        ` 
                           <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>
                        ` 
                     }
                  else 
                     {
                        card_html +=
                         ` 
                          <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                         ` 
                     }
                  if (p_venta.pets)
                    {
                     card_html += 
                       `
                        <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
                      `
                  }
                  else
                  {
                     card_html +=
                     `
                     <p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>
                     `
                  }
              card_html +=
              `
        </div>
          </div>
             </div>
              ` 
 }

   propiedad_Venta.innerHTML = 
   `
      <h2>Propiedades en Venta</h2>
      <div class="row">
   ` + card_html + `</div>`

}

mostrarVenta();