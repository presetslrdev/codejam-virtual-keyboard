let lang = localStorage.lang ? localStorage.lang : 'ru';
let textBox = '';
let capsLockState = 0;
window.onload = function () {

    let textArea = document.createElement('textarea');
    textArea.className = 'text';
    document.body.append(textArea);
    let div = document.createElement('div');
    div.className = 'keyboard';
    for (let i = 0; keys[lang].length > i; i++) {
        let ul = document.createElement('ul');
        ul.className = keyClassName(i);
        div.appendChild(ul);
        for(let key in keys[lang][i]){
            let li = document.createElement('li');
            li.innerHTML += '<a href="#" ' + (keys[lang][i][key].length > 0 ? ('class="' + key.toLowerCase() + '"') : ('')) + '>' + (!Array.isArray(keys[lang][i][key]) ? ('<span>' + keys[lang][i][key] + '</span>') : ('<span>' + keys[lang][i][key][0] + '</span>' + '<span>' + keys[lang][i][key][1] + '</span>')) + '</a>';
            ul.appendChild(li);
        }
    }
    document.body.append(div);

    let list = document.querySelectorAll('a');
    for (let i = 0; list.length > i; i++) {
        list[i].onclick = function () {
            let symbol = list[i].querySelector('span').textContent;
            list[i].classList.add('animation');
            if (symbol.length === 1) {
                updateText(symbol);
            } else {
                functionalButton(symbol.toLowerCase());
            }
            setTimeout(function () {
                list[i].classList.remove('animation');
            }, 300)
        }
    }
    document.querySelector('.Lng').onclick = function () {
        lang = localStorage.lang = lang === 'en' ? 'ru' : 'en';
    };

    document.querySelector('textarea').addEventListener('keyup', e => {
        console.log('Caret at: ', e.target.selectionStart)
    });

};

window.addEventListener("keydown", function (event) {
    let keyCode = event.code.toLowerCase();
    console.log(keyCode);
    document.querySelector('.' + keyCode).classList.add("active");
}, false);
window.addEventListener("keyup", function (event) {
    let keyCode = event.code.toLowerCase();
    setTimeout(function () {
        document.querySelector('.' + keyCode).classList.remove("active")
    }, 150);
}, false);

function updateText(text) {
    textBox += text;
    document.querySelector('textarea').value = textBox;
}

function removeCharAt(index) {
    let textInArea = document.querySelector('textarea').value;
    let element = textInArea.split('');
    element.splice((index || 0) - 1, 1);
    textBox = element.join('');
    document.querySelector('textarea').value = textBox;
}

function functionalButton(btn) {
    switch (btn) {
        case 'space':
            updateText(' ');
            break;
        case 'enter':
            updateText('\n');
            break;
        case 'tab':
            updateText('\t');
            break;
        case 'backspace':
            removeCharAt();
            break;
        case 'capslock':
            capsLockState = capsLockState === 0 ? 1 : 0;
            capsLockState ? document.querySelector('.capslock').classList.add("active") : document.querySelector('.capslock').classList.remove("active")
            break;
        case 'shift':
        case 'alt':
        case 'ctrl':
        case 'win':
            break;
    }
}

function keyClassName(keyLine) {
    switch (keyLine) {
        case 0:
            return 'number';
            break;
        case 1:
            return 'qwerty';
            break;
        case 2:
            return 'asdfgh';
            break;
        case 3:
            return 'zxcvbn';
            break;
        default:
            return '';
    }
}

let keys = {
        en: [
            {
                Backquote: ['`', '~'],
                Digit1: ['1', '!'],
                Digit2: ['2', '@'],
                Digit3: ['3', '#'],
                Digit4: ['4', '$'],
                Digit5: ['5', '%'],
                Digit6: ['6', '^'],
                Digit7: ['7', '&amp;'],
                Digit8: ['8', '*'],
                Digit9: ['9', '('],
                Digit0: ['0', ')'],
                Minus: ['-', '_'],
                Equal: ['=', '+'],
                Backspace: 'Backspace'
            },
            {
                Tab: 'Tab',
                KeyQ: 'q',
                KeyW: 'w',
                KeyE: 'e',
                KeyR: 'r',
                KeyT: 't',
                KeyY: 'y',
                KeyU: 'u',
                KeyI: 'i',
                KeyO: 'o',
                KeyP: 'p',
                BracketLeft: ['[', '{'],
                BracketRight: [']', '}'],
                Lng: 'Lng'
            },
            {
                CapsLock: 'CapsLock',
                KeyA: 'a',
                KeyS: 's',
                KeyD: 'd',
                KeyF: 'f',
                KeyG: 'g',
                KeyH: 'h',
                KeyJ: 'j',
                KeyK: 'k',
                KeyL: 'l',
                Semicolon: [';', ':'],
                Quote: ["'", '&quot;'],
                Backslash: ['\\', '|'],
                Enter: 'Enter'
            },
            {
                ShiftLeft: 'Shift',
                KeyZ: 'z',
                KeyX: 'x',
                KeyC: 'c',
                KeyV: 'v',
                KeyB: 'b',
                KeyN: 'n',
                KeyM: 'm',
                Comma: [',', '&lt;'],
                Period: ['.', '&gt;'],
                Slash: ['/', '?'],
                ShiftRight: 'Shift'
            },
            {
                ControlLeft: 'Ctrl',
                MetaLeft: 'Win',
                AltLeft: 'Alt',
                Space: 'Space',
                AltRight: 'Alt',
                ControlRight: 'Ctrl',
                ArrowLeft: 'Left',
                ArrowUp: 'Up',
                ArrowDown: 'Down',
                ArrowRight: 'Right'
            }
        ],
        ru: [
            {
                Backquote: 'ё',
                Digit1: ['1', '!'],
                Digit2: ['2', '"'],
                Digit3: ['3', '№'],
                Digit4: ['4', ';'],
                Digit5: ['5', '%'],
                Digit6: ['6', ':'],
                Digit7: ['7', '?'],
                Digit8: ['8', '*'],
                Digit9: ['9', '('],
                Digit0: ['0', ')'],
                Minus: ['-', '_'],
                Equal: ['=', '+'],
                Backspace: 'Backspace'
            },
            {
                Tab: 'Tab',
                KeyQ: 'й',
                KeyW: 'ц',
                KeyE: 'у',
                KeyR: 'к',
                KeyT: 'е',
                KeyY: 'н',
                KeyU: 'г',
                KeyI: 'ш',
                KeyO: 'щ',
                KeyP: 'з',
                BracketLeft: 'х',
                BracketRight: 'ъ',
                Lng: 'Lng'
            },
            {
                CapsLock: 'Capslock',
                KeyA: 'ф',
                KeyS: 'ы',
                KeyD: 'в',
                KeyF: 'а',
                KeyG: 'п',
                KeyH: 'р',
                KeyJ: 'о',
                KeyK: 'л',
                KeyL: 'д',
                Semicolon: 'ж',
                Quote: 'э',
                Backslash: ['\\', '/'],
                Enter: 'Enter'
            },
            {
                ShiftLeft: 'Shift',
                KeyZ: 'я',
                KeyX: 'ч',
                KeyC: 'с',
                KeyV: 'м',
                KeyB: 'и',
                KeyN: 'т',
                KeyM: 'ь',
                Comma: 'б',
                Period: 'ю',
                Slash: ['.', ','],
                ShiftRight: 'Shift'
            },
            {
                ControlLeft: 'Ctrl',
                MetaLeft: 'Win',
                AltLeft: 'Alt',
                Space: 'Space',
                AltRight: 'Alt',
                ControlRight: 'Ctrl',
                ArrowLeft: 'Left',
                ArrowUp: 'Up',
                ArrowDown: 'Down',
                ArrowRight: 'Right'
            }
        ]
    }
;
