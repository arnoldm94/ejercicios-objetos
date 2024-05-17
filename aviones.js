/* Existen 2 clases y varios "arrays": Gallery, Painter y 4 "arrays" con rutas a archivos de imágenes, divididos por tipo de vehículo y uso.

Gallery: Su única funcionalidad es albergar imágenes y devolverlas dependiendo del método que utilicemos. No interactúa con HTML.

constructor: Acepta dos parámetros, ambos conjuntos de imágenes.

getRandomCivil: devuelve un vehículo aleatorio civil de la galería.

getRandomMilitary: devuelve un vehículo aleatorio militar de la galería.

getAll: devuelve el conjunto de vehículos de la galería, tanto militares como civiles.

Painter: La clase encargada de pintar las imágenes, de interactuar con el DOM. Encargada de crear etiquetas y manipular el DOM para agregarlas.

constructor: Ejecutará la función createGallery.

createGallery:

Creará un elemento section y lo agregará al body.

Dicho section será, también, una propiedad de Painter a la que llamaremos gallery.

createImageTag: Acepta la url de una imagen y devuelve los siguientes elementos:

<picture>
    <img src="ThisIsAnImage.jpg" />
</picture>
paintSingleImage: Acepta la url de una imagen y agrega a gallery el elemento creado por createImageTag.

paintMultipleImages: Acepta un conjunto de imágenes y agrega a gallery, uno a uno, el elemento creado por createImageTag. */