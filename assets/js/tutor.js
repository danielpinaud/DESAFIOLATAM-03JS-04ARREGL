<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./assets/css/style.css">
      <title>Desafio Latam</title>
   </head>
   <body>
<h1>Libros a la venta</h1>
<div id="books-for-sale"></div>
      <button onclick="showBooks('for-sale')">Ver todos los libros a la venta</button>
<br><br>
<h1>Libros por llegar</h1>
<div id="books-coming-soon"></div>
<button onclick="showBooks('coming-soon')">Ver todos los que estan por llegar</button>
<br><br>
   </body>

<script>
const booksForSale = [
   {"title": "Libro infantil 1", "ageGroup": "kids", "icon": "https://http2.mlstatic.com/D_NQ_NP_660004-MLA41136480553_032020-O.webp"},
   {"title": "Libro infantil 2", "ageGroup": "kids", "icon": "https://images.cdn1.buscalibre.com/fit-in/360x360/09/48/09481c08b1d6cccb6558170213116cfa.jpg"},
   {"title": "Libro Adulto 1", "ageGroup": "adult", "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7_pnYZe5a1hgElzb08dCbg1elu-2FRnnBA&s"},
   {"title": "Libro Adulto 2", "ageGroup": "adult", "icon": "https://www.clarin.com/2018/11/13/XSh2gQVEm_720x0__1.jpg"},
]
const booksComingSoon = [
   {"title": "Libro infantil 1", "ageGroup": "kids", "icon": "https://images.cdn3.buscalibre.com/fit-in/360x360/d2/cb/d2cb0bfb340033f259ad8efa85c6712b.jpg"},
   {"title": "Libro infantil 2", "ageGroup": "kids", "icon": "https://2.bp.blogspot.com/-hNDZ4LZ_fuc/VWRzpMTc9mI/AAAAAAAAEYM/G22G_UEzdK4/s1600/libro-infantil-impescindible-adivina-cuanto-quiero.jpg"},
   {"title": "Libro Adulto 1", "ageGroup": "adult", "icon": "https://media.revistagq.com/photos/6040d3feea88c7db6f596e49/master/w_320%2Cc_limit/61aTf+8b6qL.jpg"},
   {"title": "Libro Adulto 2", "ageGroup": "adult", "icon": "https://i.pinimg.com/736x/c0/7f/03/c07f0335aab7d6b4d32d90ab7ba9e7d5.jpg"},
]

function renderBooks (books, idDeContenedor) { 
const container = document.getElementById(idDeContenedor) // ID QUE RECIBE POR PROPS
let html = "" // Declara un LET HTML VACIO
for (const book of books) { //ARREGLO DE BOOKS QUE RECIBE POR PROPS
   html += `
   <div class="book book-${book.ageGroup}">
      <img class="imgLibro" src="${book.icon}" alt="" >      
      <h2>${book.title}</h2>
   </div>
   `; // GENERA UN HTML
}
container.innerHTML = html //LO INYECTA AL HTML GENERADO EN EL CONTAINER 
}
function showBooks (type){ //FUNCION LLAMADA CUANDO HAGO CLICK EN EL BOTON
   if (type === "for-sale") { // SE FIJA QUE TIPO ES LA PROP 
      renderBooks(booksForSale, "books-for-sale")
   }else if (type === "coming-soon") {
      renderBooks(booksComingSoon, "books-coming-soon")
   }
}
//showBooks('for-sale')
//showBooks('coming-soon')
</script>
<style>
   .imgLibro{
      width: 400px;
      height: 500px;
   }
</style>
</html>