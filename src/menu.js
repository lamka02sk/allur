document.querySelector('.panel-search-trigger').addEventListener('click', () => {
    let input = document.querySelector('input[name=panel-search]');
    input.classList.toggle('open');
    if(input.classList.contains('open')) {
        input.focus();
        input.selectionStart = 0;
    } else input.blur();
});