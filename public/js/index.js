import fetchData from "./util/fetchData.js";
import renderList from "./util/renderList.js";

const filtersButton = document.querySelector(".filters__header");
const filtersArr = document.querySelectorAll(".filter");
const filters = document.getElementById("filters");
const searchForm = document.querySelector(".search");
const input = document.getElementById("input__field");
const themeToggle = document.getElementById("theme__toggle");

document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchData("all", "");
    renderList(data);
});

filtersButton.addEventListener("click", onFiltersClick);

function onFiltersClick() {
    filters.classList.toggle("active");
}

filtersArr.forEach((filter) => {
    filter.addEventListener("click", async (e) => {
        
        onFiltersClick();

        const region = e.target.dataset.filter;
        const data = await fetchData("region", region);
        if (input.value) {
            input.value = "";
        }
        renderList(data);
    });
});

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = await fetchData("name", input.value);
    renderList(data);
});

themeToggle.addEventListener('click', () => {
    let html = document.documentElement;
    switch(html.dataset.theme) {
        case "dark":
            html.setAttribute('data-theme', 'light');
            themeToggle.innerText = "Dark Theme";
            break;
        case "light":
            html.setAttribute('data-theme', 'dark');
            themeToggle.innerText = "Light Theme";
            break;
        default:
            html.setAttribute('data-theme', 'dark');
    }
})