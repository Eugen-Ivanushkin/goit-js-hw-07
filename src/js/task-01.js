const categoriesListItem = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoriesListItem.length} категории`);


categoriesListItem.forEach(element => {
    const textTittle = element.querySelector('h2');
    console.log('========================');
    console.log(`- Категория: ${textTittle.textContent}`);
    const count = element.querySelectorAll('li');
    console.log(`- Количество элементов: ${count.length}`);
});


// const categoriesListItem = document.querySelectorAll('#categories .item');
// console.log(`В списке ${categoriesListItem.length} категории`);


// categoriesListItem.forEach(element => {
//     const textTittle = element.firstElementChild;
//     console.log('========================');
//     console.log(`- Категория: ${textTittle.textContent}`);
//     const count = element.lastElementChild;
//     console.log(`- Количество элементов: ${count.children.length}`);
// });