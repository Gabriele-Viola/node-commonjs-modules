/*
1 - names.js
Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.
*/
/**
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 */
function names(firstName, lastName) {
    const fullName = {
        firstName,
        lastName 
    }
    return fullName
}
// const user = names('gabriele', 'viola')
// console.log(user);
module.exports = names