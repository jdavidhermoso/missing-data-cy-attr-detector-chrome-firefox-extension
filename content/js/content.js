const INTERACTIVE_ELEMENTS = [
    '.btn',
    'button',
    'input',
    'select'
]
const MISSING_ATTRIBUTE = 'data-cy'
const MISSING_ATTRIBUTE_CLASS = 'MISSING_ATTRIBUTE'

function getCheckQueryString() {
    return INTERACTIVE_ELEMENTS
        .map((interactiveElement) => `body.check__page 
            ${interactiveElement}:not([${MISSING_ATTRIBUTE}]), body.check__page ${interactiveElement}[${MISSING_ATTRIBUTE}=""]`)
        .join(' ')
}

(() => {
    const body = document.querySelector('body');
    body.classList.add('check__page');

    console.log(document.querySelectorAll(getCheckQueryString()))

    setInterval(() => {
        document.querySelectorAll(getCheckQueryString()).forEach((element) => {
            element.classList.add(MISSING_ATTRIBUTE_CLASS)
            element.style.border = '3px dotted red'
        })
    }, 5000)
})();
