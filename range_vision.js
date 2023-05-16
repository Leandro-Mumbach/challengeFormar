/*Crear la función range_vision() que, dado un entero no negativo, determine si hay al menos un dígito 1 en el entero que tiene el valor de visualización más bajo de todos los dígitos del entero. La función debe devolver un booleano: true cuando un dígito 1 tiene el valor de vista más bajo en el número dado, false de lo contrario.

Imagine un número entero no negativo, digamos 34315. Cada dígito en el número entero tiene un llamado rango de visión . El primer dígito, 3, tiene un rango de visión de 3. En otras palabras, puede 3 "ver" 3 dígitos a cada lado de sí mismo. En nuestro ejemplo, puede mirar a la derecha de sí mismo y ver 4, 3 y 1. A la izquierda, no hay nada. El rango de visión de cada dígito es su propio valor.

Ahora bien, el rango de visión de un dígito define el llamado valor de visión, que es la suma de los dígitos dentro del rango de visión. Entonces, el valor de visión del primer dígito, 3 es 4+3+1=8. Para el segundo dígito, 4 el valor de visión es 3+3+1+5=12.

Ejemplos:  Para el número 34315:

Dígito: 3                           Dígito: 4                                   Dígito: 3
Puede ver a la izquierda: -         Se puede ver a la izquierda: 3              Puede ver a la izquierda: 34
Puede ver a la derecha: 431         Se puede ver a la derecha: 315              Puede ver a la derecha: 15
Valor de la visión:4 + 3 + 1 = 8    Valor de la visión:3 + 3 + 1 + 5 = 12       Valor de la visión:3 + 4 + 1 + 5 = 13

Dígito: 1                           Dígito: 5
Se puede ver a la izquierda: 3      Puede ver a la izquierda: 3431
Se puede ver a la derecha: 5        Puede ver a la derecha: -
Valor de la visión:3 + 5 = 8        valor de la visión:3 + 4 + 3 + 1 = 11

¿Hay un dígito 1 en el número entero para el cual el valor de visión es mínimo?

Sí, 8 es el valor mínimo de visión, tanto para el primer 3 como para el 1. Eso satisface los criterios, por lo que la función devuelve true.*/

/* function range_vision(number) {
  // digits = Array.from(String(number), Number); // Convertir el número en un array de dígitos
  for (let i = 0; i < number.length; i++) {
    let visionRange = number[i];
    let visionValue = 0;
    for (let j = i - visionRange; j <= i + visionRange; j++) {
      if (j >= 0 && j < number.length) {
        visionValue += number[j];
      }
    }
    if (number[i] === 1 && visionValue < number[i]) {
      return true;
    }
  }
  return false;
}
 */

/* function range_vision(number) {
    var digits = Array.from(String(number), Number); // Convertir el número en un array de dígitos
    var minValue = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < digits.length; i++) {
      var visionRange = digits[i];
      var visionValue = 0;
      for (var j = i - visionRange; j <= i + visionRange; j++) {
        if (j >= 0 && j < digits.length) {
          visionValue += digits[j];
        }
      } 
      if (digits[i] === 1 && visionValue < minValue) {
        minValue = visionValue;
      }
    }
    return minValue === 1; // Cambiar el valor a verificar según los ejemplos
  }
   */

console.log(range_vision(34315));   // true
console.log(range_vision(123456));  // false
console.log(range_vision(111));     // false
console.log(range_vision(212));     // true
