//задача 7
let rle = function(input) {
    let result = '';
    let count = 1;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            result += count + input[i];
            count = 1;
        }
    }
    return result;
}


const compressed = rle("AAAABBBCCDAAффффф");
console.log(compressed);
//задача 1
function merge(...objects) {
    const result = {};
    for (const obj of objects) {
        for (const [key, value] of Object.entries(obj)) {
            if (!(key in result)) {
                result[key] = value;
            }
        }
    }
    return result;
}
class pop{
    constructor(a, r){
    this.a=a
    this.r=r
    }
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };
const obj4 = new pop(1, 2);

const merged = merge(obj1, obj2, obj3, obj4);
console.log(merged);
