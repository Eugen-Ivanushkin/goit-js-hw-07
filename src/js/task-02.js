const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');


const ingridientEl = ingredients.map(item => {

    const itemLi = document.createElement('li');
    itemLi.textContent = item;
    return itemLi;
});

ingredientsList.append(...ingridientEl);