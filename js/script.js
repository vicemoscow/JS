document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = '<b>Hello</b>';

document.querySelector('h2.header').innerHTML = 55555;
document.querySelector('#one').innerHTML = 777;

let a = document.querySelector('#one');
let c;
c = document.querySelector('h2.header');

a.innerHTML = 9999; // new - ошибка
c.innerHTML = 6666;