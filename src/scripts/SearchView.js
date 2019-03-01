import { elements } from '../data/constants';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearRenderItems = () => {
    elements.renderItems.innerHTML = '';
};

const renderItem = item => {
    return  `<div class="col-2">
                <div class="week__forecast" id="0">
                    <div class="week__forecast_day">Sun</div>
                    <div class="week__forecast_img"><!--<i class="fas fa-cloud-sun-rain">--><img src="http://openweathermap.org/img/w/${item.weather[0]['icon']}.png" alt="${item.weather[0]['description']}" title="${item.weather[0]['description']}"> </i></div>
                    <div class="week__forecast_temperature">${(item.main["temp"]-272.15).toFixed(2)}°</div>
                </div>
            </div>`;

};

export const renderItems = items => {
    let fragment = '';
    items.forEach(item => fragment += renderItem(item) !== 'undefined' ? renderItem(item) : '');
    elements.renderItems.innerHTML = fragment;
    clearInput();
};

export const findMatches = (value, cities) => {
    return cities.filter(city => {
        const regex = new RegExp(value, 'gi');
        return city.name.match(regex);
    });
};

export const renderMatches = (value, cities) => {
    const matchArray = findMatches(value, cities);
    const list = matchArray.map(item => {
        return `<li class="search__list_item">
                ${item.name}, ${item.country}
            </li>`;
    }).join('');
    if(list.length > 0){
        elements.searchList.innerHTML = list;
    } else{
        elements.searchList.innerHTML = '';
    }
};