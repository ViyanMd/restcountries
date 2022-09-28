const countriesContainer = document.getElementById("main__content");

export default function renderList(data) {

    let list = data.map((item) => {
       return `
        <div class="country__card">
            <img class="flag" src="${item.flags.svg}">
            <div class="country__card_desc">
                <h3 class="country__name">${item.name.common}</h3>
                <ul class="card__desc">
                    <li><span>Population: </span>${item.population}</li>
                    <li><span>Region: </span>${item.region}</li>
                    <li><span>Capital: </span>${item.capital}</li>
                <ul>
            </div>
        </div>
        `;
    }).join(" ");

    countriesContainer.innerHTML = list;
}
