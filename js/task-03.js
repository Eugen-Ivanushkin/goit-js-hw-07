const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const gallaryList = document.querySelector('#gallery');

const gallaryElements = ({ url, alt }) => {
    return `<li><img src="${url}" alt="${alt}" width ="300" ></li>`
};

const makeImgEl = images.map(gallaryElements).join('');

gallaryList.insertAdjacentHTML('beforeend', makeImgEl);

gallaryList.style.display = 'flex';
gallaryList.style.flexDirection = 'column';



// const gallaryElements = images.forEach(item => {
//  // ***********Добавить лишку (-_-)************
//     const imgItem = document.createElement('img');
//     imgItem.src = item.url;
//     imgItem.alt = item.alt;
//     gallaryList.appendChild(imgItem);
// });

// const image = gallaryList.querySelectorAll('img');

// gallaryList.style.display = 'flex';
// gallaryList.style.flexDirection = 'column';
// image.forEach(item => {
//     item.style.width = '300px';
//     item.style.marginBottom = '20px';
// })