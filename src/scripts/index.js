import "babel-polyfill";
import SearchModel from './SearchModel';
import { elements, renderLoader } from '../data/constants';
import { CITIES } from '../data/city.min';
import * as searchView from './SearchView';

const state = {};

const controlSearch = async (value) => {
    const query = searchView.getInput();
    if(query){
        renderLoader(elements.renderItems);
        state.search = new SearchModel();// передать query
        await state.search.getResults();
        console.log(state.search.result);
        searchView.renderItems(state.search.result.splice(0, 6));
    }
};

elements.searchForm
    .addEventListener('submit',  e => {
        e.preventDefault();
        controlSearch();
        elements.searchList.innerHTML = '';
    });

elements.searchInput
    .addEventListener('input',  e => {
        if(e.target.value.length > 2){
            searchView.renderMatches(e.target.value, CITIES);
        } else{
            elements.searchList.innerHTML = '';
        }
    });

elements.searchList
    .addEventListener('click',  e => {
        if(e.target.classList.contains('search__list_item')){
            elements.searchInput.value = e.target.innerHTML.trim();
            elements.searchInput.focus();
            elements.searchList.innerHTML = '';
        }
    });

