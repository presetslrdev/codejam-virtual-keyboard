let lang = 'ru';
let textBox = '';
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
        keys[lang][i].forEach(el => {
            let li = document.createElement('li');
            li.innerHTML += '<a href="#" ' + (el.length > 2 ? ('class="' + el + '"') : ('')) + '>' + (!Array.isArray(el) ? ('<span>' + el + '</span>') : ('<span>' + el[0] + '</span>' + '<span>' + el[1] + '</span>')) + '</a>';
            ul.appendChild(li);
        });
    }
    document.body.append(div);

    var list = document.querySelectorAll('a');
    for (let i = 0; list.length > i; i++) {
        list[i].onclick = function () {
            list[i].classList.add('animation');
            textBox += list[i].querySelector('span').textContent;
            updateText(textBox);
            setTimeout(function () {
                list[i].classList.remove('animation');
            }, 300)
        }
    }
    document.querySelector('.Lng').onclick = function () {
        lang = lang === 'en' ? 'ru' : 'en';
    };
};

function updateText(text) {
    document.querySelector('textarea').value = text;
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
        [
            ['`', '~'],
            ['1', '!'],
            ['2', '@'],
            ['3', '#'],
            ['4', '$'],
            ['5', '%'],
            ['6', '^'],
            ['7', '&amp;'],
            ['8', '*'],
            ['9', '('],
            ['0', ')'],
            ['-', '_'],
            ['=', '+'],
            'backspace'
        ],
        [
            'tab',
            'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            ['[', '{'],
            [']', '}'],
            'Lng'
        ],
        [
            'capslock',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
            [';', ':'],
            ["'", '&quot;'],
            ['\\', '|'],
            'enter'
        ],
        [
            'shift',
            'z', 'x', 'c', 'v', 'b', 'n', 'm',
            [',', '&lt;'],
            ['.', '&gt;'],
            ['/', '?'],
            'shift'
        ],
        [
            'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'Left', ['Up', 'Down'], 'Right'
        ]
    ],
    ru: [
        [
            'ё',
            ['1', '!'],
            ['2', '"'],
            ['3', '№'],
            ['4', ';'],
            ['5', '%'],
            ['6', ':'],
            ['7', '?'],
            ['8', '*'],
            ['9', '('],
            ['0', ')'],
            ['-', '_'],
            ['=', '+'],
            'backspace'
        ],
        [
            'tab',
            'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
            'Lng'
        ],
        [
            'capslock',
            'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
            [';', ':'],
            ["'", '&quot;'],
            ['\\', '/'],
            'enter'
        ],
        [
            'shift',
            'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю',
            ['.', ','],
            'shift'
        ],
        [
            'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'Left', ['Up', 'Down'], 'Right'
        ]
    ]
};
