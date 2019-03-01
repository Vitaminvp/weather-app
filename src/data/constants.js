export const URL = `https://api.openweathermap.org/data/2.5/forecast?q=`;
export const KEY = 'e17681c6b25cbaab506757b3f0966598';
export const elements = {
    searchForm: document.querySelector('.search__form'),
    searchInput: document.querySelector('.search__input'),
    renderItems: document.querySelector('.renderItems'),
    searchList: document.querySelector('.search__list')
};
export const classes = {
    loader: 'loader'
};
export const renderLoader = parent => {
    const loader = `
        <div class="${classes.loader}">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>`;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${classes.loader}`);
    if(loader) loader.parentNode.removeChild(loader);
};