const API_URL = "https://restcountries.com/v3.1/"

export default async function fetchData(path, name) {
    let result = await fetch(`${API_URL}/${path}/${name}`)
    let data = await result.json();
    return data;
}