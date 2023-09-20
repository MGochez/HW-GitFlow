const finding = (array, word) => {
    let wordFound = false
    for( let i=0; i < array.length; i++){
        if(array[i] === word){
            wordFound = true
        }
    }
    return wordFound
}

const palabras = ['garabato', 'éxito', 'rinoceronte', 'tenedor', 'espada', 'mesa', 'vinotinto', 'avión']

console.log(finding(palabras, 'rinoceronte'));