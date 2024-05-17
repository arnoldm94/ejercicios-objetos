/* Crear la clase Person, con propiedades name, age y genre, y el
método obtDetails(), que muestra por pantalla las propiedades de
la persona.
 */
function Person (name, age, genre){
    this.name = name
    this.age = age
    this.genre = genre
    this.obtDetails = function(){
        console.log(name + " " + age + " " + genre)
    }
}
const persona1 = new Person ("Arnold", "29", "masculino")


/* ● Crear la clase Student, que hereda de Person, e incluye las
propiedades course y group y el método register(), que muestre
por pantalla el resultado. */

function Student (name, age, genre, course, group){
    Person.call(this, name, age, genre)
    this.course = course
    this.group = group
    this.register = function(){
        console.log("Resultado???");
    }

}
const student1 = new Student ("Jose", "18", "masculino", "1024", "B")


/* ● Crear la clase Teacher, que hereda de Person, e incluye las
propiedades asignatura y level y el método assign(), que muestre
por pantalla el resultado. */
function Teacher (name, age, genre, asignatura, level){
    Person.call(this, name, age, genre)
    this.asignatura = asignatura
    this.level = level
    this.assign = function(){
        console.log("Resultado de assign???");
    }

}
const teacher1 = new Teacher ("Paula", "29", "femenina", "Matematicas", "9no")



//Construye las siguientes clases:

/*Warrior:
constructor(life, power): Establece el valor de las propiedades life y power
attack: Devuelve el valor de power del guerrero
defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

Maya: extiende de la clase Warrior
constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
drinkColaCao: Suma 10 al poder.

Aztec: extiende de la clase Warrior
constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
drinkNesquik: Suma 10 a la vida.*/

function Warrior(life, power){
this.life = life
this.power = power
this.attack = function(){
    return (this.power)
}
this.defend = function(damage){
let life = this.life - damage
return(life);
}
}

function Maya(life, power){
    Warrior.call(this, life, power)
    this.drinkColaCao = function(){
   this.power += 10; 
       return ("el poder del Maya ahora sube a: " + this.power)
    }
}

function Aztec(life, power){
    Warrior.call(this, life, power)
    this.drinkNesquik = function(){
    this.life += 10; 
    return ("la vida del Aztec ahora es: " + this.life)
    }
}


/*Realiza la siguiente cadena de intercambio de golpes.
Azteca bebe nesquik
Maya bebe Cola Cao
Maya ataca a azteca. Azteca defiende.
Azteca ataca a maya. Maya defiende. */
let luchadorMaya = new Maya (100, 10)
let luchadorAzteca = new Aztec (100, 5)

console.log("la vida del luchador Azteca es: "+ luchadorAzteca.life)
console.log("y el poder del luchador Azteca es: "+ luchadorAzteca.power)
console.log("La vida del luchador Maya es: " + luchadorMaya.life)
console.log("y el poder del luchador Maya es: " + luchadorMaya.power)

console.log(luchadorAzteca.drinkNesquik())
console.log(luchadorMaya.drinkColaCao())

console.log("Maya ataca a Azteca y la vida de Azteca queda en: " + luchadorAzteca.defend(luchadorMaya.attack()))
console.log("Azteca ataca a Maya y la vida de Maya queda en: " + luchadorMaya.defend(luchadorAzteca.attack()))




