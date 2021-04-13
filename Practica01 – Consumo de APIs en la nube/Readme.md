Practica 1 Consumo de APIS en la Nube




DESARROLLO
 
cdnjs.cloudflare.com es una red de entrega de contenido ultrarrápida, confiable y disponible globalmente para bibliotecas de código abierto.
Para cargar una biblioteca distribuida, copie y pegue el fragmento HTML de esa biblioteca en su
página web. Por ejemplo, para cargar jQuery, inserte el fragmento en su página web:
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-
   bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C
   2ejDxltZVFg==" crossorigin="anonymous"></script>
 cdnjs proporciona una API simple para permitir que cualquiera pueda consultar rápidamente las bibliotecas que tenemos en la CDN.
Proporcionamos dos puntos finales principales, el librariespunto final que permite a cualquier persona buscar en el conjunto completo de bibliotecas que ofrecemos y el libraries/:librarypunto final que permite obtener datos detallados para una biblioteca específica.
3) Crear un repositorio en GitHub con el nombre “Practica01 – Consumo de APIs en la nube”
https://github.com/zhimi99/APLICACIONES_DISTRIBUIDAS
4) Desarrollar una aplicación con HTML + CSS + Javascript + Web Services para buscar información
<!DOCTYPE html> <html lang="en"> <head>
<meta charset="UTF-8"> <meta name="viewport"
content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum- scale=1.0">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<title>FETCH</title> </head>
<body>
<div class="container">
<div class="row mt-3"> <div class="col">
<h2>Listado de datos</h2> <div class="my-3">
<table class="table" id="lista-usuarios"> <thead>
<tr>
<th scope="col">ID</th>
<th scope="col">Nombre</th> <th scope="col">Email</th>
<th scope="col">Compañía</th>
</tr> </thead> <tbody> </tbody>
</table> </div>
</div> </div>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384- q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384- UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384- JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="js/fetch.js"></script> </body>
</html>
JA V ASCRIPT
const tabla = document.querySelector('#lista-usuarios tbody');
function cargarUsuarios(){ fetch('usuarios.json')

.then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
.then(usuarios => { usuarios.forEach(usuario => {
const row = document.createElement('tr'); row.innerHTML += `
<td>${usuario.id}</td> <td>${usuario.name}</td> <td>${usuario.email}</td> <td>${usuario.company.name}</td>
`;
tabla.appendChild(row); });
}) // Aquí mostramos dicha información
.catch(error => console.log('Hubo un error : ' + error.message)) }
cargarUsuarios();
CONCLUSIONES:
• Podemos concluir que gracias a los servicos web, nos facilita el uso de
herramientas necesarias para poder desarollar nuestras aplicaciones, Los usuarios pueden escalar los servicios para ajustarlos a sus necesidades, personalizar las aplicaciones y acceder a los servicios de cloud desde cualquier sitio con una conexión a internet todo esto e sposible gracias a los servicios en la nube. Así como también, podrán consumir APIs y manipular objetos JSON.
