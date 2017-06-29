// Turn off app processes and save work
document.querySelector('.panel-close-trigger').addEventListener('click', function () {
    // ...
});

document.querySelector('.panel-search-trigger').addEventListener('click', function () {
    var input = document.querySelector('input[name=panel-search]');
    input.classList.toggle('open');
    if (input.classList.contains('open')) {
        input.focus();
        input.selectionStart = 0;
    } else input.blur();
});