const number = document.getElementById('number');
const button = document.getElementById('button');

let count = 0;

const increase = () =>{
    count++;
    number.innerText = count;
}
