
const list = document.getElementById('todoList');
const addTodoButton = document.getElementById('addTodo');
const newTodoInput = document.getElementById('newTodoInput');
const todoCount = document.getElementById('todoCount');


const body = (item, todo) => {
    const container = document.createElement('div');
    const button = deleteButton(item);
    const body = document.createElement('p');

    body.innerHTML = todo;

    container.classList.add('alert');
    container.appendChild(button);
    container.appendChild(body);

    return container;
}

const deleteButton = (item) => {
    const deleteButton = document.createElement('span');

    deleteButton.innerHTML = '&times;';
    deleteButton.classList.add('close');
    deleteButton.onclick = () => {
        item.parentElement.removeChild(item);
        todoCount.innerHTML = list.childElementCount;
    }

    return deleteButton;
}

const addTodo = (todo) => {
    if (todo.trim() === '') { return; }
    const item = document.createElement('li');
    const content = body(item, todo);

    item.appendChild(content);
    list.appendChild(item);
    todoCount.innerHTML = list.childElementCount;
}

const addTodoHandler = () => {
    addTodo(newTodoInput.value);
    newTodoInput.value = '';
};

newTodoInput.onkeypress = e => {
    if (e.keyCode !== 13) { return; }
    addTodoHandler();
};

addTodoButton.onclick = addTodoHandler;
