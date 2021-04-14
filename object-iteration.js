// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    const newObject = {};

    for (let key in someObject) {
        let uppercaseKey = key.toUpperCase();
        let values = someObject[key];

        newObject[uppercaseKey] = values;
    }

    return newObject;
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    let newString = '';
    const keyArray = Object.keys(someObject);
    keyArray.forEach(value => newString = String(value) + newString)

    return newString;
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const newArray = [];
    for (let key in someObject) {
        newArray.push(Array(key, someObject[key]));
    }
    return newArray;
}
