/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const newInput = document.querySelector('#input');
const inputContainer = document.querySelector('#items');


newInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const inputText = newInput.value;

        if (inputText !== '') {
            const newItem = document.createElement('p');
            newItem.classList.add('container');
            newItem.textContent = inputText;

            newItem.addEventListener('click', function() {
                newItem.classList.toggle('done');
            });

            inputContainer.append(newItem);

            newInput.value = '';
        }
    }
})