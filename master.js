'use strict';
let display = document.getElementById('display');

let buttons = Array.from(document.querySelectorAll('.button'));
let obuttons = Array.from(document.querySelectorAll('.obutton'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = ' ';
                break;
            case 'D':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    if (display.innerText) {
                        display.innerText = eval(display.innerText);
                    }
                } catch {
                    setTimeout(() => {
                        display.innerText = "";
                    }, 500)
                    display.innerText = "Invalid";
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})