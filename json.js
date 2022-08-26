/* JSON
- JavaScript Object Notation
- simplest data interchange format
- lightweight text-based structure
- easy to read
- key-value pairs
- used for serialization(직렬화) and transmisiion of data between the network and the network connection
- independent programming language and platform
*/


// 1. Object to JSON
// stringify (obj)
let json = JSON.stringify(true);
console.log(json);


json = JSON.stringify(['apple', 'banana']);
console.log(json);



const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);  //함수는 JSON에 포함x
console.log(rabbit);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);



// 2. JSON to Object
// parse()
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();  //  can jump!
// obj.jump();  -> error

console.log(rabbit.birthDate.getDate());    // 26
// console.log(obj.birthDate.getDate()); -> error (stirng 타입이기 때문)

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2.birthDate.getDate());  // 26



/* USEFUL SITE
1. JSON Diff
2. JSON Beautifier
3. JSON Parser
4. JSON Validator
*/