/* 
 Created on : 17-nov-2019, 17:18:52
 Author     : Raul Vela
 */

/**
 * 
 * @type Array de Objetos
 */
var ry = [
  {
//  Clave : Valor
    alt: "Nicolas Cage",
    imgh: 275,
    h3: "Samantha French",
    p1: "Samantha French received a BFA from \n\
         Minneapolis College of Art and Design in 2005. ",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 282,
    p1: "Este fotograf\355a muestra mi pintura favorita. \n\
         La mayor\355a de obras de arte por Picasso est\341 \n\
         sombr\355o y oscuro, pero, en esta pintura, Picasso \n\
         us\363 colores brillante y la cara de la mujer es casi c\363mico",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 315,
    p1: "Salvador Dali, 1944, photo by Johan Hagemeyer",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 257,
    p1: "Jackson Pollock, \"Phosphorescence\"",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 322,
    p1: "\"Autorretrato\" (1906), Pablo Picasso",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 196,
    h3: "Salvador Dali - Wailing Wall",
    p1: "Signed litho hanging in my family room, I can look at this for hours",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 293,
    h3: "Pablo Picasso",
    p1: "Don Quixote. Uno de mis dibujos favoritos, quiz\341s \n\
         por mi predilecci\363n por el hidalgo indomable.",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 275,
    h3: "Bev Doolittle",
    p1: "\"Pintos\" c.2000",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 315,
    h3: "Pablo Picasso",
    p1: "Don Quixote. Uno de mis dibujos favoritos, quiz\341s por mi predilecci\363n por el hidalgo indomable.",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 311,
    h3: "Michael Sowa ",
    p1: "Killer Cat",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 285,
    p1: "Parisian Surrealists Tristan Tzara, Paul Eluard, \n\
         Andre Breton, Hans Arp, Salvador Dali, Yves Tanguy, \n\
         Max Ernst, Rene Crevel, and Man Ray, Paris, 1933, by Anna Riwkin",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 260,
    h3: "10 Creative Ice Cube Tray Designs That Will Make You Look As Cool As You're Going To Feel",
    p1: "Vladimir Kush. I like to think that this is what happened to Atlantis.",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 239,
    p1: "Constantin Brancusi – Mademoiselle Pogany III - 1933",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 186,
    h3: "Realist painter Lucian Freud, famed for his nudes of family and friends, dies aged 88",
    p1: "Lucian Freud's portrait, Benefits Supervisor Sleeping,",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 337,
    p1: "Papua, New Guinea. Standing male figure with serpent. \n\
         <a href = \"http://www.johncorigliano.com/\">johncorigliano.com</a>",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 195,
    h3: "Samantha French",
    p1: "Samantha French received a BFA from Minneapolis \n\
         College of Art \n\
         and Design in 2005. Her work is inspired\n\
         by memories of life in Minnesota, \n\
         recalling warm summer days at the lake and \n\
         commonly featuring figures \n\
         immersed in the water or bathed in sun.",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 225,
    p1: "Rinocerote vestido con puntillas. Salvador Dali.",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 225,
    p1: "Rinocerote vestido con puntillas. Salvador Dali.",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  },
  {
    alt: "Nicolas Cage",
    imgh: 225,
    p1: "Rinocerote vestido con puntillas. Salvador Dali.",
    p2: "<strong>Pinned from</strong>:<br>Uploaded by user"
  }
];

/**
 *  Variable global objeto = Objeto.metodo(argumentos)
 *  
 *  Seleccionamos el 1º elemento raiz del arbol DOM de la pagina
 *  
 * @type Element - objeto con ID dentro del HTML
 */
var pinTerest = document.querySelector("#pinTerest");

/**
 * Funcion que recibe una propiedad en forma de array de objetos
 * 
 * @param {object} o - Objeto que representa cada elemento de la pagina  
 * @returns {no devuelve nada} - no devuelve nada
 */
function buildPin(o) {
  /**
   * Creamos un objeto 'div' para envolver los elementos como 'box'
   * 
   * @type Element 'div'
   */
  var pinWrapper = document.createElement("div");
// Le fijamos los atributos como nodos Hijos del nodo padre 'pinWrapper'
  pinWrapper.setAttribute("class", "pinWrapper");
// Le añadimos al objeto global '#pinWrapper' 
// el nuevo nodo 'div' con las propiedades
  pinTerest.appendChild(pinWrapper);

  /**
   * Creamos otro objeto 'div' para envolver la parte de la imagen
   * 
   * @type Element 'div'
   */
  var pinImage = document.createElement("div");
// Establecemos las propiedades al objeto 'div'
  pinImage.setAttribute("class", "pinImage");
// Añadimos el nuevo objeto nodo al DOM del 'div' creado
  pinWrapper.appendChild(pinImage);

  /**
   * Creamos otro objeto 'img' para almacenar la imagen
   * 
   * @type Element 'img'
   */
  var img = document.createElement("img");
// Establecemos los atributos al objeto 
// La URL donde se encuentra mediante la propiedad 'src' 
// que se obtiene del Array de objetos creado globalmente
  img.setAttribute("src", "http://www.placecage.com/236/" + o.imgh);
// Y la propiedad alt para añadirle una descripcion
  img.setAttribute("alt", o.alt);
// Agregamos al nodo raiz el nuevo objeto con las propiedades
  pinImage.appendChild(img);

  /**
   * Si objeto 'o' tiene el atributo
   * 
   */
  if (o.h3) {
// Cramos un nuevo elemento
    var GridTitle = document.createElement("h3");
// Establecemos los atributos
    GridTitle.setAttribute("class", "pin GridTitle");
// Le asignamos el texto que posea el objeto 'o' del texto h3
    GridTitle.innerHTML = o.h3;
// Agregamos el nuevo objeto al arbol DOM
    pinImage.appendChild(GridTitle);
  }

  /**
   * Creamos otro objeto de tipo parrafo
   *  
   * @type Element 'p'
   */
  var Description = document.createElement("p");
// Establecemos los atributos
  Description.setAttribute("class", "pin Description");
// Le añadimos el texto al elemento creado mediante el objeto array global
  Description.innerHTML = o.p1;
// Agregamos el nuevo objeto al arbol DOM 
  pinImage.appendChild(Description);

  /**
   * Creamos un objeto 'p' y le establecemos sus atributos
   * los unimos al elemento titulo
   * 
   * @type Element 'p'
   */
  var CreditTitle = document.createElement("p");
  CreditTitle.setAttribute("class", "pin CreditTitle");
// Le añadimos el texto al elemento creado mediante el objeto array global
  CreditTitle.innerHTML = o.p2;
  pinWrapper.appendChild(CreditTitle);

}

/**
 * Recorre todos los objetos creados y 
 * agregados al arbol DOM del elemento RAIZ
 * 
 * @type Number
 */
for (var i = 0; i < ry.length; i++) {
  buildPin(ry[i]);
}

