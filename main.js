let lang = localStorage.lang ? localStorage.lang : 'ru';
let textBox = '';
let capsLockState = false;
const div = document.createElement('div');

const keys = {
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
      Backspace: 'Backspace',
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
      Lng: 'Lng',
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
      Enter: 'Enter',
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
      ShiftRight: 'Shift',
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
      ArrowRight: 'Right',
    },
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
      Backspace: 'Backspace',
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
      Lng: 'Lng',
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
      Enter: 'Enter',
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
      ShiftRight: 'Shift',
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
      ArrowRight: 'Right',
    },
  ],
};

window.addEventListener('keydown', (event) => {
  const keyCode = event.code.toLowerCase();
  document.querySelector(`.${keyCode}`).classList.add('active');
}, false);
window.addEventListener('keyup', (event) => {
  const keyCode = event.code.toLowerCase();
  setTimeout(() => {
    document.querySelector(`.${keyCode}`).classList.remove('active');
  }, 150);
}, false);

function updateText(text) {
  textBox += text;
  document.querySelector('textarea').value = textBox;
}

function removeCharAt(index) {
  const textInArea = document.querySelector('textarea').value;
  const element = textInArea.split('');
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
      capsLockState = !capsLockState;
      capsLockState ? document.querySelector('.capslock').classList.add('active') : document.querySelector('.capslock').classList.remove('active');
      rebuildKeyboard();
      break;
    case 'shift':
    case 'alt':
    case 'ctrl':
    case 'win':
    default:
      break;
  }
}

function createKeyboard(lang) {
  div.className = 'keyboard';
  for (let i = 0; keys[lang].length > i; i++) {
    const ul = document.createElement('ul');
    ul.className = keyClassName(i);
    div.appendChild(ul);
    Object.keys(keys[lang][i]).forEach((el) => {
      const li = document.createElement('li');
      li.innerHTML += `<a href="#" ${keys[lang][i][el].length > 0
        ? (`class="${el.toLowerCase()}"`) : ('')}>${!Array.isArray(keys[lang][i][el])
        ? capsLockState ? (`<span>${keys[lang][i][el].toUpperCase()}</span>`) : (`<span>${keys[lang][i][el]}</span>`)
        : (`<span>${keys[lang][i][el][0]}</span>` + `<span>${keys[lang][i][el][1]}</span>`)}</a>`;
      ul.appendChild(li);
    });
  }
  document.body.append(div);
}

function keyClassName(keyLine) {
  switch (keyLine) {
    case 0:
      return 'number';
    case 1:
      return 'qwerty';
    case 2:
      return 'asdfgh';
    case 3:
      return 'zxcvbn';
    default:
      return '';
  }
}

window.onload = function create() {
  const textArea = document.createElement('textarea');
  textArea.className = 'text';
  document.body.append(textArea);
  textArea.focus();

  createKeyboard(lang);

  document.addEventListener('click', function (e) {
    let target = '';
    if (e.target.closest('li')) {
      target = e.target.querySelector('span') ? e.target : e.target.closest('a');
      if (target) {
        const symbol = target.querySelector('span').textContent;
        target.classList.add('animation');
        if (symbol.length === 1) {
          updateText(symbol);
        } else {
          functionalButton(symbol.toLowerCase());
        }
        setTimeout(() => {
          target.classList.remove('animation');
        }, 300);
      }

      if (target && target.classList.contains('lng') || target.closest('a').classList.contains('lng')) {
        localStorage.lang = lang === 'en' ? 'ru' : 'en';
        lang = localStorage.lang;
        rebuildKeyboard();
      }
    }
  });
};

function rebuildKeyboard() {
  let clearElement = document.querySelector('.keyboard');
  while (clearElement.firstChild) {
    clearElement.removeChild(clearElement.firstChild);
  }
  createKeyboard(lang);
}
