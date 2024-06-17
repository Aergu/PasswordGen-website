const passwordBox = document.getElementById("generatedpassword"); /* Hämtar id som den ska deklarera, i detta fall, så är det "generatedpasswordtextbox" */
const length = 12; /*Detta visar att längden av  den genererade lösenordet är 12.*/

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
const lowerCase = "abcdefghijklmnopqrstuvwxyzåäö"; /* dessa bokstäver, siffror och symboler är komponenter till den genererade lösenordet. dvs, lösenordet skapas av dessa bokstäver, siffror och symoboler.*/
const number = "0123456789";
const symbol = "@#%{}[]<>-_+/\=";

const allChars = upperCase + lowerCase + number + symbol; /*Detta säger att den resultatet som visas ska vara en blandning av upperCase, lowerCase, number och symbol. */

function createPassword() {
    let generatedpassword="";
    generatedpassword += upperCase[Math.floor(Math.random() * upperCase.length)]; /* Math.floor(Math.random) slumpmässigt genererar ett värde bland bokstäven i den upperCase. */
    generatedpassword += lowerCase[Math.floor(Math.random() * lowerCase.length)]; /* Math.floor(Math.random) slumpmässigt genererar ett värde bland bokstäven i den lowerCase. */
    generatedpassword += number[Math.floor(Math.random() * number.length)]; /* Math.floor(Math.random) slumpmässigt genererar ett värde bland siffrorna i number. */
    generatedpassword += symbol[Math.floor(Math.random() * symbol.length)]; /* Math.floor(Math.random) slumpmässigt genererar ett värde bland symbolerna i symbol. */

    while(length > generatedpassword.length){
        generatedpassword += allChars[Math.floor(Math.random() * allChars.length)]; /* vad det här visar är att den kommer att lägga till ett värde på den genererade lösenordet om längden till lösenordet inte är 12 tecken. */
    }
passwordBox.value= generatedpassword; /*Detta gör så att själva lösenordet visas på textrutan. */
}

function copyPassword(){
    passwordBox.select(); /* väljer den genererade lösenordet */
    document.execCommand("copy"); /* och kopierar den. */
}