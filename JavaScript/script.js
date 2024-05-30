console.log('Hello World');
console.log(1);

let a = 1;
console.log(typeof a);

const b = '1';

console.log(a == b);
console.log(a === b);

const title = document.querySelector('h1');
const name1 = document.querySelector('input#YourName');
const sendButton = document.querySelector('input#Sender')

sendButton.addEventListener('click', onClick)

function onClick(){
    title.innerHTML = `Hello, ${name1.value}!`
}