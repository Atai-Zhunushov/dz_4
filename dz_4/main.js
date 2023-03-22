let counter = 0;
const counterEl = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
incrementBtn.addEventListener('click', () => {
    counter++;
    counterEl.innerText = counter;
    counterEl.style.color = 'green';
});
decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counterEl.innerText = counter;
        counterEl.style.color = 'red';
    }
});
// 2
const box = document.getElementById('box');
box.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`X: ${x}, Y: ${y}`);
});
//3
const input = prompt('Введите цвет светофора:').trim();
if (input === 'красный') {
    document.querySelector('.red').style.backgroundColor = '#f00';
    document.querySelector('.yellow').style.backgroundColor = '#555';
    document.querySelector('.green').style.backgroundColor = '#555';
    alert('STOP');
} else if (input === 'зеленый') {
    document.querySelector('.red').style.backgroundColor = '#555';
    document.querySelector('.yellow').style.backgroundColor = '#555';
    document.querySelector('.green').style.backgroundColor = '#0f0';
    alert('Go');
} else {
    alert('Некорректный ввод');
}
