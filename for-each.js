// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const namesArray = [];
    arr.forEach((object) => namesArray.push(object.name))
    return namesArray;
}
/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const reverseNamesArray = [];
    arr.forEach((object) => reverseNamesArray.push(object.type))
    reverseNamesArray.reverse();
    return reverseNamesArray;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newArray = [];
    arr.forEach(object => {
        const { name: nombre, type: tipo } = object;
        newArray.push({ nombre, tipo });
    })
    return newArray;
}

