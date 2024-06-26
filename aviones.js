const civiles = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg',
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militares = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg',
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

// Existen 2 clases y varios "arrays": Gallery, Painter y 4 "arrays" con rutas a archivos de imágenes,
// divididos por tipo de vehículo y uso.

/* Gallery: Su única funcionalidad es albergar imágenes y devolverlas dependiendo del método que utilicemos. 
No interactúa con HTML.

constructor: Acepta dos parámetros, ambos conjuntos de imágenes.
*/
class Gallery {
    constructor(conj1, conj2) {
        this.conj1 =conj1
        this.conj2 = conj2}
        /* getRandomCivil: devuelve un vehículo aleatorio civil de la galería.
        
getRandomMilitary: devuelve un vehículo aleatorio militar de la galería.

getAll: devuelve el conjunto de vehículos de la galería, tanto militares como civiles. */
random(max) {
    return ~~(Math.random() * max)
}

getRandomCivil = () => {
    return this.conj2[this.random(this.conj2.length)]
}
getRandomMilitary = () => {
    return this.conj1[this.random(this.conj1.length)]
}
getAll = () => {
    return(this.conj1.concat(this.conj2))
}

}
/* 
Painter: La clase encargada de pintar las imágenes, de interactuar con el DOM. Encargada de crear etiquetas
y manipular el DOM para agregarlas.
constructor: Ejecutará la función createGallery. */
class Painter {
    constructor() {
    this.gallery = this.createGallery()}
/* createGallery:
Creará un elemento section y lo agregará al body.
Dicho section será, también, una propiedad de Painter a la que llamaremos gallery.*/

createGallery = () => {
const section = document.createElement ("section")
document.body.prepend(section)
    return section
}
//createImageTag: Acepta la url de una imagen y devuelve los siguientes elementos:
    createImageTag = (urlImg) =>{ 
    return `<picture>
    <img src="${urlImg}" />
    </picture>`   }
    paintSingleImage = (urlImg) => {
            this.gallery.innerHTML = this.createImageTag(urlImg)
        }

    paintMultipleImages = (arraydeimg) => {
            this.gallery.innerHTML = arraydeimg.map(function(imgurl){
                return this.createImageTag(imgurl)
            }.bind(this))
        }
        
    }
    
    /*paintSingleImage: Acepta la url de una imagen y agrega a gallery el elemento creado por createImageTag.
    

    paintMultipleImages: Acepta un conjunto de imágenes y agrega a gallery, uno a uno, el elemento creado por createImageTag. */
    const todo = new Gallery (militares,civiles)
    
    const painter = new Painter()