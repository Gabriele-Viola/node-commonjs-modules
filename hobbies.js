/*
2 - hobbies.js
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
Esporta la funzione dal file.
*/
/**
 * 
 * @param {string} hobbyOne 
 * @param {string} hobbyTwo 
 * @param {string} hobbyThree 
 */
function hobbies(hobbyOne, hobbyTwo, hobbyThree) {
    const hobby = {
        hobbies: [hobbyOne, hobbyTwo, hobbyThree]
    }
    return hobby
}


module.exports = hobbies()